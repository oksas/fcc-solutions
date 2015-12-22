/*
Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD
*/

function friendly(dates) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
    21: "st",
    22: "nd",
    23: "rd",
    31: "st"
  };

  var date1, date2;
  var month1Num = parseInt(dates[0].substr(5, 7), 10);
  var month2Num = parseInt(dates[1].substr(5, 7), 10);

  // could use String.split here instead of substr
  var year1 = dates[0].substr(0, 4);
  var month1 = months[month1Num - 1];
  var day1 = parseInt(dates[0].substr(8), 10);
  if (suffixes[day1]) {
    day1 += suffixes[day1];
  } else {
    day1 += "th";
  }

  var year2 = dates[1].substr(0, 4);
  var month2 = months[month2Num - 1];
  var day2 = parseInt(dates[1].substr(8), 10);
  if (suffixes[day2]) {
    day2 += suffixes[day2];
  } else {
    day2 += "th";
  }

  switch (true) {
    case (dates[0] === dates[1]):
      return [month1 + " " + day1 + ", " + year1];
    case (year1 === year2 && month1 === month2):
      date1 = month1 + " " + day1;
      date2 = day2;
      break;
    case (year1 === year2):
      date1 = month1 + " " + day1;
      date2 = month2 + " " + day2;
      break;
    case ((parseInt(year1, 10) + 1) == year2 && month1Num - month2Num >= 8):
      date1 = month1 + " " + day1;
      date2 = month2 + " " + day2;
      break;
    default:
      date1 = month1 + " " + day1 + ", " + year1;
      date2 = month2 + " " + day2 + ", " + year2;
  }

  return [date1, date2];
}

friendly(['2015-12-01', '2017-02-03']);
