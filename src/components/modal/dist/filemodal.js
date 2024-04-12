"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var urlcontext_1 = require("@/hooks/urlcontext");
function FileModal(_a) {
    var isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, videoSummary = _a.videoSummary;
    var _b = urlcontext_1.useYoutubeContext(), setCredentails = _b.setCredentails, setUploadedFileName = _b.setUploadedFileName, uploadedFileName = _b.uploadedFileName;
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(""), error = _d[0], setError = _d[1];
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
                setIsOpen(false);
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
