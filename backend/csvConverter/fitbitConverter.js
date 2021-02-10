const csvFilePath = "../csv/csvFitbit.csv";
const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */

    // var json = JSON.stringify(jsonObj);

    // fs.writeFile("myjsonfile.json", json, "utf8", callback);
  });
