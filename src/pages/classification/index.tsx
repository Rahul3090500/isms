import React, { useState } from "react";
import BarChart from "../../components/ISMS/BarChart";
import classes from "./ClassificationCommentTab.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as XLSX from "xlsx";

interface CommentTabProps {
  classificationChartData: any;
  classificationComments: any;
  loadingCommentClassifications: any;
  videoSummary: any;
}

const ClassificationCommentTab: React.FC<CommentTabProps> = ({
  classificationChartData,
  classificationComments = [],
  loadingCommentClassifications,
  videoSummary,
}) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClicks = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "user_name", headerName: "User Id", flex: 0.55, minWidth: 100 },
    // { field: 'published_time', headerName: 'PUBLISHED TIME', flex: 1, minWidth: 200 },
    {
      field: "updated_time",
      headerName: "Time Stamp",
      flex: 0.35,
      minWidth: 100,
    },
    { field: "comment", headerName: "Comments", flex: 1.3, minWidth: 250 },
    { field: "sentence_type", headerName: "Sentence Type", width: 180 },
  ];
  const router = useRouter();

  const rows = classificationComments?.map((comment: any, index: number) => ({
    id: index + 1, // Ensure you have a unique ID for each row
    ...comment,
  }));
  const exportToExcel = (data: any, fileName: any) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const convertToCSV = (data: any) => {
    let csvString = "";
    // Generate CSV header
    const headers = [
      "No",
      "User Id",
      "Time Stamp",
      "Comments",
      "Sentence Type",
    ];
    csvString += headers.join(",") + "\r\n";

    // Generate CSV rows
    data.forEach(
      (row: {
        id: any;
        user_name: any;
        updated_time: any;
        comment: string;
        sentence_type: any;
      }) => {
        const rowData = [
          row.id,
          row.user_name,
          row.updated_time,
          `"${row.comment.replace(/"/g, '""')}"`,
          row.sentence_type,
        ];
        csvString += rowData.join(",") + "\r\n";
      }
    );

    return csvString;
  };
  const exportToCSV = (rows: any) => {
    const csvData = convertToCSV(rows); // `rows` is your data array from the DataGrid
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "classification_analysis_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {" "}
      <div className={classes.Classification}>
        <div className={classes.header}>
          <span className={classes.text}>Classification</span>
          <span onClick={handleClick} className={classes.refresh}>
            <span>
              <svg
                className={isButtonLoading ? classes.refresh_animate : ""}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="35" fill="" />
                <path
                  d="M29 9.99756V15.9976H23"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 25.9976V19.9976H13"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976"
                  stroke="#070da1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Refresh
          </span>{" "}
        </div>
        <div className={classes.sub_header}>
          Provides the classification of the comments in different sentence
          types
        </div>
        {loadingCommentClassifications ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {!videoSummary ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                  m: 2,
                  border: "1px dashed #1976d2",
                  borderRadius: "8px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  gutterBottom
                  sx={{ textAlign: "center", mb: 2 }}
                >
                  To unlock full insights, kindly add your YouTube video link in
                  Settings.
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{ textAlign: "center", mb: 3 }}
                >
                  Caze iSMS provides AI-driven analysis for your social media
                  channels, offering sentiment analysis, comment classification,
                  and more. Start optimizing your digital marketing by
                  integrating your YouTube Video!
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => router.push("/settings")}
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  Go to Settings
                </Button>
              </Box>
            ) : (
              <div className={classes.dec}>
                <div className={classes.barchart}>
                  <BarChart chartData={classificationChartData} />
                </div>
                <div
                  className={classes.datagrid}
                  style={{ height: 400, width: "100%" }}
                >
                  <Button
                    id="export-button"
                    aria-controls={open ? "export-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="outlined"
                    onClick={handleClicks}
                  >
                    Download
                  </Button>
                  <Menu
                    id="export-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "export-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        exportToCSV(rows);
                      }}
                    >
                      CSV
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        exportToExcel(rows, "sentiment_analysis_data");
                      }}
                    >
                      Excel
                    </MenuItem>
                  </Menu>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    //@ts-ignore
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sx={{
                      // Default styles for larger screens
                      "& .MuiDataGrid-columnHeaders": {
                        background: "#070da1",
                        // color: "#fff", // Adjusted for better contrast and readability
                        fontSize: "22px",
                      },
                      "& .MuiDataGrid-columnHeaderTitle": {
                        fontSize: "19px",
                      },
                      "& .MuiDataGrid-cell": {
                        fontSize: "19px",
                      },
                      "& .MuiTablePagination-root": {
                        fontSize: "19px",
                      },
                      // Styles for medium screens (tablets)
                      "@media (max-width:900px)": {
                        "& .MuiDataGrid-columnHeaders": {
                          fontSize: "18px", // Slightly smaller for tablet
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                          fontSize: "16px",
                        },
                        "& .MuiDataGrid-cell": {
                          fontSize: "16px",
                        },
                        "& .MuiTablePagination-root": {
                          fontSize: "16px",
                        },
                      },
                      // Styles for small screens (mobiles)
                      "@media (max-width:600px)": {
                        "& .MuiDataGrid-columnHeaders": {
                          fontSize: "15px", // Even smaller for mobile
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                          fontSize: "13px",
                        },
                        "& .MuiDataGrid-cell": {
                          fontSize: "13px",
                        },
                        "& .MuiTablePagination-root": {
                          fontSize: "13px",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ClassificationCommentTab;
