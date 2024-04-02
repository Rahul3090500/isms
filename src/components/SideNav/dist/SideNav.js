"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var SideNav_module_scss_1 = require("./SideNav.module.scss");
var link_1 = require("next/link");
var router_1 = require("next/router");
var SideNav = function (_a) {
    var navItems = _a.navItems, onItemSelect = _a.onItemSelect, videoSummary = _a.videoSummary, handleSentimentAnalysis = _a.handleSentimentAnalysis, handleCommentClassifications = _a.handleCommentClassifications, loadingSentimentAnalysis = _a.loadingSentimentAnalysis, loadingCommentClassifications = _a.loadingCommentClassifications, loadingVideoSummary = _a.loadingVideoSummary, rowData = _a.rowData;
    var _b = react_1.useState(null), activeItem = _b[0], setActiveItem = _b[1];
    var router = router_1.useRouter();
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
    console.log('rowdata1224', navItems[4].path);
    react_1.useEffect(function () {
        if (navItems[4].path === '/ai-response') {
            if (rowData === undefined) {
                // If dataFileName is empty, redirect to /settings
                router.push('/settings');
            }
        }
    }, [rowData, router]);
    var handleItemClick = function (item, event) {
        if (!videoSummary && ['Summary', 'Sentiments', 'Classification', 'AI Response'].includes(item.text)) {
            event.preventDefault(); // Prevent default navigation if certain conditions are met
            var settingsItem = navItems.find(function (navItem) { return navItem.text === 'Settings'; });
            if (settingsItem) {
                setActiveItem(settingsItem.text);
                onItemSelect(settingsItem.content);
                router.push(settingsItem.path);
            }
        }
        else {
            setActiveItem(item.text);
            onItemSelect(item.content);
            if (item.path === '/summary') {
                handleSentimentAnalysis();
            }
            if (item.path === '/sentiments') {
                handleSentimentAnalysis();
                handleCommentClassifications();
            }
            else if (item.text === '/classification') {
                handleCommentClassifications();
                handleSentimentAnalysis();
            }
        }
    };
    return (react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].sidenav },
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].header },
            react_1["default"].createElement("img", { alt: "logo", src: "/images/1.png" })),
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].content }, navItems.map(function (item, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: item.path, passHref: true },
            react_1["default"].createElement("div", { onClick: function (event) { return loadingSentimentAnalysis || loadingVideoSummary || loadingCommentClassifications ? "" : handleItemClick(item, event); }, className: SideNav_module_scss_1["default"].singleItem + " " + (activeItem === item.text ? SideNav_module_scss_1["default"].selectedItem : ''), style: { cursor: loadingSentimentAnalysis || loadingVideoSummary || loadingCommentClassifications ? "not-allowed" : "" } },
                react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].icon + " " + (activeItem === item.text ? SideNav_module_scss_1["default"].iconSelect : '') }, item.icon),
                react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].text }, item.text)))); })),
        react_1["default"].createElement("div", { className: SideNav_module_scss_1["default"].footer },
            react_1["default"].createElement("span", { className: SideNav_module_scss_1["default"].Powered }, "Powered By"),
            react_1["default"].createElement("img", { alt: "logo", src: "/images/2.png" }))));
};
exports["default"] = SideNav;
