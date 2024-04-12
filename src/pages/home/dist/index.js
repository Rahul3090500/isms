"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var home_module_scss_1 = require("./home.module.scss");
var Home = function () {
    return (React.createElement("div", { className: home_module_scss_1["default"].home },
        React.createElement("div", { className: home_module_scss_1["default"].header }, "Intelligent Social Media Sense"),
        React.createElement("div", { className: home_module_scss_1["default"].sub_header }, "Optimize Your Marketing!"),
        React.createElement("div", { className: home_module_scss_1["default"].dec_header }, "Insights | Sentiments | Responses"),
        React.createElement("div", { className: home_module_scss_1["default"].dec },
            "Caze iSMS (intelligent Social Media Sense provides comprehensive insights to your social media channels. It does an Al (Artificial Intelligence) based channel and comments analysis to provide sentiments comments classifications and more. It has a capability of identifying queries from your customers and our Al engine provide suitable answers automatically. You can review, customize and do bulk reply to those queries!",
            React.createElement("br", null),
            " ",
            React.createElement("br", null),
            "Caze iSMS works as a companion to manage and optimize your customer engagements. Currently it supports youtube based analysis. We are adding more social media platforms along with intuitive features to empower your digital marketing!",
            React.createElement("br", null),
            " ",
            React.createElement("br", null),
            " Add your youtube channel links and information documents under \"",
            React.createElement(link_1["default"], { style: { fontWeight: "bold", textDecoration: "underline" }, href: "/settings" }, "Settings"),
            "\" to start your journey with iSMS!")));
};
exports["default"] = Home;
