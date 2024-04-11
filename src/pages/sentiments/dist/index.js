"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var x_data_grid_1 = require("@mui/x-data-grid");
var BarChart_1 = require("../../components/ISMS/BarChart");
var SentimentTab_module_scss_1 = require("./SentimentTab.module.scss");
var CircularProgress_1 = require("@mui/material/CircularProgress");
var Box_1 = require("@mui/material/Box");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var XLSX = require("xlsx");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
var SentimentTab = function (_a) {
    var chartData = _a.chartData, _b = _a.sentimentComments, sentimentComments = _b === void 0 ? [] : _b, handleSentimentAnalysis = _a.handleSentimentAnalysis, loadingSentimentAnalysis = _a.loadingSentimentAnalysis, videoSummary = _a.videoSummary;
    var _c = react_1.useState("All"), selectedSentiment = _c[0], setSelectedSentiment = _c[1];
    var _d = react_1.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var handleClicks = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    console.log("sentimentComments", sentimentComments);
    var handleSelectionChange = function (key) {
        setSelectedSentiment(key);
    };
    var router = router_1.useRouter();
    console.log("handleSelectionChange", handleSelectionChange);
    var filteredComments = sentimentComments.filter(function (comment) {
        return selectedSentiment === "All" || comment.sentiment === selectedSentiment;
    });
    var columns = [
        { field: "id", headerName: "No", width: 20 },
        { field: "user_name", headerName: "User Id", flex: 0.55, minWidth: 100 },
        {
            field: "updated_time",
            headerName: "Time Stamp",
            flex: 0.35,
            minWidth: 100
        },
        { field: "comment", headerName: "Comments", flex: 1.3, minWidth: 250 },
        { field: "sentiment", headerName: "Sentiment", width: 150 },
    ];
    var rows = filteredComments.map(function (comment, index) { return (__assign({ id: index + 1 }, comment)); });
    var _e = react_1.useState(false), isButtonLoading = _e[0], setIsButtonLoading = _e[1];
    var handleClick = function () {
        setIsButtonLoading(true);
        handleSentimentAnalysis();
        // Simulate a network request delay
        setTimeout(function () {
            setIsButtonLoading(false);
        }, 2000);
    };
    var exportToExcel = function (data, fileName) {
        var worksheet = XLSX.utils.json_to_sheet(data);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName + ".xlsx");
    };
    var convertToCSV = function (data) {
        var csvString = "";
        // Generate CSV header
        var headers = ["No", "User Id", "Time Stamp", "Comments", "Sentiment"];
        csvString += headers.join(",") + "\r\n";
        // Generate CSV rows
        data.forEach(function (row) {
            var rowData = [
                row.id,
                row.user_name,
                row.updated_time,
                "\"" + row.comment.replace(/"/g, '""') + "\"",
                row.sentiment,
            ];
            csvString += rowData.join(",") + "\r\n";
        });
        return csvString;
    };
    var exportToCSV = function (rows) {
        var csvData = convertToCSV(rows); // `rows` is your data array from the DataGrid
        var blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        var link = document.createElement("a");
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "sentiment_analysis_data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].Sentiment },
            react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].header },
                react_1["default"].createElement("span", { className: SentimentTab_module_scss_1["default"].text }, "Sentiments"),
                react_1["default"].createElement("span", { onClick: videoSummary && handleClick, style: { opacity: !videoSummary ? .4 : 1, cursor: !videoSummary ? "default" : "pointer" }, className: SentimentTab_module_scss_1["default"].refresh },
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement("svg", { className: isButtonLoading ? SentimentTab_module_scss_1["default"].refresh_animate : "", width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                            react_1["default"].createElement("path", { d: "M29 9.99756V15.9976H23", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M7 25.9976V19.9976H13", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                    "Refresh"),
                " "),
            react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].sub_header }, "Provides the sentiments based on the comments"),
            loadingSentimentAnalysis ? (react_1["default"].createElement(Box_1["default"], { sx: {
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
                react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "secondary", onClick: function () { return router.push("/settings"); }, sx: { mt: 1, fontWeight: "bold" } }, "Go to Settings"))) : (react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].dec },
                react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].barchart },
                    react_1["default"].createElement(BarChart_1["default"], { chartData: chartData })),
                react_1["default"].createElement("div", { className: SentimentTab_module_scss_1["default"].datagrid, style: { height: 400, width: "100%" } },
                    react_1["default"].createElement(material_1.Button, { id: "export-button", "aria-controls": open ? "export-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, variant: "outlined", onClick: handleClicks }, "Download"),
                    react_1["default"].createElement(Menu_1["default"], { id: "export-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                            "aria-labelledby": "export-button"
                        } },
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: function () {
                                handleClose();
                                exportToCSV(rows);
                            } }, "CSV"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: function () {
                                handleClose();
                                exportToExcel(rows, "sentiment_analysis_data");
                            } }, "Excel")),
                    react_1["default"].createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns, 
                        //@ts-ignore
                        pageSize: 5, rowsPerPageOptions: [5], disableSelectionOnClick: true, sx: {
                            // Default styles for larger screens
                            "& .MuiDataGrid-main": {
                                zIndex: "0"
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                background: "#070da1",
                                // color: "#fff", // Adjusted for better contrast and readability
                                fontSize: "22px"
                            },
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontSize: "19px"
                            },
                            "& .MuiDataGrid-cell": {
                                fontSize: "19px"
                            },
                            "& .MuiTablePagination-root": {
                                fontSize: "19px"
                            },
                            // Styles for medium screens (tablets)
                            "@media (max-width:900px)": {
                                "& .MuiDataGrid-columnHeaders": {
                                    fontSize: "18px"
                                },
                                "& .MuiDataGrid-columnHeaderTitle": {
                                    fontSize: "16px"
                                },
                                "& .MuiDataGrid-cell": {
                                    fontSize: "16px"
                                },
                                "& .MuiTablePagination-root": {
                                    fontSize: "16px"
                                }
                            },
                            // Styles for small screens (mobiles)
                            "@media (max-width:600px)": {
                                "& .MuiDataGrid-columnHeaders": {
                                    fontSize: "15px"
                                },
                                "& .MuiDataGrid-columnHeaderTitle": {
                                    fontSize: "13px"
                                },
                                "& .MuiDataGrid-cell": {
                                    fontSize: "13px"
                                },
                                "& .MuiTablePagination-root": {
                                    fontSize: "13px"
                                }
                            }
                        } })))))))));
};
exports["default"] = SentimentTab;
