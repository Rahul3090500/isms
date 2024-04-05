"use strict";
exports.__esModule = true;
exports.useYoutubeContext = exports.YoutubeContextProvider = void 0;
var react_1 = require("react");
var YoutubeContext = react_1.createContext(undefined);
exports.YoutubeContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(function () {
        // Attempt to get youtubeUrl from localStorage, or default to an empty string
        if (typeof window !== 'undefined') {
            return localStorage.getItem('youtubeUrl') || '';
        }
        return '';
    }), youtubeUrl = _b[0], setYoutubeUrl = _b[1];
    var _c = react_1.useState(''), dataFileName = _c[0], setDataFileName = _c[1];
    var _d = react_1.useState(''), tokenFileName = _d[0], setTokenFileName = _d[1];
    var _e = react_1.useState([]), rowData = _e[0], setRowData = _e[1];
    var _f = react_1.useState({}), Credentails = _f[0], setCredentails = _f[1];
    // Effect to update localStorage whenever youtubeUrl changes
    react_1.useEffect(function () {
        if (typeof window !== 'undefined') {
            localStorage.setItem('youtubeUrl', youtubeUrl);
        }
    }, [youtubeUrl]);
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
            setCredentails: setCredentails
        } }, children));
};
exports.useYoutubeContext = function () {
    var context = react_1.useContext(YoutubeContext);
    if (!context) {
        throw new Error('useYoutubeContext must be used within a YoutubeContextProvider');
    }
    return context;
};
