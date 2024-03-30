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
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (item: any) => {
    if (
      !["Summary", "Sentiments", "Classification", "AI Response"].includes(
        item.text
      ) ||
      videoSummary
    ) {
      setActiveItem(item.text); // Now using item.text to set the active state
      console.log(`Item selected: ${item.text}`); // This will log the text of the item

      // Notify the parent component, if needed, possibly using a different property like item.content
      onItemSelect(item.content);

      // Additional logic based on the item text
      if (item.text === "AI Response") {
        setIsFileOpener(true);
      } else if (item.text === "Sentiments") {
        handleSentimentAnalysis();
      } else if (item.text === "Classification") {
        handleCommentClassifications();
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
                        onClick={() => handleItemClick(item)}
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.iconDisabled : ""}`}
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
                        onClick={() => handleItemClick(item)}
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.iconDisabled : ""}`}
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
                        onClick={() => handleItemClick(item)}
                        className={`${classes.singleItem} ${activeItem === item.text ? classes.selectedItem : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.disabled : ""}`}
                      >
                        {" "}
                        <span
                          className={`${classes.icon} ${activeItem === item.text ? classes.iconSelect : ""} ${!videoSummary && ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text) ? classes.iconDisabled : ""}`}
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
