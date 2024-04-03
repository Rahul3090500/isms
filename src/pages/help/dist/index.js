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
var help_module_scss_1 = require("./help.module.scss");
var HelpItem = function (_a) {
    var title = _a.title, href = _a.href, videoRef = _a.videoRef, handleClick = _a.handleClick, action = _a.action;
    return (react_1["default"].createElement("div", { className: help_module_scss_1["default"].singleItem },
        react_1["default"].createElement("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: true, controls: true, src: "/video/client_Outh2.mp4", poster: "https://storage.googleapis.com/media-session/caminandes/artwork-512.png", width: "100%", loop: true, style: { display: "none" } }),
        action === "Watch Video" ? (react_1["default"].createElement("p", { onClick: function () {
                action === "Watch Video" ? handleClick() : "";
            }, className: help_module_scss_1["default"].text }, title)) : (react_1["default"].createElement("a", { href: href, onClick: function () {
                action === "Watch Video" ? handleClick() : "";
            }, className: help_module_scss_1["default"].text, target: "_blank", rel: "noopener noreferrer" }, title))));
};
var helpItems = [
    {
        title: "How to Create Channel Credentials",
        action: "Watch Video",
        href: ""
    },
    {
        title: "ISMS User Guide",
        action: "Download",
        href: "https://example.com/user-guide.pdf"
    },
    {
        title: "Feedback / Suggestions",
        action: "Email",
        href: "mailto:support@cazelabs.com"
    },
];
var Help = function () {
    var videoRef = react_1.useRef(null);
    var handleClick = function () { return handlePictureInPicture(videoRef); };
    var handlePictureInPicture = function (videoRef) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!videoRef.current)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!(videoRef.current !== document.pictureInPictureElement)) return [3 /*break*/, 3];
                    return [4 /*yield*/, videoRef.current.requestPictureInPicture()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, document.exitPictureInPicture()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: help_module_scss_1["default"].help },
        react_1["default"].createElement("div", { className: help_module_scss_1["default"].header },
            react_1["default"].createElement("span", { className: help_module_scss_1["default"].text }, "Help")),
        react_1["default"].createElement("div", { className: help_module_scss_1["default"].sub_header }, "Support information and guides"),
        react_1["default"].createElement("div", { className: help_module_scss_1["default"].dec },
            helpItems.map(function (item, index) { return (react_1["default"].createElement(HelpItem, { key: index, handleClick: handleClick, title: item.title, action: item.action, href: item.href, videoRef: videoRef })); }),
            react_1["default"].createElement("div", { className: help_module_scss_1["default"].box },
                react_1["default"].createElement("p", { className: help_module_scss_1["default"].text }, "ISMS Version Information"),
                react_1["default"].createElement("p", { className: help_module_scss_1["default"].text }, "Version: 202403v.3")))));
};
exports["default"] = Help;
