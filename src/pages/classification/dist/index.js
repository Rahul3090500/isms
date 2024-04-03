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
var BarChart_1 = require("../../components/ISMS/BarChart");
var ClassificationCommentTab_module_scss_1 = require("./ClassificationCommentTab.module.scss");
var x_data_grid_1 = require("@mui/x-data-grid");
var CircularProgress_1 = require("@mui/material/CircularProgress");
var Box_1 = require("@mui/material/Box");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var ClassificationCommentTab = function (_a) {
    var classificationChartData = _a.classificationChartData, _b = _a.classificationComments, classificationComments = _b === void 0 ? [] : _b, loadingCommentClassifications = _a.loadingCommentClassifications, videoSummary = _a.videoSummary;
    var _c = react_1.useState(false), isButtonLoading = _c[0], setIsButtonLoading = _c[1];
    var handleClick = function () {
        setIsButtonLoading(true);
        setTimeout(function () {
            setIsButtonLoading(false);
        }, 2000);
    };
    var columns = [
        { field: "id", headerName: "ID", width: 20 },
        { field: "user_name", headerName: "User Id", flex: 0.55, minWidth: 100 },
        // { field: 'published_time', headerName: 'PUBLISHED TIME', flex: 1, minWidth: 200 },
        { field: "updated_time", headerName: "Time Stamp", flex: 0.35, minWidth: 100 },
        { field: "comment", headerName: "Comments", flex: 1.3, minWidth: 250 },
        { field: "sentence_type", headerName: "Sentence Type", width: 180 },
    ];
    var router = router_1.useRouter();
    var rows = classificationComments === null || classificationComments === void 0 ? void 0 : classificationComments.map(function (comment, index) { return (__assign({ id: index + 1 }, comment)); });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        " ",
        react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].Classification },
            react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].header },
                react_1["default"].createElement("span", { className: ClassificationCommentTab_module_scss_1["default"].text }, "Classification"),
                react_1["default"].createElement("span", { onClick: handleClick, className: ClassificationCommentTab_module_scss_1["default"].refresh },
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    m: 2,
                    border: '1px dashed #1976d2',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0'
                } },
                react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "p", gutterBottom: true, sx: { textAlign: 'center', mb: 2 } }, "To unlock full insights, kindly add your YouTube video link in Settings."),
                react_1["default"].createElement(material_1.Typography, { variant: "body1", component: "p", gutterBottom: true, sx: { textAlign: 'center', mb: 3 } }, "Caze iSMS provides AI-driven analysis for your social media channels, offering sentiment analysis, comment classification, and more. Start optimizing your digital marketing by integrating your YouTube Video!"),
                react_1["default"].createElement(material_1.Button, { variant: "contained", color: "primary", onClick: function () { return router.push("/settings"); }, sx: { mt: 1, fontWeight: 'bold' } }, "Go to Settings"))) : (react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].dec },
                react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].barchart },
                    react_1["default"].createElement(BarChart_1["default"], { chartData: classificationChartData })),
                react_1["default"].createElement("div", { className: ClassificationCommentTab_module_scss_1["default"].datagrid, style: { height: 400, width: "100%" } },
                    react_1["default"].createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns, 
                        //@ts-ignore
                        pageSize: 5, rowsPerPageOptions: [5], disableSelectionOnClick: true, sx: {
                            // Targeting the column headers
                            "& .MuiDataGrid-columnHeaders": {
                                background: "#070da1",
                                color: "#070da1",
                                fontSize: "22px"
                            },
                            // Targeting the column header titles
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontSize: "19px"
                            },
                            // Targeting the cell values
                            "& .MuiDataGrid-cell": {
                                fontSize: "19px"
                            },
                            // Targeting the pagination footer
                            "& .MuiTablePagination-root": {
                                fontSize: "19px"
                            }
                        } })))))))));
};
exports["default"] = ClassificationCommentTab;
