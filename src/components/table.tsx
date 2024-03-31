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

  const handleSelectAllChange = (event: { target: { checked: any; }; }) => {
    const newSelectAll = event.target.checked;
    setSelectAll(newSelectAll);
    const newRows = rowData.map((row) => ({
      ...row,
      selected: !row.Answered ? newSelectAll : row.selected,
    }));
    setRowData(newRows);
  };

  const sortData = (field: React.SetStateAction<string>) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
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
              indeterminate={!selectAll && rowData.some((item) => item.selected)}
              onChange={handleSelectAllChange}
            />
            <button onClick={() => sortData("user_name")}>User Name</button>
            <button onClick={() => sortData("updated_time")}>Time Stamp</button>
          </div>
          {rowData.map((item) => (
            <div className={classes.mainTable} key={item.commentId}>
              <Checkbox
                checked={item.selected ?? false}
                onChange={(event) => {
                  const newItem = { ...item, selected: event.target.checked };
                  setRowData((prev: any[]) => prev.map((it: { commentId: any; }) => it.commentId === newItem.commentId ? newItem : it));
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
               <p style={{backgroundColor:"#b3c6e7"}} className={classes.firstText}>Query</p>   <p className={classes.secondText}>{item.Query}</p>
                </div>
                <div style={{borderBottom:"2px solid #000"}} className={classes.middle}>
                <p style={{backgroundColor:"#c6e0b4"}} className={classes.firstText}>Response</p>
                  <textarea
                    className={classes.secondText}
                    
                    value={item.Response}
                    disabled={item.Answered}
                    onChange={(event) => {
                      const newItem = { ...item, Response: event.target.value };
                      setRowData((prev: any[]) =>
                        prev.map((it: { commentId: any; }) =>
                          it.commentId === newItem.commentId ? newItem : it
                        )
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "20px" ,display:"flex",justifyContent:"center" }}>
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
