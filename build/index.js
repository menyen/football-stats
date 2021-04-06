"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./composition/CsvFileReader");
var MatchReader_1 = require("./composition/MatchReader");
// import { CsvFileReader } from './inheritance/CsvFileReader';
// import { MatchReader } from './inheritance/MatchReader';
var MatchOutcome_1 = require("./MatchOutcome");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
/*
 * In case we switch back to using inheritance instead of composition
 * we just need to uncomment line below and comment the matchReader lines
 */
// reader.read();
var matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
var manUnitedWins = matchReader.matches.filter(function (row) {
    return (row[1] === 'Man United' && row[5] === MatchOutcome_1.MatchOutcome.HomeWin) ||
        (row[2] === 'Man United' && row[5] === MatchOutcome_1.MatchOutcome.AwayWin);
}).length;
console.log("Manchester United has won " + manUnitedWins + " games");
