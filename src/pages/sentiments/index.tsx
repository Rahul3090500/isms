import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BarChart from "../../components/ISMS/BarChart";
import classes from "./SentimentTab.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button, Typography } from '@mui/material';
import { useRouter } from "next/router";
interface SentimentTabProps {
  chartData: any;
  sentimentComments: any;
  handleSentimentAnalysis: any;
  loadingSentimentAnalysis: any;
  videoSummary: any;
}

const SentimentTab: React.FC<SentimentTabProps> = ({
  chartData,
  sentimentComments = [],
  handleSentimentAnalysis,
  loadingSentimentAnalysis,
  videoSummary
}) => {
  const [selectedSentiment, setSelectedSentiment] = useState<string>("All");
  console.log("sentimentComments", sentimentComments);
  const handleSelectionChange = (key: string) => {
    setSelectedSentiment(key);
  };
  const router = useRouter();

  console.log("handleSelectionChange", handleSelectionChange);
  const filteredComments = sentimentComments.filter(
    (comment: any) =>
      selectedSentiment === "All" || comment.sentiment === selectedSentiment
  );

  const columns = [
    { field: "id", headerName: "No", width: 20 },
    { field: "user_name", headerName: "User Id", flex: 0.55, minWidth: 100 }, // Using flex and minWidth for responsiveness
    // { field: 'published_time', headerName: 'Time Stamp (publish)', flex: 1, minWidth: 200 },
    { field: "updated_time", headerName: "Time Stamp", flex: 0.35, minWidth: 100 },
    { field: "comment", headerName: "Comments", flex: 1.3, minWidth: 250 },
    { field: "sentiment", headerName: "Sentiment", width: 150 },
  ];

  const rows = filteredComments.map((comment: any, index: number) => ({
    id: index + 1,
    ...comment,
  }));

  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const handleClick = () => {
    setIsButtonLoading(true);
    handleSentimentAnalysis();
    // Simulate a network request delay
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className={classes.Sentiment}>
        <div className={classes.header}>
          <span className={classes.text}>Sentiments</span>
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
          Provides the sentiments based on the comments
        </div>
        {loadingSentimentAnalysis ? (
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
        ) : (<>
          {!videoSummary ? (
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              m: 2,
              border: '1px dashed #1976d2',
              borderRadius: '8px',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Typography variant="h6" component="p" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              To unlock full insights, kindly add your YouTube video link in Settings.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
              Caze iSMS provides AI-driven analysis for your social media channels, offering sentiment analysis, comment classification, and more. Start optimizing your digital marketing by integrating your YouTube Video!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/settings")}
              sx={{ mt: 1, fontWeight: 'bold' }}
            >
              Go to Settings
            </Button>
          </Box>):(   <div className={classes.dec}>
            <div className={classes.barchart}>
              <BarChart chartData={chartData} />
            </div>
            <div
              className={classes.datagrid}
              style={{ height: 400, width: "100%" }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                //@ts-ignore
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                // Enable filtering if you want
                sx={{
                  // Targeting the column headers
                  "& .MuiDataGrid-columnHeaders": {
                    background: "#070da1", 
                    color: "#070da1", // Adjusting color to white for contrast
                    fontSize: '22px', // Increase the font size for column headers
                  },
                  // Targeting the column header titles
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontSize: '19px', // Increase the font size for column header titles
                  },
                  // Targeting the cell values
                  "& .MuiDataGrid-cell": {
                    fontSize: '19px', // Increase the font size for cells
                  },
                  // Targeting the pagination footer
                  "& .MuiTablePagination-root": {
                    fontSize: '19px', // Increase the font size for the pagination footer
                  },
                }}
              />
            </div>
          </div>)}
          </>
        )}
      </div>
    </>
  );
};

export default SentimentTab;
