"use strict";
exports.__esModule = true;
var table_1 = require("../table");
var AIResponse_module_scss_1 = require("./AIResponse.module.scss");
var react_1 = require("react");
var AIResponse = function (_a) {
    var rowData = _a.rowData;
    var _b = react_1.useState(false), isButtonLoading = _b[0], setIsButtonLoading = _b[1];
    var handleClick = function () {
        setIsButtonLoading(true);
        // handleSubmit();
        // Set isButtonLoading to false after 2 seconds
        setTimeout(function () {
            setIsButtonLoading(false);
        }, 2000);
    };
    console.log('rowData123', rowData.length);
    return (react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].AIResponse },
        react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].header },
            react_1["default"].createElement("span", { className: AIResponse_module_scss_1["default"].text }, "Al Response"),
            react_1["default"].createElement("span", { onClick: handleClick, className: AIResponse_module_scss_1["default"].refresh },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { className: isButtonLoading ? AIResponse_module_scss_1["default"].refresh_animate : "", width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
                        react_1["default"].createElement("path", { d: "M29 9.99756V15.9976H23", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M7 25.9976V19.9976H13", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M9.51 14.9976C10.0172 13.5644 10.8791 12.283 12.0155 11.2731C13.1518 10.2631 14.5255 9.5574 16.0083 9.22189C17.4911 8.88639 19.0348 8.93198 20.4952 9.35441C21.9556 9.77684 23.2853 10.5623 24.36 11.6376L29 15.9976M7 19.9976L11.64 24.3576C12.7147 25.4329 14.0444 26.2184 15.5048 26.6409C16.9652 27.0633 18.5089 27.1089 19.9917 26.7734C21.4745 26.4379 22.8482 25.7322 23.9845 24.7222C25.1209 23.7122 25.9828 22.4308 26.49 20.9976", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                "Refresh"),
            " "),
        react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].sub_header }, "Provides the automated Al (Artificial Intelligence) responses for all the query comments"),
        react_1["default"].createElement("div", { className: AIResponse_module_scss_1["default"].dec },
            rowData.length > 0 && react_1["default"].createElement(table_1["default"], null),
            " ")));
};
exports["default"] = AIResponse;
