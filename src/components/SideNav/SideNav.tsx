/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classes from "./SideNav.module.scss";

const SideNav = ({
  navItems,
  onItemSelect, // Assuming this is a prop to notify the parent component
  videoSummary,
  handleSentimentAnalysis,
  handleCommentClassifications,
  selectedContent
}: any) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const handleItemClick = (item:any) => {
    if (!videoSummary && ['Summary', 'Sentiments', 'Classification'].includes(item.text)) {
      const settingsItem = navItems.find((navItem:any) => navItem.text === 'Settings');
      if (settingsItem) {
        setActiveItem(settingsItem.text);
        onItemSelect(settingsItem.content); 
      }
    } else {
      setActiveItem(item.text);
      onItemSelect(item.content);

     if (item.text === 'Sentiments') {
        handleSentimentAnalysis();
      } else if (item.text === 'Classification') {
        handleCommentClassifications();
      }
    }
  };



  return (
    <div className={classes.sidenav}>
      <div className={classes.header}><img alt="logo" src="./images/1.png"/></div>
      <div className={classes.content}>
        {navItems.map((item:any, index:any) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className={`${classes.singleItem} ${activeItem   === item.text ? classes.selectedItem : ''} ${selectedContent  === item.content ? classes.selectedItem : ''} `}
          >
            <span
              className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ''}${selectedContent === item.content ? classes.iconSelect : ''} `}
            >
              {item.icon}
            </span>
            <span className={classes.text}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <span className={classes.Powered}>Powered By</span>
        <img alt="logo" src="./images/2.png"/></div>
    </div>
  );
};

export default SideNav;