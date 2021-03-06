import { MatchOutcome } from '../MatchOutcome';
import { dateStringtoDate } from '../utils';

interface DataReader {
  data: string[][];
  read(): void;
}

type MatchData = [Date, string, string, number, number, MatchOutcome, string];

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchOutcome,
        row[6],
      ]
    );
  }
}
