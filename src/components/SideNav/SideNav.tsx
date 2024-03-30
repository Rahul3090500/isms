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

  const handleItemClick = (item:any) => {
    if (!['Summary', 'Sentiments', 'Classification', 'AI Response'].includes(item.text) || videoSummary) {
      setActiveItem(item.text); // Now using item.text to set the active state
      console.log(`Item selected: ${item.text}`); // This will log the text of the item

      // Notify the parent component, if needed, possibly using a different property like item.content
      onItemSelect(item.content); 
      
      // Additional logic based on the item text
      if (item.text === 'AI Response') {
        setIsFileOpener(true);
      } else if (item.text === 'Sentiments') {
        handleSentimentAnalysis();
      } else if (item.text === 'Classification') {
        handleCommentClassifications();
      }
    }
  };


  return (
    <div className={classes.sidenav}>
      <div className={classes.header}>Isms</div>
      <div className={classes.content}>
        {navItems.map((item:any, index:any) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification', 'AI Response'].includes(item.text) ? classes.disabled : ""}`}
          >
            <span
              className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ''} ${!videoSummary && ['Summary', 'Sentiments', 'Classification', 'AI Response'].includes(item.text) ? classes.iconDisabled : ""}`}
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