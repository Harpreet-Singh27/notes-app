const fs = require('fs');

const data = {
  title: 'This is title of my note',
  body: 'This is body of my Note',
};

const jsonData = JSON.stringify(data);

fs.writeFileSync('data.json', jsonData);

const res = JSON.parse(fs.readFileSync('data.json').toString());

console.log(res.title);
