import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Pagination,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import BarChart from "./BarChart";
import classes from "./ClassificationCommentTab.module.scss";
interface CommentTabProps {
  classificationChartData: any;
  classifiactionComments: any;
}

const ClassificationCommentTab: React.FC<CommentTabProps> = ({
  classificationChartData,
  classifiactionComments = [],
}) => {
  const [selectedSentenceType, setSelectedSentenceType] = useState<
    string | number
  >("All");
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;

  const handleSelectionChange = (key: React.Key) => {
    if (typeof key === "string" || typeof key === "number") {
      setSelectedSentenceType(key);
      setPage(1); // Reset to first page when changing filter
    }
  };

  const filteredComments = classifiactionComments.filter((comment: any) => {
    return (
      selectedSentenceType === "All" ||
      comment.sentence_type === selectedSentenceType
    );
  });

  const pages = Math.ceil(filteredComments.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredComments.slice(start, end);
  }, [page, filteredComments]);

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
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
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
          Provides the classification of the comments in different sentence
          types
        </div>
        <div className={classes.dec}></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="w-full max-w-4xl mt-6">
            <BarChart chartData={classificationChartData} />
          </div>
          <Tabs
            selectedKey={selectedSentenceType}
            onSelectionChange={handleSelectionChange}
            aria-label="Sentence type filter"
          >
            <Tab key="All">All</Tab>
            <Tab key="Interrogative">Interrogative</Tab>
            <Tab key="Declarative">Declarative</Tab>
            <Tab key="Exclamatory">Exclamatory</Tab>{" "}
            {/* Example addition if applicable */}
          </Tabs>
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
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={items}>
              {(item: any) => (
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

export default ClassificationCommentTab;
