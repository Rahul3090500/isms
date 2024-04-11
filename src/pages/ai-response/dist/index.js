"use strict";
exports.__esModule = true;
var urlcontext_1 = require("@/hooks/urlcontext");
var table_1 = require("../../components/table");
var AIResponse_module_scss_1 = require("./AIResponse.module.scss");
var react_1 = require("react");
var PdfTable_1 = require("@/components/PdfTable");
var Box_1 = require("@mui/material/Box");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var AIResponse = function (videoSummary) {
    var _a = react_1.useState(false), isButtonLoading = _a[0], setIsButtonLoading = _a[1];
    var handleClick = function () {
        setIsButtonLoading(true);
        // handleSubmit();
        // Set isButtonLoading to false after 2 seconds
        setTimeout(function () {
            setIsButtonLoading(false);
        }, 2000);
    };
    var _b = urlcontext_1.useYoutubeContext(), rowData = _b.rowData, setRowData = _b.setRowData;
    console.log("rowDataaaa123", rowData);
    react_1.useEffect(function () {
        var getRowData = localStorage.getItem("Response");
        if (getRowData)
            setRowData(JSON.parse(getRowData));
    }, []);
    var router = router_1.useRouter();
    return (react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].AIResponse },
        react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].header },
            react_1["default"].createElement("span", { className: AIResponse_module_scss_1["default"].text }, "Al Response"),
            react_1["default"].createElement("span", { onClick: videoSummary && handleClick, style: {
                    opacity: !videoSummary ? 0.4 : 1,
                    cursor: !videoSummary ? "default" : "pointer"
                }, className: AIResponse_module_scss_1["default"].refresh },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { className: isButtonLoading ? AIResponse_module_scss_1["default"].refresh_animate : "", width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                        react_1["default"].createElement("path", { d: "M29 9.99756V15.9976H23", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M7 25.9976V19.9976H13", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                "Refresh"),
            " "),
        react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].sub_header }, "Provides the automated Al (Artificial Intelligence) responses for all the query comments"),
        " ",
        rowData.length === 0 ? (react_1["default"].createElement(Box_1["default"], { sx: {
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
            react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "secondary", onClick: function () { return router.push("/settings"); }, sx: { mt: 1, fontWeight: "bold" } }, "Go to Settings"))) : (react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].dec },
            rowData.length > 0 && react_1["default"].createElement(table_1["default"], null),
            react_1["default"].createElement("p", { className: AIResponse_module_scss_1["default"].text }, "Quey Answered"),
            rowData.length > 0 && react_1["default"].createElement(PdfTable_1["default"], null)))));
};
exports["default"] = AIResponse;
