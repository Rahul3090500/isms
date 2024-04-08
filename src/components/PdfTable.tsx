import React from "react";
import { useYoutubeContext } from "@/hooks/urlcontext";
import classes from "./table.module.scss";

const PdfUploader2 = () => {
  const { rowData } = useYoutubeContext();


  return (
    <div className={classes.customTableContainer}>
      {rowData.length > 0 && (
        <>
          
          <div className={classes.scrollabletable}>
          {rowData.filter((it)=>it.selected == true && it.hasOwnProperty("AIAnswered")).map((item) => (
            <div className={classes.mainTable} key={item.commentId}>
              
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
                    AI Response
                  </p>
                  <textarea
                    className={classes.secondText}
                    value={item.AIAnswered}
                    disabled={true}
                    
                  />
                </div>
                <div
                  style={{ borderBottom: "2px solid #000" }}
                  className={classes.middle}
                >
                  <p
                    style={{ backgroundColor: "#c6e0b4" }}
                    className={classes.firstText}
                  >
                    Final  Response
                  </p>
                  <textarea
                    className={classes.secondText}
                    value={item.Response}
                    disabled={true}
                    
                  />
                </div>
              </div>
            </div>
          ))}
          </div>
        
        </>
      )}
      
    </div>
  );
};

export default PdfUploader2;
