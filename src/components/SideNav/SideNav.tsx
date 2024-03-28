// SideNav.js
import React from "react";
import classes from "./SideNav.module.scss";

const SideNav = ({
  navItems,
  onItemSelect,
  selectedContent,
  videoSummary,
  setIsFileOpener,
  handleSentimentAnalysis,
  handleCommentClassifications
}: any) => {
  return (
    <div className={classes.sidenav}>
      <div className={classes.header}>Isms</div>
      <div className={classes.content}>
        {navItems.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => {
              if (!['Summary', 'Sentiments', 'Classification'].includes(item.text) || videoSummary) {
                onItemSelect(item.content);
                if (item.text === 'AI Response') {
                  setIsFileOpener(true);
                }
                if (item.text === 'Sentiments') {
                  handleSentimentAnalysis()
                }
                if (item.text === 'Classification') {
                  handleCommentClassifications()
                }
              }
            }}
            
            className={`${classes.singleItem}  ${selectedContent === item.content ? classes.selectedItem : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification'].includes(item.text) ? classes.disabled : ""}`}
          >
            {" "}
            <span
              className={`${classes.icon}  ${selectedContent === item.content ? classes.iconSelect : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification'].includes(item.text) ? classes.iconDisabled : ""}`}
             
            > {item.icon}</span>
            <span  className={classes.text}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default SideNav;
{
  /* <div key={index} className={`${classes.singleItem} ${selectedContent === item.content ? classes.selectedItem : ''}`}onClick={() => onItemSelect(item.content)}> */
}
