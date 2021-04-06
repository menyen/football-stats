import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
// import { CsvFileReader } from './inheritance/CsvFileReader';
// import { MatchReader } from './inheritance/MatchReader';
import { MatchOutcome } from './MatchOutcome';

const reader = new CsvFileReader('football.csv');
/*
 * In case we switch back to using inheritance instead of composition
 * we just need to uncomment line below and comment the matchReader lines
 */
// reader.read();
const matchReader = new MatchReader(reader);
matchReader.load();

const manUnitedWins: number = matchReader.matches.filter(
  (row): boolean =>
    (row[1] === 'Man United' && row[5] === MatchOutcome.HomeWin) ||
    (row[2] === 'Man United' && row[5] === MatchOutcome.AwayWin)
).length;

console.log(`Manchester United has won ${manUnitedWins} games`);
