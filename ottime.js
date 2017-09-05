


//Ottawa date and time

var otTime = getDateByOffset(-6);
var elem = document.getElementById("otTime");
elem.innerHTML = otTime;

// forecast
var elem = document.getElementById("otForecast");
displayForecast(elem, otTime);
/*
Create a new Date object for each of the 5 forecasts, then extract the day of the 
week and display it.  You can change the number of forecasts to whatever suits your needs.
*/
function displayForecast(divElem, currentDate)
{
   for (var i = 1; i <= 6; i++)
   {
      var forecast = getDateForForecast(currentDate, i);
      dayOfWeek = forecast.getDay();
      divElem.innerHTML += weekdays[dayOfWeek] + ":" + getLowTemp() + getHighTemp() + "<br>";
   }
}

/*
Return a low temperature using the Math.random method.
*/

function getLowTemp()
{
   return "<span style='text-align:center'>Low 6&deg;C </span>";
}

/*
Return a high temperature using the Math.random method.
*/
function getHighTemp()
{
   return "<span style='text-align:center'>High 11&deg;C </span>";
}
