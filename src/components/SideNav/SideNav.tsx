/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import classes from "./SideNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav:any = ({
  navItems,
  onItemSelect,
  videoSummary,
  handleSentimentAnalysis,
  handleCommentClassifications,
  loadingSentimentAnalysis,
  loadingCommentClassifications,
  loadingVideoSummary,
  rowData
}:any) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  console.log(rowData.length,"rowdataaa")
  useEffect(() => {
    // Function to update active item based on the current route
    const updateActiveItem = () => {
      const currentPath = router.pathname;
      const activeNav = navItems.find((item:any) => item.path === currentPath);
      if (activeNav) {
        setActiveItem(activeNav.text);
        onItemSelect(activeNav.content);
      }
    };

    // Call updateActiveItem on mount and route change
    updateActiveItem();
    router.events.on("routeChangeComplete", updateActiveItem);

    // Cleanup listener to prevent memory leaks
    return () => {
      router.events.off("routeChangeComplete", updateActiveItem);
    };
  }, [navItems, onItemSelect, router]);


  const handleItemClick = (item: any, event: React.MouseEvent) => {
    if (!videoSummary && ['Summary', 'Sentiments', 'Classification', 'AI Response'].includes(item.text)) {
      event.preventDefault(); // Prevent default navigation if certain conditions are met
      const settingsItem = navItems.find((navItem: any) => navItem.text === 'Settings');
      if (settingsItem) {
        setActiveItem(settingsItem.text);
        onItemSelect(settingsItem.content);
        router.push(settingsItem.path);
      }
    } else {
      setActiveItem(item.text);
      onItemSelect(item.content);
      if (item.path === '/summary') {
        handleSentimentAnalysis();
      }
      if (item.path === '/sentiments') {
        handleSentimentAnalysis();
        handleCommentClassifications();
      } else if (item.text === '/classification') {
        handleCommentClassifications();
        handleSentimentAnalysis();
      }
    }
  };

  return (
    <div className={classes.sidenav}>
      <div className={classes.header}><img alt="logo" src="/images/1.png"/></div>
      <div className={classes.content}>
        {navItems.map((item: any, index: number) => (
          <Link key={index} href={item.path === '/ai-response' 
          ? (rowData.length === 0 ? "/settings" : item.path)
          : item.path} passHref>
            <div
              onClick={(event) => loadingSentimentAnalysis ||loadingVideoSummary ||loadingCommentClassifications ? "" : handleItemClick(item, event)}
              className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ''}`}
              style={{cursor:loadingSentimentAnalysis ||loadingVideoSummary ||loadingCommentClassifications ? "not-allowed" :""}}
            >
              <span className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ''}`}>
                {item.icon}
              </span>
              <span className={classes.text}>{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={classes.footer}>
        <span className={classes.Powered}>Powered By</span>
        <img alt="logo" src="/images/2.png"/>
      </div>
    </div>
  );
};

export default SideNav;
