import React, { useState } from "react";
import BarChart from "./BarChart";
import classes from "./ClassificationCommentTab.module.scss";
import { DataGrid } from "@mui/x-data-grid";
interface CommentTabProps {
  classificationChartData: any;
  classifiactionComments: any;
}

const ClassificationCommentTab: React.FC<CommentTabProps> = ({
  classificationChartData,
  classifiactionComments = [],
}) => {
  const [selectedSentenceType] = useState<
    string | number
  >("All");
  // const [page, setPage] = React.useState(1);
  // const rowsPerPage = 6;

  // const handleSelectionChange = (key: React.Key) => {
  //   if (typeof key === "string" || typeof key === "number") {
  //     setSelectedSentenceType(key);
  //     setPage(1); // Reset to first page when changing filter
  //   }
  // };
  // console.log('handleSelectionChange',handleSelectionChange )

  // const filteredComments = classifiactionComments.filter((comment: any) => {
  //   return (
  //     selectedSentenceType === "All" ||
  //     comment.sentence_type === selectedSentenceType
  //   );
  // });

  // const pages = Math.ceil(filteredComments.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return filteredComments.slice(start, end);
  // }, [page, filteredComments]);

 
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const handleClick = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user_name', headerName: 'User Id', flex: 1, minWidth: 150 },
    // { field: 'published_time', headerName: 'PUBLISHED TIME', flex: 1, minWidth: 200 },
    { field: 'updated_time', headerName: 'Time Stamp', flex: 1, minWidth: 200 },
    { field: 'comment', headerName: 'Comments', flex: 1, minWidth: 250 },
    { field: 'sentence_type', headerName: 'sentence Type', width: 150 },
  ];

  const rows = classifiactionComments.map((comment: any, index: number) => ({
    id: index + 1, // Ensure you have a unique ID for each row
    ...comment,
  }));
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
        <div className={classes.dec}>
      <div className={classes.barchart} >
      <BarChart chartData={classificationChartData} />
    </div>
      <div className={classes.datagrid} style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          // Enable filtering if you want
          filterModel={{
            items: [
              //@ts-ignore
              // eslint-disable-next-line no-undef
              { columnField: 'sentiment', operatorValue: 'contains', value: selectedSentenceType },
            ],
          }}
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              background: '#070da1', // Example: a nice shade of blue
              color: '#070da1', // Changing the text color to white for better contrast
              '.MuiDataGrid-columnHeaderRow': {
                background: '#070da1', /// Optional: making the header titles bold
              },
            },
          }}
       
        />
      </div>
      </div>    
        </div>
     
    </>
  );
};

export default ClassificationCommentTab;
