"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var nav_module_scss_1 = require("./nav.module.scss");
var link_1 = require("next/link");
var router_1 = require("next/router");
var Nav = function (_a) {
    var navItems = _a.navItems, onItemSelect = _a.onItemSelect, videoSummary = _a.videoSummary, handleSentimentAnalysis = _a.handleSentimentAnalysis, handleCommentClassifications = _a.handleCommentClassifications, loadingSentimentAnalysis = _a.loadingSentimentAnalysis, loadingCommentClassifications = _a.loadingCommentClassifications, loadingVideoSummary = _a.loadingVideoSummary, rowData = _a.rowData;
    var _b = react_1.useState(false), navOpen = _b[0], setNavOpen = _b[1];
    var _c = react_1.useState(null), activeItem = _c[0], setActiveItem = _c[1];
    var router = router_1.useRouter();
    console.log(rowData.length, "rowdataaa");
    react_1.useEffect(function () {
        // Function to update active item based on the current route
        var updateActiveItem = function () {
            var currentPath = router.pathname;
            var activeNav = navItems.find(function (item) { return item.path === currentPath; });
            if (activeNav) {
                setActiveItem(activeNav.text);
                onItemSelect(activeNav.content);
            }
        };
        // Call updateActiveItem on mount and route change
        updateActiveItem();
        router.events.on("routeChangeComplete", updateActiveItem);
        // Cleanup listener to prevent memory leaks
        return function () {
            router.events.off("routeChangeComplete", updateActiveItem);
        };
    }, [navItems, onItemSelect, router]);
    var handleItemClick = function (item, event) {
        if (!videoSummary &&
            ["Summary", "Sentiments", "Classification", "AI Response"].includes(item.text)) {
            event.preventDefault(); // Prevent default navigation if certain conditions are met
            var settingsItem = navItems.find(function (navItem) { return navItem.text === "Settings"; });
            if (settingsItem) {
                setActiveItem(settingsItem.text);
                onItemSelect(settingsItem.content);
                router.push(settingsItem.path);
            }
        }
        else {
            setActiveItem(item.text);
            onItemSelect(item.content);
            if (item.path === "/summary") {
                handleSentimentAnalysis();
            }
            if (item.path === "/sentiments") {
                handleSentimentAnalysis();
                handleCommentClassifications();
            }
            else if (item.text === "/classification") {
                handleCommentClassifications();
                handleSentimentAnalysis();
            }
        }
    };
    return (react_1["default"].createElement("div", { className: nav_module_scss_1["default"].nav },
        react_1["default"].createElement("div", { onClick: function () { return setNavOpen(!navOpen); }, className: nav_module_scss_1["default"].navcontainer },
            react_1["default"].createElement("div", { className: nav_module_scss_1["default"].navbar },
                react_1["default"].createElement("div", { className: nav_module_scss_1["default"].menu_toggle, onClick: function () { return setNavOpen(!navOpen); } },
                    react_1["default"].createElement("img", { className: nav_module_scss_1["default"].humburger, src: "/./images/humburger.svg", alt: "" }),
                    react_1["default"].createElement("p", { className: nav_module_scss_1["default"].ISMS },
                        " ",
                        react_1["default"].createElement("img", { src: "/./images/3.png", alt: "" }),
                        "iSMS"),
                    react_1["default"].createElement("p", { className: nav_module_scss_1["default"].caze },
                        " ",
                        react_1["default"].createElement("img", { width: 230, src: "/./images/4.png", alt: "" })),
                    react_1["default"].createElement("p", { className: nav_module_scss_1["default"].mobISMS }, " iSMS"),
                    react_1["default"].createElement("p", { className: nav_module_scss_1["default"].mobcaze },
                        " ",
                        react_1["default"].createElement("img", { width: 40, src: "/./images/3.png", alt: "" })))),
            react_1["default"].createElement("div", { className: nav_module_scss_1["default"].nav_overlay, style: {
                    top: navOpen ? "0" : "-100%"
                } },
                react_1["default"].createElement("ul", { className: "container " + nav_module_scss_1["default"].nav_links },
                    react_1["default"].createElement("li", { className: nav_module_scss_1["default"].nav_item },
                        react_1["default"].createElement("span", { onClick: function () { return setNavOpen(!navOpen); }, style: {
                                top: navOpen ? "-300px" : "270px",
                                transitionDelay: navOpen ? "0.3s" : "0s",
                                opacity: navOpen ? "1" : "0"
                            } },
                            react_1["default"].createElement("p", { className: nav_module_scss_1["default"].ISMS },
                                " ",
                                react_1["default"].createElement("img", { src: "/./images/3.png", alt: "" }),
                                "iSMS"),
                            react_1["default"].createElement("div", { className: nav_module_scss_1["default"].content }, navItems.slice(0, 4).map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: item.path === '/ai-response'
                                    ? (rowData.length === 0 ? "/settings" : item.path)
                                    : item.path, passHref: true },
                                react_1["default"].createElement("div", { key: index, onClick: function (event) {
                                        return loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? ""
                                            : handleItemClick(item, event);
                                    }, className: nav_module_scss_1["default"].singleItem + " " + (activeItem === item.text ? nav_module_scss_1["default"].selectedItem : ""), style: {
                                        cursor: loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? "not-allowed"
                                            : ""
                                    } },
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].icon + " " + (activeItem === item.text ? nav_module_scss_1["default"].iconSelect : "") + " " }, item.icon),
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].text }, item.text)))); }))))),
                react_1["default"].createElement("ul", { className: "container " + nav_module_scss_1["default"].nav_links },
                    react_1["default"].createElement("li", { className: nav_module_scss_1["default"].nav_item },
                        react_1["default"].createElement("span", { onClick: function () { return setNavOpen(!navOpen); }, style: {
                                top: navOpen ? "-300px" : "270px",
                                transitionDelay: navOpen ? "0.3s" : "0s",
                                opacity: navOpen ? "1" : ""
                            } },
                            react_1["default"].createElement("div", { className: nav_module_scss_1["default"].content }, navItems.slice(4, 7).map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: item.path === '/ai-response'
                                    ? (rowData.length === 0 ? "/settings" : item.path)
                                    : item.path, passHref: true },
                                react_1["default"].createElement("div", { key: index, onClick: function (event) {
                                        return loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? ""
                                            : handleItemClick(item, event);
                                    }, className: nav_module_scss_1["default"].singleItem + " " + (activeItem === item.text ? nav_module_scss_1["default"].selectedItem : ""), style: {
                                        cursor: loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? "not-allowed"
                                            : ""
                                    } },
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].icon + " " + (activeItem === item.text ? nav_module_scss_1["default"].iconSelect : "") + " " }, item.icon),
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].text }, item.text)))); }))))),
                react_1["default"].createElement("ul", { className: "container " + nav_module_scss_1["default"].nav_linksMob },
                    react_1["default"].createElement("li", { className: nav_module_scss_1["default"].nav_item },
                        react_1["default"].createElement("span", { onClick: function () { return setNavOpen(!navOpen); }, style: {
                                top: navOpen ? "-300px" : "270px",
                                transitionDelay: navOpen ? "0.3s" : "0s",
                                opacity: navOpen ? "1" : ""
                            } },
                            react_1["default"].createElement("p", { className: nav_module_scss_1["default"].ISMS },
                                " ",
                                react_1["default"].createElement("img", { src: "/./images/3.png", alt: "" }),
                                "iSMS"),
                            react_1["default"].createElement("div", { className: nav_module_scss_1["default"].content }, navItems.map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: item.path === '/ai-response'
                                    ? (rowData.length === 0 ? "/settings" : item.path)
                                    : item.path, passHref: true },
                                react_1["default"].createElement("div", { key: index, onClick: function (event) {
                                        return loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? ""
                                            : handleItemClick(item, event);
                                    }, className: nav_module_scss_1["default"].singleItem + " " + (activeItem === item.text ? nav_module_scss_1["default"].selectedItem : ""), style: {
                                        cursor: loadingSentimentAnalysis ||
                                            loadingVideoSummary ||
                                            loadingCommentClassifications
                                            ? "not-allowed"
                                            : ""
                                    } },
                                    " ",
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].icon + " " + (activeItem === item.text ? nav_module_scss_1["default"].iconSelect : "") + " " },
                                        " ",
                                        item.icon),
                                    react_1["default"].createElement("span", { className: nav_module_scss_1["default"].text }, item.text)))); })))))))));
};
exports["default"] = Nav;
