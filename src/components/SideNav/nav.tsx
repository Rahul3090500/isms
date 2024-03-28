import React, { useState } from "react";
import classes from "./nav.module.scss";
import Link from "next/link";

const Nav = ({
  navItems,
  onItemSelect,
  selectedContent,
  videoSummary,
  setIsFileOpener,
  handleSentimentAnalysis,
  handleCommentClassifications,
}: any) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className={classes.nav}>
      <div onClick={() => setNavOpen(!navOpen)} className={classes.navcontainer}>
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            <img src="/../images/humburger.svg" alt="" />
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
              <Link href="/">
                <span
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "-300px" : "270px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                    opacity: navOpen ? "1" : "0",
                  }}
                >
                  ISMS
                  <div className={classes.content}>
                    {navItems.slice(0, 4).map((item: any, index: any) => (
                      <div
                        key={index}
                        onClick={() => {
                          if (
                            ![
                              "Summary",
                              "Sentiments",
                              "Classification",
                            ].includes(item.text) ||
                            videoSummary
                          ) {
                            onItemSelect(item.content);
                            if (item.text === "AI Response") {
                              setIsFileOpener(true);
                            }
                            if (item.text === "Sentiments") {
                              handleSentimentAnalysis();
                            }
                            if (item.text === "Classification") {
                              handleCommentClassifications();
                            }
                          }
                        }}
                        className={`${classes.singleItem} ${selectedContent === item.content ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        <span
                          className={`${classes.icon} ${selectedContent === item.content ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.iconDisabled : ""}`}
                        >
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </span>
              </Link>
            </li>
          </ul>
          <ul className={`container ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              {/* Use Link from 'next/link' for navigation */}
              <Link href="/">
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
                      <div
                        key={index}
                        onClick={() => {
                          if (
                            ![
                              "Summary",
                              "Sentiments",
                              "Classification",
                            ].includes(item.text) ||
                            videoSummary
                          ) {
                            onItemSelect(item.content);
                            if (item.text === "AI Response") {
                              setIsFileOpener(true);
                            }
                            if (item.text === "Sentiments") {
                              handleSentimentAnalysis();
                            }
                            if (item.text === "Classification") {
                              handleCommentClassifications();
                            }
                          }
                        }}
                        className={`${classes.singleItem} ${selectedContent === item.content ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        <span
                          className={`${classes.icon} ${selectedContent === item.content ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.iconDisabled : ""}`}
                        >
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </span>
              </Link>
            </li>
          </ul>
          <ul className={`container ${classes.nav_linksMob}`}>
            <li className={classes.nav_item}>
              {/* Use Link from 'next/link' for navigation */}
              <Link href="/">
                <span
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "-300px" : "270px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                    opacity: navOpen ? "1" : "",
                  }}
                >
                                      ISMS

                  <div className={classes.content}>
                  {navItems.map((item: any, index: any) => (
                      <div
                        key={index}
                        onClick={() => {
                          if (
                            ![
                              "Summary",
                              "Sentiments",
                              "Classification",
                            ].includes(item.text) ||
                            videoSummary
                          ) {
                            onItemSelect(item.content);
                            if (item.text === "AI Response") {
                              setIsFileOpener(true);
                            }
                            if (item.text === "Sentiments") {
                              handleSentimentAnalysis();
                            }
                            if (item.text === "Classification") {
                              handleCommentClassifications();
                            }
                          }
                        }}
                        className={`${classes.singleItem}  ${selectedContent === item.content ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        {" "}
                        <span
                          className={`${classes.icon}  ${selectedContent === item.content ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification"].includes(item.text) ? classes.iconDisabled : ""}`}
                        >
                          {" "}
                          {item.icon}
                        </span>
                        <span className={classes.text}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Nav;
