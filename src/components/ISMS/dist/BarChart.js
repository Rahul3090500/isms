"use strict";
exports.__esModule = true;
var react_1 = require("react");
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.BarElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend);
var BarChart = function (_a) {
    var chartData = _a.chartData;
    // Function to determine font size based on screen width
    var getResponsiveFontSize = function () {
        var screenWidth = window.innerWidth;
        if (screenWidth < 600) { // Mobile
            return 14;
        }
        else if (screenWidth < 900) { // Tablet
            return 18;
        }
        else { // Desktop and larger devices
            return 24;
        }
    };
    var options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: false
            },
            title: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: true,
                    font: {
                        size: getResponsiveFontSize()
                    }
                }
            }
        }
    };
    return react_1["default"].createElement(react_chartjs_2_1.Bar, { options: options, data: chartData });
};
exports["default"] = BarChart;
