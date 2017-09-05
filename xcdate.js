// create an array containing the weekdays 
var weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

/*
This will return a Date object with the city's current time, based on that city's 
"offset" from the UTC/GMT. The date has not been formatted.
*/
function getDateByOffset(offset)
{
   var date = new Date();

   date.setTime(date.getTime() +
         date.getTimezoneOffset()*60*1000 + offset*60*60*1000);

   return date;
}

/*
This will return a new Date object for a single day's forecast. The date returned
will be a date which is the number of the "days" parameter following the 
"currentDate" parameter. For example, if "currentDate" is Sunday, November 16, 2014 and 
"days" equals 3, then the date returned will be Wednesday, November 19, 2014.
Note that by creating a new Date object, the number of days in the month (28, 30 or 31)
and the number of days in the year (366 for a leap year) will have been taken into account.
*/
function getDateForForecast(currentDate, days) 
{
   return new Date(currentDate.getTime() + days*24*60*60*1000);
}


