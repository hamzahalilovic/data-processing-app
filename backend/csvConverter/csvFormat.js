// require csvtojson module
const CSVToJSON = require("csvtojson");
const fs = require("fs");

// convert users.csv file to JSON array
CSVToJSON()
  .fromFile("../csv/csvFitbit.csv")
  .then((fitbitdata) => {
    noheader: true;
    // users is a JSON array
    // log the JSON array
    console.log(fitbitdata);
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });

let data = JSON.stringify(fitbitdata, null, 2);

fs.writeFile("student-3.json", data, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
