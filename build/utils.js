"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
var dateStringtoDate = function (dateString) {
    var dateElements = dateString
        .split('/')
        .map(function (element) { return parseInt(element); });
    return new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);
};
exports.dateStringtoDate = dateStringtoDate;
