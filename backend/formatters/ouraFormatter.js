const combineData = (ouraData) => {
  const keys = {
    totalSteps: {
      oura: ouraData["Steps"],
    },
    totalCalories: {
      oura: ouraData["Total Burn"],
    },
    totalDistance: {
      oura: ouraData["Daily Movement"],
    },
    inactiveMinutes: {
      oura: ouraData["Inactive Time"],
    },
    lowActiveMinutes: {
      oura: ouraData["Low Activity Time"],
    },
    mediumActiveMinutes: {
      oura: ouraData["Medium Activity Time"],
    },
    highActiveMinutes: {
      oura: ouraData["High Activity Time"],
    },
    activeCalories: {
      oura: ouraData["Activity Burn"],
    },
    totalSleepTime: {
      oura: ouraData["Total Sleep Time"],
    },
    totalAwakeTime: {
      oura: ouraData["Awake Time"],
    },
    restlessSleep: {
      oura: ouraData["Restless Sleep"],
    },
    timeSpentInBed: {
      oura: ouraData["Total Bedtime"],
    },
    REMSleepTime: {
      oura: ouraData["REM Sleep Time"],
    },
    lightSleepTime: {
      oura: ouraData["Light Sleep Time"],
    },
    deepSleepTime: {
      oura: ouraData["Deep Sleep Time"],
    },
  };
};
