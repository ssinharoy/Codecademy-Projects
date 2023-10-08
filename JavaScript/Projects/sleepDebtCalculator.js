const getSleepHours = day => {
    switch(day) {
    case 'Monday':
      return 8;
      break;
    case ('Tuesday'):
      return 7;
      break;
    case ('Wednesday'):
      return 10;
      break;
    case ('Thursday'):
      return 5;
      break;
    case ('Friday'):
      return 4;
      break;
    case ('Saturday'):
      return 3;
      break;
    case ('Sunday'):
      return 19;
      break;
  }
  }
  
  const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  //Check Output
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours(8));
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours){
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours){
      sleepDifference = actualSleepHours - idealSleepHours;
      console.log("You got more sleep than needed by " + sleepDifference + " hours!");
    } else {
      sleepDifference = idealSleepHours - actualSleepHours;
      console.log("You need to get " + sleepDifference + " hours of additional rest!");
    }
  }
  
  calculateSleepDebt();