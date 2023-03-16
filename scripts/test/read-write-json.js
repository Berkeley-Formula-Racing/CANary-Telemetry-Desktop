const fs = require("fs");

const data = {
  name: "John Doe",
  age: 30
};

fs.writeFile("data.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    console.log(fileData);
  });