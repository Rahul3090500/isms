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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var BarChart_1 = require("../../components/ISMS/BarChart");
var ClassificationCommentTab_module_scss_1 = require("./ClassificationCommentTab.module.scss");
var x_data_grid_1 = require("@mui/x-data-grid");
var CircularProgress_1 = require("@mui/material/CircularProgress");
var Box_1 = require("@mui/material/Box");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
var XLSX = require("xlsx");
var ClassificationCommentTab = function (_a) {
    var classificationChartData = _a.classificationChartData, _b = _a.classificationComments, classificationComments = _b === void 0 ? [] : _b, loadingCommentClassifications = _a.loadingCommentClassifications, videoSummary = _a.videoSummary, handleCommentClassifications = _a.handleCommentClassifications;
    var _c = react_1.useState(false), isButtonLoading = _c[0], setIsButtonLoading = _c[1];
    var _d = react_1.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var handleClicks = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsButtonLoading(true);
                    return [4 /*yield*/, handleCommentClassifications()];
                case 1:
                    _a.sent();
                    setIsButtonLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var columns = [
        { field: "id", headerName: "ID", width: 20 },
        { field: "user_name", headerName: "User Id", flex: 0.55, minWidth: 100 },
        // { field: 'published_time', headerName: 'PUBLISHED TIME', flex: 1, minWidth: 200 },
        {
            field: "updated_time",
            headerName: "Time Stamp",
            flex: 0.35,
            minWidth: 100
        },
        { field: "comment", headerName: "Comments", flex: 1.3, minWidth: 250 },
        { field: "sentence_type", headerName: "Sentence Type", width: 180 },
    ];
    var router = router_1.useRouter();
    var rows = classificationComments === null || classificationComments === void 0 ? void 0 : classificationComments.map(function (comment, index) { return (__assign({ id: index + 1 }, comment)); });
    var exportToExcel = function (data, fileName) {
        var worksheet = XLSX.utils.json_to_sheet(data);
        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName + ".xlsx");
    };
    var convertToCSV = function (data) {
        var csvString = "";
        // Generate CSV header
        var headers = [
            "No",
            "User Id",
            "Time Stamp",
            "Comments",
            "Sentence Type",
        ];
        csvString += headers.join(",") + "\r\n";
        // Generate CSV rows
        data.forEach(function (row) {
            var rowData = [
                row.id,
                row.user_name,
                row.updated_time,
                "\"" + row.comment.replace(/"/g, '""') + "\"",
                row.sentence_type,
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
        link.setAttribute("download", "classification_analysis_data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        " ",
        react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].Classification },
            react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].header },
                react_1["default"].createElement("span", { className: ClassificationCommentTab_module_scss_1["default"].text }, "Classification"),
                react_1["default"].createElement("span", { onClick: videoSummary && handleClick, style: { opacity: !videoSummary ? .4 : 1, cursor: !videoSummary ? "default" : "pointer" }, className: ClassificationCommentTab_module_scss_1["default"].refresh },
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement("svg", { className: isButtonLoading ? ClassificationCommentTab_module_scss_1["default"].refresh_animate : "", width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                            react_1["default"].createElement("path", { d: "M29 9.99756V15.9976H23", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M7 25.9976V19.9976H13", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            react_1["default"].createElement("path", { d: "M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                    "Refresh"),
                " "),
            react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].sub_header }, "Provides the classification of the comments in different sentence types"),
            loadingCommentClassifications ? (react_1["default"].createElement(Box_1["default"], { sx: {
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
                react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "secondary", onClick: function () { return router.push("/settings"); }, sx: { mt: 1, fontWeight: "bold" } }, "Go to Settings"))) : (react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].dec },
                react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].barchart },
                    react_1["default"].createElement(BarChart_1["default"], { chartData: classificationChartData })),
                react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].datagrid, style: { height: 400, width: "100%" } },
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
                            "& .MuiDataGrid-columnHeaders": {
                                background: "#070da1",
                                fontSize: "22px"
                            },
                            "& .MuiDataGrid-main": {
                                zIndex: "0"
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
                            },
                            // Hiding the scrollbar (both Y and X axis)
                            "& .MuiDataGrid-virtualScroller": {
                                "&::-webkit-scrollbar": {
                                    display: "none !important"
                                },
                                scrollbarWidth: "none"
                            }
                        } })))))))));
};
exports["default"] = ClassificationCommentTab;
