// Expected Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

var convertMonth = function(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "";
  }
};

var getDaySuffix = function(day) {
  if (day === 1 || day === 21 || day === 31) {
    return "st";
  } else if (day === 2 || day === 22) {
    return "nd";
  } else if (day === 3 || day === 23) {
    return "rd";
  } else {
    return "th";
  }
}

var talkingCalendar = function(date) {
  // Your code here
  var components = date.split("/");

  var year = components[0];
  var month = parseInt(components[1], 10);
  var day = parseInt(components[2], 10);

  var monthString = convertMonth(month);
  var daySuffix = getDaySuffix(day);

  return monthString + " " + day + daySuffix + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
