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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
// import FileModal from "./modal/filemodal";
var urlcontext_1 = require("@/hooks/urlcontext");
var table_module_scss_1 = require("./table.module.scss");
var material_1 = require("@mui/material");
var PdfUploader = function () {
    var _a = urlcontext_1.useYoutubeContext(), rowData = _a.rowData, setRowData = _a.setRowData;
    var _b = react_1.useState(false), selectAll = _b[0], setSelectAll = _b[1];
    var _c = react_1.useState("asc"), sortDirection = _c[0], setSortDirection = _c[1];
    var _d = react_1.useState(""), sortField = _d[0], setSortField = _d[1];
    var handleSelectAllChange = function (event) {
        var newSelectAll = event.target.checked;
        setSelectAll(newSelectAll);
        var newRows = rowData.map(function (row) { return (__assign(__assign({}, row), { selected: !row.Answered ? newSelectAll : row.selected })); });
        setRowData(newRows);
    };
    var sortData = function (field) {
        var direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        var sortedData = __spreadArrays(rowData).sort(function (a, b) {
            //@ts-ignore
            if (a[field] < b[field])
                return direction === "asc" ? -1 : 1;
            //@ts-ignore
            if (a[field] > b[field])
                return direction === "asc" ? 1 : -1;
            return 0;
        });
        setSortField(field);
        setSortDirection(direction);
        setRowData(sortedData);
    };
    return (react_1["default"].createElement("div", { className: table_module_scss_1["default"].customTableContainer }, rowData.length > 0 && (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: table_module_scss_1["default"].tableHeader },
            react_1["default"].createElement(material_1.Checkbox, { checked: selectAll, indeterminate: !selectAll && rowData.some(function (item) { return item.selected; }), onChange: handleSelectAllChange }),
            react_1["default"].createElement("button", { onClick: function () { return sortData("user_name"); } },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", x: "0px", y: "0px", viewBox: "26 -26 100 125", xmlSpace: "preserve" },
                        react_1["default"].createElement("path", { className: "st0", d: "M114.9,5.7c-1.4,1.5-3.7,1.5-5.1,0L100.5-4v64.5c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V-4l-9.3,9.7  c-1.4,1.5-3.7,1.5-5.1,0c-1.4-1.5-1.4-3.9,0-5.4l15.1-15.9c0,0,0,0,0.1-0.1l0.2-0.2c0,0,0,0,0,0c0.6-0.7,1.5-1.1,2.5-1.1  c1,0,1.9,0.4,2.6,1.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l15.4,16.2C116.3,1.8,116.3,4.2,114.9,5.7z M56.9,62.6  C56.9,62.6,56.9,62.6,56.9,62.6l-0.3,0.3c0,0,0,0,0,0c-0.6,0.7-1.5,1.1-2.5,1.1c-1,0-1.9-0.4-2.6-1.1c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0,0,0,0L36.1,46.7c-1.4-1.5-1.4-3.9,0-5.4c1.4-1.5,3.7-1.5,5.1,0l9.3,9.7v-64.5c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6V51  l9.3-9.7c1.4-1.5,3.7-1.5,5.1,0c1.4,1.5,1.4,3.9,0,5.4L56.9,62.6z" }))),
                "User ID"),
            react_1["default"].createElement("button", { onClick: function () { return sortData("updated_time"); } },
                " ",
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", x: "0px", y: "0px", viewBox: "26 -26 100 125", xmlSpace: "preserve" },
                        react_1["default"].createElement("path", { className: "st0", d: "M114.9,5.7c-1.4,1.5-3.7,1.5-5.1,0L100.5-4v64.5c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V-4l-9.3,9.7  c-1.4,1.5-3.7,1.5-5.1,0c-1.4-1.5-1.4-3.9,0-5.4l15.1-15.9c0,0,0,0,0.1-0.1l0.2-0.2c0,0,0,0,0,0c0.6-0.7,1.5-1.1,2.5-1.1  c1,0,1.9,0.4,2.6,1.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l15.4,16.2C116.3,1.8,116.3,4.2,114.9,5.7z M56.9,62.6  C56.9,62.6,56.9,62.6,56.9,62.6l-0.3,0.3c0,0,0,0,0,0c-0.6,0.7-1.5,1.1-2.5,1.1c-1,0-1.9-0.4-2.6-1.1c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0,0,0,0L36.1,46.7c-1.4-1.5-1.4-3.9,0-5.4c1.4-1.5,3.7-1.5,5.1,0l9.3,9.7v-64.5c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6V51  l9.3-9.7c1.4-1.5,3.7-1.5,5.1,0c1.4,1.5,1.4,3.9,0,5.4L56.9,62.6z" }))),
                "Time Stamp")),
        react_1["default"].createElement("div", { className: table_module_scss_1["default"].scrollabletable }, rowData.map(function (item) {
            var _a;
            return (react_1["default"].createElement("div", { className: table_module_scss_1["default"].mainTable, key: item.commentId },
                react_1["default"].createElement(material_1.Checkbox, { checked: (_a = item.selected) !== null && _a !== void 0 ? _a : false, onChange: function (event) {
                        var newItem = __assign(__assign({}, item), { selected: event.target.checked });
                        setRowData(function (prev) {
                            return prev.map(function (it) {
                                return it.commentId === newItem.commentId ? newItem : it;
                            });
                        });
                    }, disabled: item.Answered }),
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
                        react_1["default"].createElement("p", { style: { backgroundColor: "#c6e0b4" }, className: table_module_scss_1["default"].firstText }, "Response"),
                        react_1["default"].createElement("textarea", { className: table_module_scss_1["default"].secondText, value: item.Response, disabled: item.Answered, onChange: function (event) {
                                if (!(item === null || item === void 0 ? void 0 : item.AIAnswered)) {
                                    var newItem_1 = __assign(__assign({}, item), { AIAnswered: item.Response, Response: event.target.value });
                                    setRowData(function (prev) {
                                        return prev.map(function (it) {
                                            return it.commentId === newItem_1.commentId ? newItem_1 : it;
                                        });
                                    });
                                }
                                else {
                                    var newItem_2 = __assign(__assign({}, item), { Response: event.target.value });
                                    setRowData(function (prev) {
                                        return prev.map(function (it) {
                                            return it.commentId === newItem_2.commentId ? newItem_2 : it;
                                        });
                                    });
                                }
                            } })))));
        })),
        react_1["default"].createElement("div", { style: {
                marginTop: "20px",
                display: "flex",
                justifyContent: "center"
            } },
            react_1["default"].createElement("button", { className: table_module_scss_1["default"].submitButton }, "Submit Response"))))));
};
exports["default"] = PdfUploader;
