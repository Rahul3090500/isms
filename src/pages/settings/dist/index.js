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
var router_1 = require("next/router");
var SettingsItem = function (_a) {
    var item = _a.item, handleOnChange = _a.handleOnChange, isButtonLoading = _a.isButtonLoading, setItems = _a.setItems, videoSummary = _a.videoSummary, 
    // youtubeUrl,
    setIsFileOpener = _a.setIsFileOpener, errorMessage = _a.errorMessage;
    var _b = react_1.useState(false), isDisabled = _b[0], setIsDisabled = _b[1];
    var router = router_1.useRouter();
    var dataFileName = urlcontext_1.useYoutubeContext().dataFileName;
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
        item.id === "infoDocument" ? (react_1["default"].createElement("p", { className: Settings_module_scss_1["default"].text }, dataFileName || item.title)) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("input", { type: "text" // or 'file' based on your specific need
                , onChange: function (event) {
                    if (item.id === "videoLink") {
                        setItems(function (prev) {
                            return prev.map(function (itm) {
                                return itm.id === "videoLink"
                                    ? __assign(__assign({}, itm), { value: event.target.value }) : itm;
                            });
                        });
                        handleOnChange(event);
                    }
                }, placeholder: item.title, value: item.value, className: Settings_module_scss_1["default"].text, style: { border: errorMessage ? "1px solid red" : "" }, disabled: item.id === "infoDocument" || item.id === "channelCredentials" }),
            errorMessage && react_1["default"].createElement("p", { className: Settings_module_scss_1["default"].error }, errorMessage))),
        react_1["default"].createElement("button", { disabled: isDisabled, onClick: function () {
                if (item.id === "videoLink") {
                    router.push("/summary"); // Navigate to /summary
                }
                else if (item.id === "infoDocument") {
                    setIsFileOpener(true); // Open the file opener for infoDocument
                }
                // If you have other item IDs to handle, you can add more conditions here
            }, className: Settings_module_scss_1["default"].link, style: { cursor: isDisabled ? "not-allowed" : "pointer" } }, item.action)));
};
var Settings = function (_a) {
    var isButtonLoading = _a.isButtonLoading, handleOnChange = _a.handleOnChange, setIsFileOpener = _a.setIsFileOpener, errorMessage = _a.errorMessage;
    var youtubeUrl = urlcontext_1.useYoutubeContext().youtubeUrl;
    // Sync the local youtubeUrl state to the global context
    console.log("youtubeUrl====>", youtubeUrl);
    var _b = react_1.useState([
        {
            id: "videoLink",
            title: "Provide the video link",
            action: "Submit",
            value: youtubeUrl,
            text: "YouTube Video Link"
        },
        // {
        //   id: "channelCredentials",
        //   title: "Provide the channel credential file",
        //   action: "Upload",
        //   value: "",
        //   text: "Channel Credentials",
        // },
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
        react_1["default"].createElement("div", { className: Settings_module_scss_1["default"].dec }, items.map(function (item) { return (react_1["default"].createElement(SettingsItem, { key: item.id, item: item, handleOnChange: handleOnChange, isButtonLoading: isButtonLoading, setItems: setItems, youtubeUrl: youtubeUrl, setIsFileOpener: setIsFileOpener, errorMessage: errorMessage })); }))));
};
exports["default"] = Settings;
