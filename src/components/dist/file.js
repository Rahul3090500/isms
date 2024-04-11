"use strict";
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
var material_1 = require("@mui/material");
var urlcontext_1 = require("@/hooks/urlcontext");
var router_1 = require("next/router");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function FileInputModal(_a) {
    var _this = this;
    var IsOpen = _a.IsOpen, setIsOpen = _a.setIsOpen, videoSummary = _a.videoSummary;
    var _b = urlcontext_1.useYoutubeContext(), setDataFileName = _b.setDataFileName, youtubeUrl = _b.youtubeUrl, dataFileName = _b.dataFileName;
    var _c = react_1.useState([]), rowData = _c[0], setRowData = _c[1];
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(""), error = _e[0], setError = _e[1];
    var fileInputRef = react_1.useRef(null);
    var handleFileChange = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var file, formData, response, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (!file) {
                        react_toastify_1.toast.error("No file selected");
                        return [2 /*return*/];
                    }
                    formData = new FormData();
                    formData.append("filename", file);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://20.244.47.51:8080/v1/upload_file?url=" + youtubeUrl, {
                            method: "POST",
                            body: formData
                        })];
                case 2:
                    response = _b.sent();
                    if (response.ok) {
                        setDataFileName(file.name);
                        react_toastify_1.toast.success("File uploaded successfully!");
                    }
                    else {
                        // You can customize this message based on the response status or message
                        react_toastify_1.toast.error("Failed to upload file.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Error uploading file:", error_1);
                    react_toastify_1.toast.error("Error uploading file");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var router = router_1.useRouter(); // Use the useRouter hook to get access to the router object
    var handleFileSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, res, processedResponse, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dataFileName || !youtubeUrl) {
                        console.log("No file selected or YouTube URL missing.");
                        react_toastify_1.toast.error("No file selected or YouTube URL missing.");
                        return [2 /*return*/]; // Exit if no file is selected or if the YouTube URL is missing
                    }
                    setIsLoading(true);
                    setError("");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("http://20.244.47.51:8080/v1/query_answer", {
                            method: "POST",
                            body: JSON.stringify({
                                url: youtubeUrl,
                                pdf_file: dataFileName,
                                model_type: "advanced"
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API call failed with status: " + response.status);
                    }
                    return [4 /*yield*/, response.text()];
                case 3:
                    res = _a.sent();
                    processedResponse = res.replace(/NaN/g, "0");
                    data = JSON.parse(processedResponse);
                    setRowData(data);
                    localStorage.setItem("Response", JSON.stringify(data)); // Update global state with the parsed data
                    console.log("Data successfully fetched and processed", data);
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error during file submission:", error_2);
                    setError(error_2.message || "An unknown error occurred");
                    react_toastify_1.toast.error("Error during file submission:", error_2);
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    setIsOpen(false); // Close the modal
                    router.push("/ai-response"); // Navigate after actions are complete
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    console.log(rowData, "rowDataaaaaa");
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Dialog, { open: IsOpen, onClose: function () { return setIsOpen(false); }, "aria-labelledby": "responsive-dialog-title" }, videoSummary ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.DialogTitle, { id: "responsive-dialog-title", sx: { fontWeight: 'bold', textAlign: 'center', width: "300px" } }, "Upload Your File"),
            react_1["default"].createElement(material_1.DialogContent, { dividers: true },
                react_1["default"].createElement(material_1.Box, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2
                    } },
                    react_1["default"].createElement("input", { ref: fileInputRef, type: "file", onChange: handleFileChange, style: { display: 'none' } }),
                    react_1["default"].createElement(material_1.Button, { variant: "contained", color: "primary", onClick: handleFileChange }, "Choose File"),
                    react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, "No file chosen"))),
            react_1["default"].createElement(material_1.DialogActions, { style: { width: "100%", justifyContent: "space-between", alignItems: "center", display: "flex" } },
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setIsOpen(false); }, color: "error", variant: "outlined" }, "Cancel"),
                react_1["default"].createElement(material_1.Button, { onClick: handleFileSubmit, color: "primary", variant: "contained", disabled: isLoading, startIcon: isLoading ? react_1["default"].createElement(material_1.CircularProgress, { color: "inherit", size: 20 }) : null }, isLoading ? 'Uploading...' : 'Upload File')))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.DialogContent, null,
                react_1["default"].createElement(material_1.Typography, null, "Please add a YouTube link first."),
                error && (react_1["default"].createElement(material_1.Typography, { color: "error", sx: { mt: 2 } },
                    "Error: ",
                    error))),
            react_1["default"].createElement(material_1.DialogActions, null,
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setIsOpen(false); }, color: "primary" }, "Close")))))));
}
exports["default"] = FileInputModal;
