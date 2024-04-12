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
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var axios_1 = require("axios");
var PdfUploader = function () {
    var _a = urlcontext_1.useYoutubeContext(), rowData = _a.rowData, setRowData = _a.setRowData, youtubeUrl = _a.youtubeUrl, Credentails = _a.Credentails;
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
    var handleAuthClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, payload, response, authUrl, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = rowData.filter(function (it) { return it.selected === true; });
                    payload = data.map(function (it) { return ({
                        answer: it === null || it === void 0 ? void 0 : it.Response,
                        commentId: it === null || it === void 0 ? void 0 : it.commentId
                    }); });
                    if (!(rowData.length > 0 && (Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_secret))) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("/api/get-auth-url", {
                            //@ts-ignore
                            client_id: Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_id,
                            //@ts-ignore
                            client_secret: Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_secret,
                            redirect_uris: ["http://localhost:3000/"]
                        })];
                case 2:
                    response = _a.sent();
                    localStorage.setItem("Response", JSON.stringify(rowData));
                    localStorage.setItem("data", JSON.stringify({
                        payload: payload,
                        //@ts-ignore
                        client_id: Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_id,
                        //@ts-ignore
                        client_secret: Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_secret,
                        redirect_uris: ["http://localhost:3000/"],
                        youtubeUrl: youtubeUrl
                    }));
                    authUrl = response.data.authUrl;
                    window.location.href = authUrl;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error during authentication:", error_1);
                    react_toastify_1.toast.error("Authentication failed.");
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    react_toastify_1.toast.info("No data to process or missing credentials.");
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
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
            react_1["default"].createElement("button", { className: table_module_scss_1["default"].submitButton, 
                // onClick={() => setOpenCredentialsFile(true)}
                onClick: handleAuthClick }, "Submit Response"))))));
};
exports["default"] = PdfUploader;
