"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var YTSummary_module_scss_1 = require("./YTSummary.module.scss");
var YTURLInput_1 = require("../../components/ISMS/YTURLInput");
var CircularProgress_1 = require("@mui/material/CircularProgress");
var Box_1 = require("@mui/material/Box");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var YTSummary = function (_a) {
    var videoSummary = _a.videoSummary, handleOnChange = _a.handleOnChange, clear = _a.clear, handleSubmit = _a.handleSubmit, loadingVideoSummary = _a.loadingVideoSummary;
    console.log("videoSummary123", videoSummary);
    var _b = react_1.useState(false), isButtonLoading = _b[0], setIsButtonLoading = _b[1];
    var router = router_1.useRouter();
    var handleClick = function () {
        setIsButtonLoading(true);
        handleSubmit();
        // Set isButtonLoading to false after 2 seconds
        setTimeout(function () {
            setIsButtonLoading(false);
        }, 2000);
    };
    // console.log('videoSummary.subsciber_count',videoSummary.subscriber_count )
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].YTSummary },
            react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].header },
                react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].text }, "Summary"),
                react_1["default"].createElement("span", { onClick: handleClick, className: YTSummary_module_scss_1["default"].refresh },
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement("svg", { className: isButtonLoading ? YTSummary_module_scss_1["default"].refresh_animate : "", width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                            react_1["default"].createElement("path", { d: "M29 9.99756V15.9976H23", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M7 25.9976V19.9976H13", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                    "Refresh"),
                " "),
            react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].sub_header }, "Provides the video summary insights"),
            loadingVideoSummary ? (react_1["default"].createElement(Box_1["default"], { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                } },
                react_1["default"].createElement(CircularProgress_1["default"], null))) : (react_1["default"].createElement(react_1["default"].Fragment, null, !videoSummary ? (react_1["default"].createElement(Box_1["default"], { sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    m: 2,
                    border: "1px dashed #1976d2",
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0"
                } },
                react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "p", gutterBottom: true, sx: { textAlign: "center", mb: 2 } }, "To unlock full insights, kindly add your YouTube video link in Settings."),
                react_1["default"].createElement(material_1.Typography, { variant: "body1", component: "p", gutterBottom: true, sx: { textAlign: "center", mb: 3 } }, "Caze iSMS provides AI-driven analysis for your social media channels, offering sentiment analysis, comment classification, and more. Start optimizing your digital marketing by integrating your YouTube Video!"),
                react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "secondary", onClick: function () { return router.push("/settings"); }, sx: { mt: 1, fontWeight: "bold" } }, "Go to Settings"))) : (react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].dec },
                react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].video },
                    react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].videoUrl },
                        react_1["default"].createElement(YTURLInput_1["default"], { youtubeUrl: videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_url, onChange: handleOnChange, onClear: clear })),
                    react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].YT_video },
                        react_1["default"].createElement("a", { target: "_blank", rel: "noopener noreferrer", href: videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_url },
                            react_1["default"].createElement("img", { src: videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_thumbnail, alt: "" }))),
                    react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].clannelDetails },
                        react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].video_title }, videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_title),
                        react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].bottom },
                            react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].leftSide },
                                react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].channel_name },
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].img },
                                        react_1["default"].createElement("img", { width: 100, height: 100, src: videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_thumbnail, alt: videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.video_title })),
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].titles },
                                        react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].name }, videoSummary === null || videoSummary === void 0 ? void 0 : videoSummary.channel_name),
                                        react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].subsciber_count }, videoSummary === null || videoSummary === void 0 ? void 0 :
                                            videoSummary.subsciber_count,
                                            " ",
                                            react_1["default"].createElement("span", { style: { marginRight: "10px" } },
                                                " ",
                                                "Subscribers"))))),
                            react_1["default"].createElement("div", { className: YTSummary_module_scss_1["default"].rightSide },
                                react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].views + " " + YTSummary_module_scss_1["default"].videoStat },
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].iconSpan },
                                        react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                                            react_1["default"].createElement("path", { d: "M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                                            react_1["default"].createElement("path", { d: "M7 18C7 18 11 10 18 10C25 10 29 18 29 18C29 18 25 26 18 26C11 26 7 18 7 18Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))), videoSummary === null || videoSummary === void 0 ? void 0 :
                                    videoSummary.video_views,
                                    " ",
                                    react_1["default"].createElement("span", { style: { marginLeft: "10px" } }, "Views")),
                                react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].likes + " " + YTSummary_module_scss_1["default"].videoStat },
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].iconSpan },
                                        react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                                            react_1["default"].createElement("path", { d: "M12.3346 16.8999L16.6024 7C17.4513 7 18.2654 7.34768 18.8657 7.96654C19.4659 8.58541 19.8032 9.42477 19.8032 10.3V14.7H25.842C26.1513 14.6963 26.4577 14.7621 26.7399 14.8927C27.0221 15.0233 27.2734 15.2156 27.4764 15.4562C27.6793 15.6969 27.8291 15.9801 27.9154 16.2864C28.0016 16.5927 28.0223 16.9146 27.9758 17.2299L26.5035 27.1299C26.4263 27.6545 26.1679 28.1326 25.7757 28.4763C25.3836 28.8199 24.8842 29.0059 24.3696 28.9999H12.3346M12.3346 16.8999V28.9999M12.3346 16.8999H9.13386C8.56792 16.8999 8.02517 17.1317 7.62499 17.5443C7.22482 17.9569 7 18.5165 7 19.0999V26.7999C7 27.3833 7.22482 27.9429 7.62499 28.3555C8.02517 28.7681 8.56792 28.9999 9.13386 28.9999H12.3346", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))), videoSummary === null || videoSummary === void 0 ? void 0 :
                                    videoSummary.video_likes,
                                    " ",
                                    react_1["default"].createElement("span", { style: { marginLeft: "10px" } }, "Likes")),
                                react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].duration + " " + YTSummary_module_scss_1["default"].videoStat },
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].iconSpan },
                                        react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                                            react_1["default"].createElement("path", { d: "M18 12V18L22 20", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                                            react_1["default"].createElement("path", { d: "M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                                    "Duration ", videoSummary === null || videoSummary === void 0 ? void 0 :
                                    videoSummary.video_duration),
                                react_1["default"].createElement("p", { className: YTSummary_module_scss_1["default"].total_comments + " " + YTSummary_module_scss_1["default"].videoStat },
                                    react_1["default"].createElement("span", { className: YTSummary_module_scss_1["default"].iconSpan },
                                        react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                                            react_1["default"].createElement("path", { d: "M27 21C27 21.5304 26.7893 22.0391 26.4142 22.4142C26.0391 22.7893 25.5304 23 25 23H13L9 27V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H25C25.5304 9 26.0391 9.21071 26.4142 9.58579C26.7893 9.96086 27 10.4696 27 11V21Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                                    "Comments: ", videoSummary === null || videoSummary === void 0 ? void 0 :
                                    videoSummary.total_comments))))))))))));
};
exports["default"] = YTSummary;
