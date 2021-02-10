export const combineData = (fitbitData) => {
  const keys = {
    totalSteps: {
      fitbit: fitbitData["Steps"],
    },
    totalCalories: {
      fitbit: fitbitData["Calories Burned"],
    },
    totalDistance: {
      fitbit: fitbitData["Distance"],
    },
    inactiveMinutes: {
      fitbit: fitbitData["Minutes Sedentary"],
    },
    lowActiveMinutes: { 
      fitbit: fitbitData["Minutes Lightly Active"],
    },
    mediumActiveMinutes: {
      fitbit: fitbitData["Minutes Fairly Active"],
    },
    highActiveMinutes: {
      fitbit: fitbitData["Minutes Very Active"],
    },
    activeCalories: {
      fitbit: fitbitData["Activity Calories"],
    },
    totalSleepTime: {
      fitbit: fitbitData["Minutes Asleep"],
    },
    totalAwakeTime: {
      fitbit: fitbitData["Minutes Awake"],
    },
    restlessSleep: {
      fitbit: fitbitData["Number of Awakenings"],
    },
    timeSpentInBed: {
      fitbit: fitbitData["Time in Bed"],
    },
    REMSleepTime: {
      fitbit: fitbitData["Minutes REM Sleep"],
    },
    lightSleepTime: {
      fitbit: fitbitData["Minutes Light Sleep"],
    },
    deepSleepTime: {
      fitbit: fitbitData["Minutes Deep Sleep"],
    },
  };
};
