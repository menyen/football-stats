import { CsvFileReader } from './CsvFileReader';
import { MatchOutcome } from '../MatchOutcome';
import { dateStringtoDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchOutcome, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringtoDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchOutcome,
      row[6],
    ];
  }
}
