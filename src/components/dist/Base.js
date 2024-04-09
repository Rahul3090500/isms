"use strict";
exports.__esModule = true;
exports.Base = void 0;
var Meta_1 = require("../layout/Meta");
var AppConfig_1 = require("../utils/AppConfig");
// import { Banner } from '../templates/Banner';
// import { Footer } from '../templates/Footer';
// import { Hero } from '../templates/Hero';
// import { Sponsors } from '../templates/Sponsors';
// import { VerticalFeatures } from '../templates/VerticalFeatures';
// import {Input} from "@nextui-org/react";
// import YTComponent from './ISMS';
var ISMS_1 = require("./ISMS");
var Base = function (_a) {
    var pageProps = _a.pageProps, Component = _a.Component;
    return (React.createElement("div", { className: "text-gray-600 antialiased" },
        React.createElement(Meta_1.Meta, { title: AppConfig_1.AppConfig.title, description: AppConfig_1.AppConfig.description }),
        React.createElement("div", { className: "flex w-full flex-col" },
            React.createElement(ISMS_1["default"], { pageProps: pageProps, Component: Component }))));
};
exports.Base = Base;
