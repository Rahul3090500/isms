/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import classes from "./nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({
  navItems,
  onItemSelect,
  videoSummary,
  handleSentimentAnalysis,
  handleCommentClassifications,
  loadingSentimentAnalysis,
  loadingCommentClassifications,
  loadingVideoSummary,
  rowData,
}: any) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
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

  const handleItemClick = (item: any, event: React.MouseEvent) => {
    if (
      !videoSummary &&
      ["Summary", "Sentiments", "Classification", "AI Response"].includes(
        item.text
      )
    ) {
      event.preventDefault(); // Prevent default navigation if certain conditions are met
      const settingsItem = navItems.find(
        (navItem: any) => navItem.text === "Settings"
      );
      if (settingsItem) {
        setActiveItem(settingsItem.text);
        onItemSelect(settingsItem.content);
        router.push(settingsItem.path);
      }
    } else {
      setActiveItem(item.text);
      onItemSelect(item.content);
      if (item.path === "/summary") {
        handleSentimentAnalysis();
      }
      if (item.path === "/sentiments") {
        handleSentimentAnalysis();
        handleCommentClassifications();
      } else if (item.text === "/classification") {
        handleCommentClassifications();
        handleSentimentAnalysis();
      }
    }
  };

  return (
    <div className={classes.nav}>
      <div
        onClick={() => setNavOpen(!navOpen)}
        className={classes.navcontainer}
      >
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            <img
              className={classes.humburger}
              src="/./images/humburger.svg"
              alt=""
            />
            <p className={classes.ISMS}>
              {" "}
              <img src="/./images/3.png" alt="" />
              iSMS
            </p>
            <p className={classes.caze}>
              {" "}
              <img width={230} src="/./images/4.png" alt="" />
            </p>
            <p className={classes.mobISMS}> iSMS</p>
            <p className={classes.mobcaze}>
              {" "}
              <img width={40} src="/./images/3.png" alt="" />
            </p>
          </div>
        </div>

        <div
          className={classes.nav_overlay}
          style={{
            top: navOpen ? "0" : "-100%",
          }}
        >
          <ul className={`container ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              {/* Use Link from 'next/link' for navigation */}
              
                <span
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "-300px" : "270px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  <p className={classes.ISMS}>
                    {" "}
                    <img src="/./images/3.png" alt="" />
                    iSMS
                  </p>

                  <div className={classes.content}>
                    {navItems.slice(0, 4).map((item: any, index: any) => (
                            <Link key={index} href={item.path === '/ai-response' 
                            ? (rowData.length === 0 ? "/settings" : item.path)
                            : item.path} passHref>
                      <div
                        key={index}
                        onClick={(event) =>
                          loadingSentimentAnalysis ||
                          loadingVideoSummary ||
                          loadingCommentClassifications
                            ? ""
                            : handleItemClick(item, event)
                        }
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""}`}
                        style={{
                          cursor:
                            loadingSentimentAnalysis ||
                            loadingVideoSummary ||
                            loadingCommentClassifications
                              ? "not-allowed"
                              : "",
                        }}
                      >
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} `}
                        >
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                      </Link>
                    ))}
                  </div>
                </span>
              
            </li>
          </ul>
          <ul className={`container ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              {/* Use Link from 'next/link' for navigation */}
              
                <span
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "-300px" : "270px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                    opacity: navOpen ? "1" : "",
                  }}
                >
                  <div className={classes.content}>
                    {navItems.slice(4, 7).map((item: any, index: any) => (
                            <Link key={index} href={item.path === '/ai-response' 
                            ? (rowData.length === 0 ? "/settings" : item.path)
                            : item.path} passHref>
                      <div
                        key={index}
                        onClick={(event) =>
                          loadingSentimentAnalysis ||
                          loadingVideoSummary ||
                          loadingCommentClassifications
                            ? ""
                            : handleItemClick(item, event)
                        }
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""}`}
                        style={{
                          cursor:
                            loadingSentimentAnalysis ||
                            loadingVideoSummary ||
                            loadingCommentClassifications
                              ? "not-allowed"
                              : "",
                        }}
                      >
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} `}
                        >
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                      </Link>
                    ))}
                  </div>
                </span>
              
            </li>
          </ul>
          <ul className={`container ${classes.nav_linksMob}`}>
            <li className={classes.nav_item}>
              {/* Use Link from 'next/link' for navigation */}
          
                <span
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "-300px" : "270px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                    opacity: navOpen ? "1" : "",
                  }}
                >
                  <p className={classes.ISMS}>
                    {" "}
                    <img src="/./images/3.png" alt="" />
                    iSMS
                  </p>

                  <div className={classes.content}>
                    {navItems.map((item: any, index: any) => (
                            <Link key={index} href={item.path === '/ai-response' 
                            ? (rowData.length === 0 ? "/settings" : item.path)
                            : item.path} passHref>
                      <div
                        key={index}
                        onClick={(event) =>
                          loadingSentimentAnalysis ||
                          loadingVideoSummary ||
                          loadingCommentClassifications
                            ? ""
                            : handleItemClick(item, event)
                        }
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""}`}
                        style={{
                          cursor:
                            loadingSentimentAnalysis ||
                            loadingVideoSummary ||
                            loadingCommentClassifications
                              ? "not-allowed"
                              : "",
                        }}
                      >
                        {" "}
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} `}
                        >
                          {" "}
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                      </Link>
                    ))}
                  </div>
                </span>
           
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
