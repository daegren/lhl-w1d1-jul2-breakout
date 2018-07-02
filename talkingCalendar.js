// Expected Output:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

var talkingCalendar = function(date) {
  // Your code here
  var components = date.split('/');

  var year = components[0];
  var month = components[1];
  var day = components[2];

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));