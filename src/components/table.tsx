import React, { useState } from "react";
import FileModal from "./modal/filemodal";
import { useYoutubeContext } from "@/hooks/urlcontext";
import classes from "./table.module.scss";
import { Checkbox } from "@mui/material";

const PdfUploader = () => {
  const { rowData, setRowData } = useYoutubeContext();
  const [selectAll, setSelectAll] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("");

  const [openCredentialsFile, setOpenCredentialsFile] = useState(false);

  const handleSelectAllChange = (event: { target: { checked: any } }) => {
    const newSelectAll = event.target.checked;
    setSelectAll(newSelectAll);
    const newRows = rowData.map((row) => ({
      ...row,
      selected: !row.Answered ? newSelectAll : row.selected,
    }));
    setRowData(newRows);
  };

  const sortData = (field: React.SetStateAction<string>) => {
    const direction =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";
    const sortedData = [...rowData].sort((a, b) => {
      //@ts-ignore
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      //@ts-ignore
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortField(field);
    setSortDirection(direction);
    setRowData(sortedData);
  };

  return (
    <div className={classes.customTableContainer}>
      {rowData.length > 0 && (
        <>
          <div className={classes.tableHeader}>
            <Checkbox
              checked={selectAll}
              indeterminate={
                !selectAll && rowData.some((item) => item.selected)
              }
              onChange={handleSelectAllChange}
            />
            <button onClick={() => sortData("user_name")}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="26 -26 100 125"
                  xmlSpace="preserve"
                >
                  <path
                    className="st0"
                    d="M114.9,5.7c-1.4,1.5-3.7,1.5-5.1,0L100.5-4v64.5c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V-4l-9.3,9.7  c-1.4,1.5-3.7,1.5-5.1,0c-1.4-1.5-1.4-3.9,0-5.4l15.1-15.9c0,0,0,0,0.1-0.1l0.2-0.2c0,0,0,0,0,0c0.6-0.7,1.5-1.1,2.5-1.1  c1,0,1.9,0.4,2.6,1.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l15.4,16.2C116.3,1.8,116.3,4.2,114.9,5.7z M56.9,62.6  C56.9,62.6,56.9,62.6,56.9,62.6l-0.3,0.3c0,0,0,0,0,0c-0.6,0.7-1.5,1.1-2.5,1.1c-1,0-1.9-0.4-2.6-1.1c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0,0,0,0L36.1,46.7c-1.4-1.5-1.4-3.9,0-5.4c1.4-1.5,3.7-1.5,5.1,0l9.3,9.7v-64.5c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6V51  l9.3-9.7c1.4-1.5,3.7-1.5,5.1,0c1.4,1.5,1.4,3.9,0,5.4L56.9,62.6z"
                  />
                </svg>
              </span>
              User ID
            </button>
            <button onClick={() => sortData("updated_time")}> <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="26 -26 100 125"
                  xmlSpace="preserve"
                >
                  <path
                    className="st0"
                    d="M114.9,5.7c-1.4,1.5-3.7,1.5-5.1,0L100.5-4v64.5c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V-4l-9.3,9.7  c-1.4,1.5-3.7,1.5-5.1,0c-1.4-1.5-1.4-3.9,0-5.4l15.1-15.9c0,0,0,0,0.1-0.1l0.2-0.2c0,0,0,0,0,0c0.6-0.7,1.5-1.1,2.5-1.1  c1,0,1.9,0.4,2.6,1.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l15.4,16.2C116.3,1.8,116.3,4.2,114.9,5.7z M56.9,62.6  C56.9,62.6,56.9,62.6,56.9,62.6l-0.3,0.3c0,0,0,0,0,0c-0.6,0.7-1.5,1.1-2.5,1.1c-1,0-1.9-0.4-2.6-1.1c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0,0,0,0L36.1,46.7c-1.4-1.5-1.4-3.9,0-5.4c1.4-1.5,3.7-1.5,5.1,0l9.3,9.7v-64.5c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6V51  l9.3-9.7c1.4-1.5,3.7-1.5,5.1,0c1.4,1.5,1.4,3.9,0,5.4L56.9,62.6z"
                  />
                </svg>
              </span>Time Stamp</button>
          </div>
          {rowData.map((item) => (
            <div className={classes.mainTable} key={item.commentId}>
              <Checkbox
                checked={item.selected ?? false}
                onChange={(event) => {
                  const newItem = { ...item, selected: event.target.checked };
                  setRowData((prev: any[]) =>
                    prev.map((it: { commentId: any }) =>
                      it.commentId === newItem.commentId ? newItem : it
                    )
                  );
                }}
                disabled={item.Answered}
              />
              <div className={classes.table}>
                <div className={classes.top}>
                  <div className={classes.left}>
                    <p>{item.user_name}</p>
                  </div>
                  <div className={classes.right}>
                    <p>{item.updated_time}</p>
                  </div>
                </div>
                <div className={classes.middle}>
                  <p
                    style={{ backgroundColor: "#b3c6e7" }}
                    className={classes.firstText}
                  >
                    Query
                  </p>{" "}
                  <p className={classes.secondText}>{item.Query}</p>
                </div>
                <div
                  style={{ borderBottom: "2px solid #000" }}
                  className={classes.middle}
                >
                  <p
                    style={{ backgroundColor: "#c6e0b4" }}
                    className={classes.firstText}
                  >
                    Response
                  </p>
                  <textarea
                    className={classes.secondText}
                    value={item.Response}
                    disabled={item.Answered}
                    onChange={(event) => {
                      const newItem = { ...item, Response: event.target.value };
                      setRowData((prev: any[]) =>
                        prev.map((it: { commentId: any }) =>
                          it.commentId === newItem.commentId ? newItem : it
                        )
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className={classes.submitButton}
              onClick={() => setOpenCredentialsFile(true)}
            >
              Submit Response
            </button>
          </div>
        </>
      )}
      <FileModal
        setIsOpen={setOpenCredentialsFile}
        isOpen={openCredentialsFile}
      />
    </div>
  );
};

export default PdfUploader;
