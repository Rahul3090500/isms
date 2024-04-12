"use strict";
exports.__esModule = true;
var react_1 = require("react");
var urlcontext_1 = require("@/hooks/urlcontext");
var table_module_scss_1 = require("./table.module.scss");
var PdfUploader2 = function () {
    var rowData = urlcontext_1.useYoutubeContext().rowData;
    return (react_1["default"].createElement("div", { className: table_module_scss_1["default"].customTableContainer }, rowData.length > 0 && (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: table_module_scss_1["default"].scrollabletable }, rowData.filter(function (it) { return it.selected == true && it.hasOwnProperty("AIAnswered"); }).map(function (item) { return (react_1["default"].createElement("div", { className: table_module_scss_1["default"].mainTable, key: item.commentId },
            react_1["default"].createElement("div", { className: table_module_scss_1["default"].table },
                react_1["default"].createElement("div", { className: table_module_scss_1["default"].top },
                    react_1["default"].createElement("div", { className: table_module_scss_1["default"].left },
                        react_1["default"].createElement("p", null, item.user_name)),
                    react_1["default"].createElement("div", { className: table_module_scss_1["default"].right },
                        react_1["default"].createElement("p", null, item.updated_time))),
                react_1["default"].createElement("div", { className: table_module_scss_1["default"].middle },
                    react_1["default"].createElement("p", { style: { backgroundColor: "#b3c6e7" }, className: table_module_scss_1["default"].firstText }, "Query"),
                    " ",
                    react_1["default"].createElement("p", { className: table_module_scss_1["default"].secondText }, item.Query)),
                react_1["default"].createElement("div", { style: { borderBottom: "2px solid #000" }, className: table_module_scss_1["default"].middle },
                    react_1["default"].createElement("p", { style: { backgroundColor: "#c6e0b4" }, className: table_module_scss_1["default"].firstText }, "AI Response"),
                    react_1["default"].createElement("textarea", { className: table_module_scss_1["default"].secondText, value: item.AIAnswered, disabled: true })),
                react_1["default"].createElement("div", { style: { borderBottom: "2px solid #000" }, className: table_module_scss_1["default"].middle },
                    react_1["default"].createElement("p", { style: { backgroundColor: "#c6e0b4" }, className: table_module_scss_1["default"].firstText }, "Final  Response"),
                    react_1["default"].createElement("textarea", { className: table_module_scss_1["default"].secondText, value: item.Response, disabled: true }))))); }))))));
};
exports["default"] = PdfUploader2;
