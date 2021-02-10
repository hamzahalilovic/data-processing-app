

let csvToJson = require('convert-csv-to-json');

let json = csvToJson.getJsonFromCsv("myInputFile.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}

/**
 timestamp* {
  
  "Calories Burned": 2128,
  "Steps": 9693,
  "Distance": 4.14,
  "Minutes Sedentary": 634,
  "Minutes Lightly Active": 261,
  "Minutes Fairly Active": 3,
  "Minutes Very Active": 20,
  "Activity Calories": 984,
  "Minutes Asleep": 403,
  "Minutes Awake": 66,
  "Number of Awakenings": 23,
  "Time in Bed": 469,
  "Minutes REM Sleep": 55,
  "Minutes Light Sleep": 303,
  "Minutes Deep Sleep": 45
}
timestamp:{
    ...
}
 */