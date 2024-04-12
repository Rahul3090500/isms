"use strict";
exports.__esModule = true;
exports.useYoutubeContext = exports.YoutubeContextProvider = void 0;
var react_1 = require("react");
var YoutubeContext = react_1.createContext(undefined);
// Helper function to get local storage item safely
var safeGetLocalStorage = function (key) {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key) || '';
    }
    return '';
};
exports.YoutubeContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(function () { return safeGetLocalStorage('youtubeUrl'); }), youtubeUrl = _b[0], setYoutubeUrl = _b[1];
    var _c = react_1.useState(function () { return safeGetLocalStorage('dataFileName'); }), dataFileName = _c[0], setDataFileName = _c[1];
    var _d = react_1.useState(function () { return safeGetLocalStorage('uploadedFileName'); }), uploadedFileName = _d[0], setUploadedFileName = _d[1];
    var _e = react_1.useState(''), tokenFileName = _e[0], setTokenFileName = _e[1];
    var _f = react_1.useState([]), rowData = _f[0], setRowData = _f[1];
    var _g = react_1.useState(false), responseRowData = _g[0], setResponseRowData = _g[1];
    var _h = react_1.useState({}), Credentails = _h[0], setCredentails = _h[1];
    react_1.useEffect(function () {
        var handleStorage = function (key, value) {
            if (typeof window !== 'undefined') {
                if (value === '') {
                    localStorage.removeItem(key);
                }
                else {
                    localStorage.setItem(key, value);
                }
            }
        };
        handleStorage('youtubeUrl', youtubeUrl);
        handleStorage('dataFileName', dataFileName);
        handleStorage('uploadedFileName', uploadedFileName);
    }, [youtubeUrl, dataFileName, uploadedFileName]);
    return (react_1["default"].createElement(YoutubeContext.Provider, { value: {
            youtubeUrl: youtubeUrl,
            setYoutubeUrl: setYoutubeUrl,
            dataFileName: dataFileName,
            setDataFileName: setDataFileName,
            tokenFileName: tokenFileName,
            setTokenFileName: setTokenFileName,
            rowData: rowData,
            setRowData: setRowData,
            Credentails: Credentails,
            setCredentails: setCredentails,
            responseRowData: responseRowData,
            setResponseRowData: setResponseRowData,
            uploadedFileName: uploadedFileName,
            setUploadedFileName: setUploadedFileName
        } }, children));
};
exports.useYoutubeContext = function () {
    var context = react_1.useContext(YoutubeContext);
    if (!context) {
        throw new Error('useYoutubeContext must be used within a YoutubeContextProvider');
    }
    return context;
};
