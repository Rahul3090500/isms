import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Pagination,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Table,
} from "@nextui-org/react";
import BarChart from "./BarChart";
import classes from "./SentimentTab.module.scss"
interface SentimentTabProps {
  chartData: any;
  sentimentComments: any;
  handleSentimentAnalysis:any;
}

const SentimentTab: React.FC<SentimentTabProps> = ({
  chartData,
  sentimentComments = [],
  handleSentimentAnalysis,
  
}) => {
  const [selectedSentiment, setSelectedSentiment] = useState<string>("All");
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const commentsPerPage = 6;

  const handleSelectionChange = (key: React.Key | null) => {
    if (typeof key === "string") {
      setSelectedSentiment(key);
      setPage(1); // Reset to the first page upon changing the sentiment filter
    }
  };

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;
  const filteredComments = sentimentComments.filter(
    (comment:any) =>
      selectedSentiment === "All" || comment.sentiment === selectedSentiment
  );



  // const currentComments = filteredComments.slice(
  //   indexOfFirstComment,
  //   indexOfLastComment
  // );

  const pages = Math.ceil(filteredComments.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredComments.slice(start, end);
  }, [page, filteredComments]);

  console.log("currentComments===>", filteredComments)



  const columns = [
    
    {
      key: "user_name",
      label: "USER NAME",
    },
    {
      key: "published_time",
      label: "PUBLISHED TIME",
    },
    {
      key: "updated_time",
      label: "UPDATED TIME",
    },
    {
      key: "comment",
      label: "COMMENT",
    },
  ];

  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const handleClick = () => {
    setIsButtonLoading(true);
    handleSentimentAnalysis();
    // Set isButtonLoading to false after 2 seconds
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };

  return (<>    
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
              stroke="#8A8A8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 25.9976V19.9976H13"
              stroke="#8A8A8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976"
              stroke="#8A8A8A"
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
    <div className={classes.dec}>
      </div>
      </div>
    
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
   
        <div className="w-full max-w-4xl mt-6">
          <BarChart chartData={chartData} />
        </div>
        <div className="my-6">
          <Tabs
            selectedKey={selectedSentiment}
            onSelectionChange={handleSelectionChange}
          >
            <Tab  key="All">
              All
            </Tab>
            <Tab key="Positive">
              Positive
            </Tab>
            <Tab key="Neutral">
              Neutral
            </Tab>
            <Tab  key="Negative">
              Negative
            </Tab>
            <Tab key="Unknown">
              Unknown
            </Tab>
          </Tabs>
        </div>
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px] flex  justify-cente",
          }}
        >
          <TableHeader columns={columns} >
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
            {(item:any) => (
              <TableRow className="singleComment" key={item.commentId}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </main>
    </div>
    </>
  
  );
};

export default SentimentTab;
