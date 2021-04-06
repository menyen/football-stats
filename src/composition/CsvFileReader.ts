import fs from 'fs';

export class CsvFileReader<T> {
  data: string[][] = [];

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string) => row.split(','));
  }
}
