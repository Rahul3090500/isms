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
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var urlcontext_1 = require("@/hooks/urlcontext");
var axios_1 = require("axios");
function FileModal(_a) {
    var _this = this;
    var isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, videoSummary = _a.videoSummary;
    var _b = urlcontext_1.useYoutubeContext(), rowData = _b.rowData, youtubeUrl = _b.youtubeUrl, setCredentails = _b.setCredentails, Credentails = _b.Credentails;
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(""), error = _d[0], setError = _d[1];
    var _e = react_1.useState(""), uploadedFileName = _e[0], setUploadedFileName = _e[1];
    react_1.useEffect(function () {
        var auth = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, payload, response, authUrl, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = rowData.filter(function (it) { return it.selected === true; });
                        payload = data.map(function (it) { return ({
                            answer: it === null || it === void 0 ? void 0 : it.Response,
                            commentId: it === null || it === void 0 ? void 0 : it.commentId
                        }); });
                        if (!(rowData.length > 0 && (Credentails === null || Credentails === void 0 ? void 0 : Credentails.client_secret))) return [3 /*break*/, 4];
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
                        console.error("Error uploading file:", error_1);
                        setError("Failed to upload file.");
                        react_toastify_1.toast.error("Failed to upload file.");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        auth();
    }, [Credentails, rowData, youtubeUrl]);
    var handleFileUpload = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        setIsLoading(true);
        setError("");
        setUploadedFileName("");
        reader.onload = function (event) {
            try {
                //@ts-ignore
                var jsonData = JSON.parse(event.target.result);
                setCredentails(jsonData === null || jsonData === void 0 ? void 0 : jsonData.installed);
                setUploadedFileName(file.name);
                react_toastify_1.toast.success("File \"" + file.name + "\" uploaded successfully!");
            }
            catch (error) {
                console.error("Error parsing JSON:", error);
                setError("Error parsing JSON.");
                react_toastify_1.toast.error("Error parsing JSON.");
            }
            finally {
                setIsLoading(false);
            }
        };
        reader.readAsText(file);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Dialog, { open: isOpen, onClose: function () { return setIsOpen(false); }, "aria-labelledby": "responsive-dialog-title" }, !videoSummary ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.DialogTitle, { id: "responsive-dialog-title", sx: { fontWeight: "bold", textAlign: "center", width: "500px" } }, "To unlock AI response, Kindly add YouTube URL, Credential File and Information File."),
            react_1["default"].createElement(material_1.DialogContent, { dividers: true },
                react_1["default"].createElement(material_1.Box, { component: "form", sx: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    } },
                    react_1["default"].createElement("div", { style: {
                            position: "relative",
                            display: "block",
                            width: "100%",
                            maxWidth: "300px",
                            margin: "10px auto"
                        } },
                        react_1["default"].createElement("input", { type: "file", id: "file-input", onChange: handleFileUpload, style: { display: "none" } }),
                        react_1["default"].createElement("label", { htmlFor: "file-input", style: {
                                display: "block",
                                padding: "12px 20px",
                                textAlign: "center",
                                backgroundColor: "#007bff",
                                color: "white",
                                borderRadius: "8px",
                                cursor: "pointer",
                                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                                transition: "background-color 0.2s"
                            } }, "Choose File"))),
                react_1["default"].createElement(material_1.Typography, { style: { width: "100%", textAlign: "center" } }, uploadedFileName)),
            react_1["default"].createElement(material_1.DialogActions, { style: {
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex"
                } },
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setIsOpen(false); }, color: "error", variant: "outlined" }, "Cancel"),
                react_1["default"].createElement(material_1.Button, { onClick: handleFileUpload, color: "secondary", variant: "outlined", disabled: isLoading, startIcon: isLoading ? (react_1["default"].createElement(material_1.CircularProgress, { color: "inherit", size: 20 })) : null }, isLoading ? "Uploading..." : "Upload File")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.DialogContent, null,
                react_1["default"].createElement(material_1.Typography, null, "Please add a Youtube Link and Submit."),
                error && (react_1["default"].createElement(material_1.Typography, { color: "error", sx: { mt: 2 } },
                    "Error: ",
                    error))),
            react_1["default"].createElement(material_1.DialogActions, null,
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setIsOpen(false); }, color: "primary" }, "Close")))))));
}
exports["default"] = FileModal;
