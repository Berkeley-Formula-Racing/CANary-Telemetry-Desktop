const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'age', title: 'Age' },
  ]
});

const data = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
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
