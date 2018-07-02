// Expected Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

var talkingCalendar = function(date) {
  // Your code here
  var components = date.split("/");

  var year = components[0];
  var month = parseInt(components[1], 10);
  var day = parseInt(components[2], 10);

  var monthString;

  switch (month) {
    case 1:
      monthString = "January";
      break;
    case 2:
      monthString = "February";
      break;
    case 3:
      monthString = "March";
      break;
    case 4:
      monthString = "April";
      break;
    case 5:
      monthString = "May";
      break;
    case 6:
      monthString = "June";
      break;
    case 7:
      monthString = "July";
      break;
    case 8:
      monthString = "August";
      break;
    case 9:
      monthString = "September";
      break;
    case 10:
      monthString = "October";
      break;
    case 11:
      monthString = "November";
      break;
    case 12:
      monthString = "December";
      break;
    default:
      break;
  }

  return monthString + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
