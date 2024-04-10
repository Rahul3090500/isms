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
var react_2 = require("@nextui-org/react");
var urlcontext_1 = require("@/hooks/urlcontext");
var router_1 = require("next/router");
function FileInputModal(_a) {
    var _this = this;
    var IsOpen = _a.IsOpen, setIsOpen = _a.setIsOpen, videoSummary = _a.videoSummary;
    var _b = urlcontext_1.useYoutubeContext(), setDataFileName = _b.setDataFileName, youtubeUrl = _b.youtubeUrl, dataFileName = _b.dataFileName;
    var _c = react_1.useState([]), rowData = _c[0], setRowData = _c[1];
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(''), error = _e[0], setError = _e[1];
    var handleFileChange = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var file, formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    file = e.target.files[0];
                    formData = new FormData();
                    //@ts-ignore
                    formData.append("filename", file);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://20.244.47.51:8080/v1/upload_file?url=" + youtubeUrl, {
                            method: "POST",
                            body: formData
                        })];
                case 2:
                    response = _a.sent();
                    response;
                    setDataFileName(file === null || file === void 0 ? void 0 : file.name);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error uploading file:", error_1);
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
                        return [2 /*return*/]; // Exit if no file is selected or if the YouTube URL is missing
                    }
                    setIsLoading(true);
                    setError('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch('http://20.244.47.51:8080/v1/query_answer', {
                            method: 'POST',
                            body: JSON.stringify({
                                url: youtubeUrl,
                                pdf_file: dataFileName,
                                model_type: "advanced"
                            }),
                            headers: {
                                'Content-Type': 'application/json'
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
                    setRowData(data); // Update global state with the parsed data
                    console.log("Data successfully fetched and processed", data);
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error during file submission:", error_2);
                    setError(error_2.message || 'An unknown error occurred');
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    setIsOpen(false); // Close the modal
                    router.push('/ai-response'); // Navigate after actions are complete
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    console.log(rowData, "rowDataaaaaa");
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Modal, { isOpen: IsOpen },
            react_1["default"].createElement(react_2.ModalContent, null,
                react_1["default"].createElement(react_1["default"].Fragment, null, videoSummary ? react_1["default"].createElement(react_1["default"].Fragment, null,
                    "      ",
                    react_1["default"].createElement(react_2.ModalHeader, { className: "flex flex-col gap-1" }, "Upload Your File"),
                    react_1["default"].createElement(react_2.ModalBody, null,
                        react_1["default"].createElement("input", { type: "file", onChange: handleFileChange })),
                    react_1["default"].createElement(react_2.ModalFooter, null,
                        react_1["default"].createElement(react_2.Button, { color: "danger", variant: "light", onPress: function () { return setIsOpen(false); } }, "Cancel"),
                        react_1["default"].createElement(react_2.Button, { color: "primary", variant: "light", onPress: handleFileSubmit }, isLoading ? 'Uploading...' : 'Upload File'))) :
                    react_1["default"].createElement("div", null,
                        "First add Youtube Link  ",
                        react_1["default"].createElement(react_2.Button, { color: "danger", variant: "light", onPress: function () { return setIsOpen(false); } }, "Cancel"),
                        error && react_1["default"].createElement("p", null,
                            "Error: ",
                            error)))))));
}
exports["default"] = FileInputModal;