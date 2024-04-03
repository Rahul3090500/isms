"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var SideNav_module_scss_1 = require("./SideNav.module.scss");
var link_1 = require("next/link");
var router_1 = require("next/router");
var SideNav = function (_a) {
    var navItems = _a.navItems, onItemSelect = _a.onItemSelect, 
    // videoSummary,
    handleSentimentAnalysis = _a.handleSentimentAnalysis, handleCommentClassifications = _a.handleCommentClassifications, loadingSentimentAnalysis = _a.loadingSentimentAnalysis, loadingCommentClassifications = _a.loadingCommentClassifications, loadingVideoSummary = _a.loadingVideoSummary, rowData = _a.rowData, handleSubmit = _a.handleSubmit;
    var _b = react_1.useState(null), activeItem = _b[0], setActiveItem = _b[1];
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
    var handleItemClick = function (item) {
        setActiveItem(item.text);
        onItemSelect(item.content);
    };
    react_1.useEffect(function () {
        var path = router.pathname; // Get the current path
        if (path === "/summary") {
            handleSubmit();
        }
        else if (path === "/sentiments") {
            handleSentimentAnalysis();
        }
        else if (path === "/classification") {
            handleCommentClassifications();
        }
    }, [router.pathname]);
    return (react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].sidenav },
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].header },
            react_1["default"].createElement("img", { alt: "logo", src: "/images/1.png" })),
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].content }, navItems.map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: item.path === "/ai-response"
                ? rowData.length === 0
                    ? "/settings"
                    : item.path
                : item.path, passHref: true },
            react_1["default"].createElement("div", { onClick: function () {
                    return loadingSentimentAnalysis ||
                        loadingVideoSummary ||
                        loadingCommentClassifications
                        ? ""
                        : handleItemClick(item);
                }, className: SideNav_module_scss_1["default"].singleItem + " " + (activeItem === item.text ? SideNav_module_scss_1["default"].selectedItem : ""), style: {
                    cursor: loadingSentimentAnalysis ||
                        loadingVideoSummary ||
                        loadingCommentClassifications
                        ? "not-allowed"
                        : ""
                } },
                react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].icon + " " + (activeItem === item.text ? SideNav_module_scss_1["default"].iconSelect : "") }, item.icon),
                react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].text }, item.text)))); })),
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].footer },
            react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].Powered }, "Powered By"),
            react_1["default"].createElement("img", { alt: "logo", src: "/images/2.png" }))));
};
exports["default"] = SideNav;
