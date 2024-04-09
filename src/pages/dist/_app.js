"use strict";
exports.__esModule = true;
// import ISMS from "@/components/ISMS";
require("../styles/global.css");
var urlcontext_1 = require("@/hooks/urlcontext");
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
var Base_1 = require("@/components/Base");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_2["default"].createElement(react_1.NextUIProvider, null,
        react_2["default"].createElement(urlcontext_1.YoutubeContextProvider, null,
            react_2["default"].createElement(Base_1.Base, { pageProps: pageProps, Component: Component }))));
}
exports["default"] = MyApp;
