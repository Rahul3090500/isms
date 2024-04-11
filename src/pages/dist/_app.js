"use strict";
exports.__esModule = true;
// import ISMS from "@/components/ISMS";
require("../styles/global.css");
var urlcontext_1 = require("@/hooks/urlcontext");
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var Base_1 = require("@/components/Base");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_2["default"].createElement(react_1.NextUIProvider, null,
        react_2["default"].createElement(urlcontext_1.YoutubeContextProvider, null,
            react_2["default"].createElement(Base_1.Base, { pageProps: pageProps, Component: Component }),
            react_2["default"].createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "light" }))));
}
exports["default"] = MyApp;
