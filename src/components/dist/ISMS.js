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
var SideNav_1 = require("@/components/SideNav/SideNav");
var nav_1 = require("@/components/SideNav/nav");
var ISMS_module_scss_1 = require("../components/ISMS.module.scss");
var react_1 = require("react");
var api_config_1 = require("@/utils/api.config");
var urlcontext_1 = require("@/hooks/urlcontext");
var axios_1 = require("axios");
var router_1 = require("next/router");
var file_1 = require("./file");
var navItems = [
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M5 13.3333L17 4L29 13.3333V28C29 28.7072 28.719 29.3855 28.219 29.8856C27.7189 30.3857 27.0406 30.6667 26.3333 30.6667H7.66667C6.95942 30.6667 6.28115 30.3857 5.78105 29.8856C5.28095 29.3855 5 28.7072 5 28V13.3333Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M13 30.3333V17H21V30.3333", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Home",
        path: "/home"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M24.7778 15.2222H3", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M31 9H3", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M31 21.4443H3", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M24.7778 27.6667H3", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Summary",
        path: "/summary"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M29 18H24.2L20.6 29L13.4 7L9.8 18H5", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Sentiments",
        path: "/sentiments"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M14.3333 6H5V15.3333H14.3333V6Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M19.6667 10.6667C19.6667 13.244 21.7561 15.3333 24.3334 15.3333C26.9107 15.3333 29.0001 13.244 29.0001 10.6667C29.0001 8.08934 26.9107 6 24.3334 6C21.7561 6 19.6667 8.08934 19.6667 10.6667Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M29.0001 20.6667H19.6667V30.0001H29.0001V20.6667Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M14.3333 20.6667H5V30.0001H14.3333V20.6667Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Classification",
        path: "/classification"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M25 6C23.9391 6 22.9217 6.42143 22.1716 7.17157C21.4214 7.92172 21 8.93913 21 10V26C21 27.0609 21.4214 28.0783 22.1716 28.8284C22.9217 29.5786 23.9391 30 25 30C26.0609 30 27.0783 29.5786 27.8284 28.8284C28.5786 28.0783 29 27.0609 29 26C29 24.9391 28.5786 23.9217 27.8284 23.1716C27.0783 22.4214 26.0609 22 25 22H9C7.93913 22 6.92172 22.4214 6.17157 23.1716C5.42143 23.9217 5 24.9391 5 26C5 27.0609 5.42143 28.0783 6.17157 28.8284C6.92172 29.5786 7.93913 30 9 30C10.0609 30 11.0783 29.5786 11.8284 28.8284C12.5786 28.0783 13 27.0609 13 26V10C13 8.93913 12.5786 7.92172 11.8284 7.17157C11.0783 6.42143 10.0609 6 9 6C7.93913 6 6.92172 6.42143 6.17157 7.17157C5.42143 7.92172 5 8.93913 5 10C5 11.0609 5.42143 12.0783 6.17157 12.8284C6.92172 13.5786 7.93913 14 9 14H25C26.0609 14 27.0783 13.5786 27.8284 12.8284C28.5786 12.0783 29 11.0609 29 10C29 8.93913 28.5786 7.92172 27.8284 7.17157C27.0783 6.42143 26.0609 6 25 6Z", stroke: "#070da1", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "AI Response",
        path: "/ai-response"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z", stroke: "#676767", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M25.4 21C25.2669 21.3016 25.2272 21.6362 25.286 21.9606C25.3448 22.285 25.4995 22.5843 25.73 22.82L25.79 22.88C25.976 23.0657 26.1235 23.2863 26.2241 23.5291C26.3248 23.7719 26.3766 24.0322 26.3766 24.295C26.3766 24.5578 26.3248 24.8181 26.2241 25.0609C26.1235 25.3037 25.976 25.5243 25.79 25.71C25.6043 25.896 25.3837 26.0435 25.1409 26.1441C24.8981 26.2448 24.6378 26.2966 24.375 26.2966C24.1122 26.2966 23.8519 26.2448 23.6091 26.1441C23.3663 26.0435 23.1457 25.896 22.96 25.71L22.9 25.65C22.6643 25.4195 22.365 25.2648 22.0406 25.206C21.7162 25.1472 21.3816 25.1869 21.08 25.32C20.7842 25.4468 20.532 25.6572 20.3543 25.9255C20.1766 26.1938 20.0813 26.5082 20.08 26.83V27C20.08 27.5304 19.8693 28.0391 19.4942 28.4142C19.1191 28.7893 18.6104 29 18.08 29C17.5496 29 17.0409 28.7893 16.6658 28.4142C16.2907 28.0391 16.08 27.5304 16.08 27V26.91C16.0723 26.579 15.9651 26.258 15.7725 25.9887C15.5799 25.7194 15.3107 25.5143 15 25.4C14.6984 25.2669 14.3638 25.2272 14.0394 25.286C13.715 25.3448 13.4157 25.4995 13.18 25.73L13.12 25.79C12.9343 25.976 12.7137 26.1235 12.4709 26.2241C12.2281 26.3248 11.9678 26.3766 11.705 26.3766C11.4422 26.3766 11.1819 26.3248 10.9391 26.2241C10.6963 26.1235 10.4757 25.976 10.29 25.79C10.104 25.6043 9.95653 25.3837 9.85588 25.1409C9.75523 24.8981 9.70343 24.6378 9.70343 24.375C9.70343 24.1122 9.75523 23.8519 9.85588 23.6091C9.95653 23.3663 10.104 23.1457 10.29 22.96L10.35 22.9C10.5805 22.6643 10.7352 22.365 10.794 22.0406C10.8528 21.7162 10.8131 21.3816 10.68 21.08C10.5532 20.7842 10.3428 20.532 10.0745 20.3543C9.80618 20.1766 9.49179 20.0813 9.17 20.08H9C8.46957 20.08 7.96086 19.8693 7.58579 19.4942C7.21071 19.1191 7 18.6104 7 18.08C7 17.5496 7.21071 17.0409 7.58579 16.6658C7.96086 16.2907 8.46957 16.08 9 16.08H9.09C9.42099 16.0723 9.742 15.9651 10.0113 15.7725C10.2806 15.5799 10.4857 15.3107 10.6 15C10.7331 14.6984 10.7728 14.3638 10.714 14.0394C10.6552 13.715 10.5005 13.4157 10.27 13.18L10.21 13.12C10.024 12.9343 9.87653 12.7137 9.77588 12.4709C9.67523 12.2281 9.62343 11.9678 9.62343 11.705C9.62343 11.4422 9.67523 11.1819 9.77588 10.9391C9.87653 10.6963 10.024 10.4757 10.21 10.29C10.3957 10.104 10.6163 9.95653 10.8591 9.85588C11.1019 9.75523 11.3622 9.70343 11.625 9.70343C11.8878 9.70343 12.1481 9.75523 12.3909 9.85588C12.6337 9.95653 12.8543 10.104 13.04 10.29L13.1 10.35C13.3357 10.5805 13.635 10.7352 13.9594 10.794C14.2838 10.8528 14.6184 10.8131 14.92 10.68H15C15.2958 10.5532 15.548 10.3428 15.7257 10.0745C15.9034 9.80618 15.9987 9.49179 16 9.17V9C16 8.46957 16.2107 7.96086 16.5858 7.58579C16.9609 7.21071 17.4696 7 18 7C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V9.09C20.0013 9.41179 20.0966 9.72618 20.2743 9.99447C20.452 10.2628 20.7042 10.4732 21 10.6C21.3016 10.7331 21.6362 10.7728 21.9606 10.714C22.285 10.6552 22.5843 10.5005 22.82 10.27L22.88 10.21C23.0657 10.024 23.2863 9.87653 23.5291 9.77588C23.7719 9.67523 24.0322 9.62343 24.295 9.62343C24.5578 9.62343 24.8181 9.67523 25.0609 9.77588C25.3037 9.87653 25.5243 10.024 25.71 10.21C25.896 10.3957 26.0435 10.6163 26.1441 10.8591C26.2448 11.1019 26.2966 11.3622 26.2966 11.625C26.2966 11.8878 26.2448 12.1481 26.1441 12.3909C26.0435 12.6337 25.896 12.8543 25.71 13.04L25.65 13.1C25.4195 13.3357 25.2648 13.635 25.206 13.9594C25.1472 14.2838 25.1869 14.6184 25.32 14.92V15C25.4468 15.2958 25.6572 15.548 25.9255 15.7257C26.1938 15.9034 26.5082 15.9987 26.83 16H27C27.5304 16 28.0391 16.2107 28.4142 16.5858C28.7893 16.9609 29 17.4696 29 18C29 18.5304 28.7893 19.0391 28.4142 19.4142C28.0391 19.7893 27.5304 20 27 20H26.91C26.5882 20.0013 26.2738 20.0966 26.0055 20.2743C25.7372 20.452 25.5268 20.7042 25.4 21Z", stroke: "#676767", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Settings",
        path: "/settings"
    },
    {
        icon: (react_1["default"].createElement("svg", { width: "35", height: "35", viewBox: "0 0 35 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("rect", { width: "35", height: "35", fill: "" }),
            react_1["default"].createElement("path", { d: "M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z", stroke: "#676767", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M15.0901 15.0001C15.3252 14.3317 15.7892 13.7682 16.4 13.4092C17.0108 13.0502 17.729 12.919 18.4273 13.0388C19.1255 13.1586 19.7589 13.5216 20.2152 14.0636C20.6714 14.6056 20.9211 15.2916 20.9201 16.0001C20.9201 18.0001 17.9201 19.0001 17.9201 19.0001", stroke: "#676767", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1["default"].createElement("path", { d: "M18 23H18.01", stroke: "#676767", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        text: "Help",
        path: "/help"
    },
];
function ISMS(_a) {
    var _this = this;
    var Component = _a.Component, pageProps = _a.pageProps;
    var _b = urlcontext_1.useYoutubeContext(), youtubeUrl = _b.youtubeUrl, setYoutubeUrl = _b.setYoutubeUrl;
    // const [youtubeUrl, setYoutubeUrl] = useState("https://www.youtube.com/watch?v=f5YdhPYsk3U");
    var _c = react_1.useState(false), isButtonLoading = _c[0], setButtonLoading = _c[1];
    var _d = react_1.useState(), videoSummary = _d[0], setVideoSummary = _d[1];
    var _e = react_1.useState(), sentimentSummary = _e[0], setSentimentSummary = _e[1];
    var _f = react_1.useState(), commentClassifications = _f[0], setCommentClassifications = _f[1];
    var _g = react_1.useState(), classificationComments = _g[0], setClassificationComments = _g[1];
    var _h = react_1.useState(), sentimentComments = _h[0], setSentimentComments = _h[1];
    var _j = react_1.useState(false), loadingCommentClassifications = _j[0], setLoadingVideoSummary = _j[1];
    var _k = react_1.useState(false), loadingSentimentAnalysis = _k[0], setLoadingSentimentAnalysis = _k[1];
    var _l = react_1.useState(false), loadingVideoSummary = _l[0], setLoadingCommentClassifications = _l[1];
    var router = router_1.useRouter();
    var query = router.query;
    console.log(query);
    function getCredentials() {
        return __awaiter(this, void 0, void 0, function () {
            var payload, data, response, token, payloadForFile, blob, formData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, localStorage.getItem("data")];
                    case 1:
                        payload = _a.sent();
                        data = JSON.parse(payload);
                        console.log(data);
                        return [4 /*yield*/, axios_1["default"].post("/api/authenticate-and-save", __assign(__assign({}, data), { code: query.code }))];
                    case 2:
                        response = _a.sent();
                        token = response.data.token;
                        console.log(token);
                        payloadForFile = {
                            token: token === null || token === void 0 ? void 0 : token.access_token,
                            refresh_token: token === null || token === void 0 ? void 0 : token.refresh_token,
                            token_uri: "https://oauth2.googleapis.com/token",
                            client_id: data.client_id,
                            client_secret: data.client_secret
                        };
                        console.log(payloadForFile);
                        blob = new Blob([JSON.stringify(payloadForFile)], {
                            type: "application/json"
                        });
                        formData = new FormData();
                        formData.append("filename", blob, "credentials_token.json");
                        return [4 /*yield*/, fetch("http://20.244.47.51:8080/v1/upload_file?url=" + (data === null || data === void 0 ? void 0 : data.youtubeUrl), {
                                method: "POST",
                                body: formData
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, api_config_1["default"].post("/auto_reply_multi_select", {
                                url: data === null || data === void 0 ? void 0 : data.youtubeUrl,
                                model_type: "advanced",
                                credential_file: "credentials_token.json",
                                reply_list: data === null || data === void 0 ? void 0 : data.payload
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        ("");
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        console.log("Successfully");
        if (query === null || query === void 0 ? void 0 : query.code)
            getCredentials();
    }, [query]);
    var _m = react_1.useState({
        labels: ["Positive", "Negative", "Neutral", "Unknown"],
        datasets: [
            {
                label: "comments",
                data: [],
                backgroundColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                borderColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                borderRadius: {
                    topRight: 10,
                    bottomRight: 10
                },
                borderWidth: 1
            },
        ]
    }), chartData = _m[0], setChartData = _m[1];
    var _o = react_1.useState({
        // labels: ["Positive", "Neutral", "Negative", "Unknown"],
        labels: [
            "Declarative",
            "Exlamative",
            "Imperative",
            "Interagotive",
            "Unknown",
        ],
        datasets: [
            {
                label: "classifiactions",
                data: [],
                backgroundColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                borderColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                borderRadius: {
                    topRight: 10,
                    bottomRight: 10
                },
                borderWidth: 1
            },
        ]
    }), classificationChartData = _o[0], setclassificationChartData = _o[1];
    var handleOnChange = function (event) {
        setYoutubeUrl(event.target.value);
        console.log("event tarhet.value===>", event.target.value);
        setChartData({
            labels: ["Positive", "Neutral", "Negative", "Unknown"],
            datasets: [
                {
                    label: "Comments",
                    data: [],
                    backgroundColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                    borderColor: ["#04cadc", "#5e91f4", "#38b6ff", "#070da1"],
                    borderRadius: {
                        topRight: 10,
                        bottomRight: 10
                    },
                    borderWidth: 1
                },
            ]
        });
        setVideoSummary(undefined);
        setSentimentComments(undefined);
        setCommentClassifications(undefined);
        setSentimentComments(undefined);
    };
    var clear = function () {
        setYoutubeUrl("");
        setVideoSummary(undefined);
        setSentimentSummary(undefined);
        setCommentClassifications(undefined);
        setSentimentComments(undefined);
    };
    var updateVideoSummary = function (url) { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingVideoSummary(true);
                    console.log("shshhdhdh=====>", url);
                    payload = {
                        url: url
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, api_config_1["default"].post("/get_video_summary", payload)];
                case 2:
                    response = _a.sent();
                    console.log("Video summary response:", response.data);
                    setVideoSummary(response.data); // Assuming the API response structure matches your state
                    return [4 /*yield*/, api_config_1["default"].post("/youtube_comment_extract", payload)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    console.error("Error fetching video summary:", err_1);
                    // Log detailed error for debugging
                    if (err_1.response) {
                        console.log(err_1.response.data);
                        console.log(err_1.response.status);
                        console.log(err_1.response.headers);
                    }
                    else if (err_1.request) {
                        console.log(err_1.request);
                    }
                    else {
                        console.log("Error", err_1.message);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    setLoadingVideoSummary(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var updateSentimentChartData = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, apiResponse, _a, positive_comments_1, neutral_comments_1, negative_comments_1, unknown_comments_1, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoadingSentimentAnalysis(true);
                    payload = {
                        url: youtubeUrl
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_config_1["default"].post("/get_sentiment_analysis", payload)];
                case 2:
                    apiResponse = _b.sent();
                    console.log("apiResponse==>", apiResponse);
                    _a = apiResponse.data, positive_comments_1 = _a.positive_comments, neutral_comments_1 = _a.neutral_comments, negative_comments_1 = _a.negative_comments, unknown_comments_1 = _a.unknown_comments;
                    setSentimentSummary(apiResponse.data);
                    setChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [
                                // total_comments,
                                positive_comments_1,
                                neutral_comments_1,
                                negative_comments_1,
                                unknown_comments_1,
                            ] })); }) })); });
                    return [3 /*break*/, 5];
                case 3:
                    err_2 = _b.sent();
                    console.error("Error fetching chart data:", err_2);
                    // Use hardcoded values as a fallback
                    setChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [] })); }) })); });
                    return [3 /*break*/, 5];
                case 4:
                    setLoadingSentimentAnalysis(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var updateCommentClassificationsChartData = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, apiResponse, _a, Declarative_comments_1, Exclamative_comments_1, Imperative_comments_1, Interrogative_comments_1, unknown_comments_2, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoadingCommentClassifications(true);
                    payload = {
                        url: youtubeUrl
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_config_1["default"].post("/get_sentencetype_advanced", payload)];
                case 2:
                    apiResponse = _b.sent();
                    console.log("apiResponse==>", apiResponse);
                    _a = apiResponse.data, Declarative_comments_1 = _a.Declarative_comments, Exclamative_comments_1 = _a.Exclamative_comments, Imperative_comments_1 = _a.Imperative_comments, Interrogative_comments_1 = _a.Interrogative_comments, unknown_comments_2 = _a.unknown_comments;
                    setCommentClassifications(apiResponse.data);
                    setclassificationChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [
                                Declarative_comments_1,
                                Exclamative_comments_1,
                                Imperative_comments_1,
                                Interrogative_comments_1,
                                unknown_comments_2,
                            ] })); }) })); });
                    return [3 /*break*/, 5];
                case 3:
                    err_3 = _b.sent();
                    console.error("Error fetching chart data:", err_3);
                    // Use hardcoded values as a fallback
                    setChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [] })); }) })); });
                    return [3 /*break*/, 5];
                case 4:
                    setLoadingCommentClassifications(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var fetchAllSentimentAnalysisData = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingSentimentAnalysis(true);
                    payload = {
                        url: youtubeUrl
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_config_1["default"].post("/fetch_all_sentiment_analysis_data", payload)];
                case 2:
                    response = _a.sent();
                    //@ts-ignore
                    setSentimentComments(__spreadArrays(response.data));
                    console.log("Fetching sentiment analysis data failed: ", response);
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error("Fetching sentiment analysis data failed: ", error_2);
                    return [3 /*break*/, 5];
                case 4:
                    setLoadingSentimentAnalysis(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var fetchAllCommentClassificationsData = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingCommentClassifications(true);
                    payload = {
                        url: youtubeUrl
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_config_1["default"].post("/fetch_all_sentencetype_data_advanced", payload)];
                case 2:
                    response = _a.sent();
                    setClassificationComments(response.data);
                    console.log("Fetching sentiment analysis data failed: ", response);
                    return [3 /*break*/, 5];
                case 3:
                    error_3 = _a.sent();
                    console.error("Fetching sentiment analysis data failed: ", error_3);
                    return [3 /*break*/, 5];
                case 4:
                    setLoadingCommentClassifications(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function (url) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("gdgdgdgdg=====>", youtubeUrl, url);
                    console.log("event===>");
                    setYoutubeUrl(url);
                    setButtonLoading(true);
                    return [4 /*yield*/, updateVideoSummary(url)];
                case 1:
                    _a.sent();
                    router.push('/summary');
                    setButtonLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    console.log("videoSummary===>", videoSummary);
    var handleSentimentAnalysis = function () { return __awaiter(_this, void 0, void 0, function () {
        var positive_comments_2, neutral_comments_2, negative_comments_2, unknown_comments_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!videoSummary) return [3 /*break*/, 4];
                    if (!sentimentSummary) return [3 /*break*/, 1];
                    positive_comments_2 = sentimentSummary.positive_comments, neutral_comments_2 = sentimentSummary.neutral_comments, negative_comments_2 = sentimentSummary.negative_comments, unknown_comments_3 = sentimentSummary.unknown_comments;
                    setChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [
                                positive_comments_2,
                                neutral_comments_2,
                                negative_comments_2,
                                unknown_comments_3,
                            ] })); }) })); });
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, updateSentimentChartData()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fetchAllSentimentAnalysisData()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleCommentClassifications = function () { return __awaiter(_this, void 0, void 0, function () {
        var Declarative_comments_2, Exclamative_comments_2, Imperative_comments_2, Interrogative_comments_2, unknown_comments_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!commentClassifications) return [3 /*break*/, 1];
                    Declarative_comments_2 = commentClassifications.Declarative_comments, Exclamative_comments_2 = commentClassifications.Exclamative_comments, Imperative_comments_2 = commentClassifications.Imperative_comments, Interrogative_comments_2 = commentClassifications.Interrogative_comments, unknown_comments_4 = commentClassifications.unknown_comments;
                    setChartData(function (prevState) { return (__assign(__assign({}, prevState), { datasets: prevState.datasets.map(function (dataset) { return (__assign(__assign({}, dataset), { data: [
                                Declarative_comments_2,
                                Exclamative_comments_2,
                                Imperative_comments_2,
                                Interrogative_comments_2,
                                unknown_comments_4,
                            ] })); }) })); });
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, updateCommentClassificationsChartData()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fetchAllCommentClassificationsData()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var rowData = urlcontext_1.useYoutubeContext().rowData;
    var _p = react_1.useState(false), isFileOpener = _p[0], setIsFileOpener = _p[1];
    console.log("isFileOpener", isFileOpener);
    //@ts-ignore
    var _q = react_1.useState(navItems[0].text), selectedContent = _q[0], setSelectedContent = _q[1];
    var handleItemClick = function (content) {
        setSelectedContent(content);
        // handleSentimentAnalysis();
    };
    var additionalProps = {
        handleOnChange: handleOnChange,
        clear: clear,
        isButtonLoading: isButtonLoading,
        handleSubmit: handleSubmit,
        videoSummary: videoSummary,
        chartData: chartData,
        sentimentComments: sentimentComments,
        handleSentimentAnalysis: handleSentimentAnalysis,
        classificationChartData: classificationChartData,
        classificationComments: classificationComments,
        loadingCommentClassifications: loadingCommentClassifications,
        loadingSentimentAnalysis: loadingSentimentAnalysis,
        loadingVideoSummary: loadingVideoSummary,
        handleCommentClassifications: handleCommentClassifications,
        rowData: rowData,
        setIsFileOpener: setIsFileOpener,
        isFileOpener: isFileOpener
    };
    return (react_1["default"].createElement("div", { className: ISMS_module_scss_1["default"].main },
        react_1["default"].createElement(SideNav_1["default"], { navItems: navItems, selectedContent: selectedContent, onItemSelect: handleItemClick, videoSummary: videoSummary, handleSentimentAnalysis: handleSentimentAnalysis, handleCommentClassifications: handleCommentClassifications, loadingSentimentAnalysis: loadingSentimentAnalysis, loadingCommentClassifications: loadingCommentClassifications, loadingVideoSummary: loadingVideoSummary }),
        react_1["default"].createElement(nav_1["default"], { navItems: navItems, selectedContent: selectedContent, onItemSelect: handleItemClick, videoSummary: videoSummary, handleSentimentAnalysis: handleSentimentAnalysis, handleCommentClassifications: handleCommentClassifications }),
        react_1["default"].createElement("div", { className: ISMS_module_scss_1["default"].rightSide },
            react_1["default"].createElement(Component, __assign({}, pageProps, additionalProps))),
        isFileOpener && (react_1["default"].createElement(file_1["default"], { videoSummary: videoSummary, IsOpen: isFileOpener, setIsOpen: setIsFileOpener }))));
}
exports["default"] = ISMS;
