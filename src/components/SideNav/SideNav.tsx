import React, { useState } from "react";
import classes from "./SideNav.module.scss";

const SideNav = ({
  navItems,
  onItemSelect, // Assuming this is a prop to notify the parent component
  videoSummary,
  setIsFileOpener,
  handleSentimentAnalysis,
  handleCommentClassifications,
}: any) => {
  // Local state to track the selected item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (item: any) => {
    if (!['Summary', 'Sentiments', 'Classification','AI Response'].includes(item.text) || videoSummary) {
      setActiveItem(item.content); // Update the local state
      onItemSelect(item.content); // Notify the parent component
      
      // Additional logic based on the item text
      if (item.text === 'AI Response') {
        setIsFileOpener(true);
      }
      if (item.text === 'Sentiments') {
        handleSentimentAnalysis();
      }
      if (item.text === 'Classification') {
        handleCommentClassifications();
      }
    }
  };

  return (
    <div className={classes.sidenav}>
      <div className={classes.header}>Isms</div>
      <div className={classes.content}>
        {navItems.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className={`${classes.singleItem}  ${activeItem === item.content ? classes.selectedItem : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification','AI Response'].includes(item.text) ? classes.disabled : ""}`}
          >
            <span
              className={`${classes.icon}  ${activeItem === item.content ? classes.iconSelect : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification','AI Response'].includes(item.text) ? classes.iconDisabled : ""}`}
            >
              {item.icon}
            </span>
            <span className={classes.text}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default SideNav;
