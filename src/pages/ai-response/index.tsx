import { useYoutubeContext } from "@/hooks/urlcontext";
import PdfUploader from "../../components/table";
import classes from "./AIResponse.module.scss";
import React, { useEffect, useState } from "react";
import PdfUploader2 from "@/components/PdfTable";

const AIResponse = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const handleClick = () => {
    setIsButtonLoading(true);
    // handleSubmit();
    // Set isButtonLoading to false after 2 seconds
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };
  const { rowData,responseRowData,setRowData } = useYoutubeContext();
  console.log('rowDataaaa123',rowData )
  useEffect(() => {
    const getRowData =localStorage.getItem('Response')
    if(getRowData) setRowData(JSON.parse(getRowData))
  }, [])
  
  return (
    <div className={classes.AIResponse}>
      <div className={classes.header}>
        <span className={classes.text}>Al Response</span>
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
        Provides the automated Al (Artificial Intelligence) responses for all
        the query comments
      </div>
      <div className={classes.dec}>
        {rowData.length === 0 && "no data"}
        {rowData.length > 0 && <PdfUploader />}
      </div>
      {
        <div >
        <p>Quey Answered</p>
        <div className={classes.dec}>
        {rowData.length === 0 && "no data"}
        {rowData.length > 0 && <PdfUploader2  />}
      </div>
      </div>
      }

      
    </div>
  );
};

export default AIResponse;
