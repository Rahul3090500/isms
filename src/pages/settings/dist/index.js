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
var Settings_module_scss_1 = require("./Settings.module.scss");
var urlcontext_1 = require("@/hooks/urlcontext");
var SettingsItem = function (_a) {
    var item = _a.item, handleOnChange = _a.handleOnChange, handleSubmit = _a.handleSubmit, isButtonLoading = _a.isButtonLoading, setItems = _a.setItems, videoSummary = _a.videoSummary, youtubeUrl = _a.youtubeUrl, setIsFileOpener = _a.setIsFileOpener;
    var _b = react_1.useState(false), isDisabled = _b[0], setIsDisabled = _b[1];
    react_1.useEffect(function () {
        var shouldDisable = function () {
            if (item.id === "videoLink") {
                return isButtonLoading || !item.value;
            }
            else if (item.id === "infoDocument") {
                return setIsDisabled(false);
            }
            else {
                return !item.value;
            }
        };
        setIsDisabled(shouldDisable());
    }, [isButtonLoading, videoSummary, item.id, item.value]);
    return (react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].singleItem },
        react_1["default"].createElement("p", { className: Settings_module_scss_1["default"].text1 }, item.text),
        react_1["default"].createElement("input", { onChange: function (event) {
                if (item.id === "videoLink") {
                    setItems(function (prev) {
                        return prev.map(function (item) {
                            return item.id === "videoLink"
                                ? __assign(__assign({}, item), { value: event.target.value }) : item;
                        });
                    });
                    handleOnChange(event);
                }
            }, placeholder: item.title, value: item.value, className: Settings_module_scss_1["default"].text, disabled: item.id === "infoDocument" ||
                item.id === "channelCredentials" }),
        react_1["default"].createElement("button", { disabled: isDisabled, onClick: function () {
                if (item.id === "videoLink")
                    handleSubmit(youtubeUrl);
                if (item.id === "infoDocument") {
                    setIsFileOpener(true);
                }
            }, className: Settings_module_scss_1["default"].link, role: "button", style: {
                cursor: (item.id === "videoLink" && isButtonLoading) || isDisabled
                    ? "not-allowed"
                    : ""
            } }, item.action)));
};
var Settings = function (_a) {
    var isButtonLoading = _a.isButtonLoading, handleSubmit = _a.handleSubmit, handleOnChange = _a.handleOnChange, setIsFileOpener = _a.setIsFileOpener;
    var youtubeUrl = urlcontext_1.useYoutubeContext().youtubeUrl;
    console.log("youtubeUrl====>", youtubeUrl);
    var _b = react_1.useState([
        {
            id: "videoLink",
            title: "Provide the video link",
            action: "Submit",
            value: youtubeUrl,
            text: "YouTube Video Link"
        },
        {
            id: "channelCredentials",
            title: "Provide the channel credential file",
            action: "Upload",
            value: "",
            text: "Channel Credentials"
        },
        {
            id: "infoDocument",
            title: "Provide the information document in pdf format",
            action: "Upload",
            value: "",
            text: "Information Document"
        },
    ]), items = _b[0], setItems = _b[1];
    console.log("youtuv=be Url ===>", youtubeUrl);
    return (react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].Settings },
        react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].header },
            react_1["default"].createElement("span", { className: Settings_module_scss_1["default"].text }, "Settings")),
        react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].sub_header }, "Configuration and Inputs"),
        react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].dec }, items.map(function (item) { return (react_1["default"].createElement(SettingsItem, { key: item.id, item: item, handleOnChange: handleOnChange, handleSubmit: handleSubmit, isButtonLoading: isButtonLoading, setItems: setItems, youtubeUrl: youtubeUrl, setIsFileOpener: setIsFileOpener })); }))));
};
exports["default"] = Settings;
