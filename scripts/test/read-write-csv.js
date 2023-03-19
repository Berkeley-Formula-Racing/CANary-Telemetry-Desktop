const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'rpm', title: 'RPM' },
    { id: 'voltage', title: 'Voltage' },
  ]
});

const data = [
  { rpm: 2000,
    voltage: 12.27 },
  { rpm: 3000,
    voltage: 11.88 },
];

csvWriter.writeRecords(data)
  .then(() => console.log('Data written to file'));

const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('output.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
