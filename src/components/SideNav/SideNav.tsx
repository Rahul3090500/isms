/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import classes from "./SideNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav: any = ({
  navItems,
  onItemSelect,
  // videoSummary,
  handleSentimentAnalysis,
  handleCommentClassifications,
  rowData,
  handleSubmit,
}: any) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  console.log(rowData.length, "rowdataaa");
  useEffect(() => {
    // Function to update active item based on the current route
    const updateActiveItem = () => {
      const currentPath = router.pathname;
      const activeNav = navItems.find((item: any) => item.path === currentPath);
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

  const handleItemClick = (item: any) => {
    setActiveItem(item.text);
    onItemSelect(item.content);
  };

  useEffect(() => {
    const path = router.pathname; // Get the current path
    if (path === "/summary") {
      handleSubmit();
    } else if (path === "/sentiments") {
      handleSentimentAnalysis();
    } else if (path === "/classification") {
      handleCommentClassifications();
    }
  }, [router.pathname]);

  return (
    <div className={classes.sidenav}>
      <div className={classes.header}>
        <img alt="logo" src="/images/1.png" />
      </div>
      <div className={classes.content}>
        {navItems.map((item: any, index: number) => (
          <Link
            key={index}
            href={
              item.path === "/ai-response"
                ? rowData.length === 0
                  ? "/settings"
                  : item.path
                : item.path
            }
            passHref
          >
            <div
              onClick={() => handleItemClick(item)}
              className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""}`}
            >
              <span
                className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""}`}
              >
                {item.icon}
              </span>
              <span className={classes.text}>{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={classes.footer}>
        <span className={classes.Powered}>Powered By</span>
        <img alt="logo" src="/images/2.png" />
      </div>
    </div>
  );
};

export default SideNav;
