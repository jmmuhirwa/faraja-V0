


//Ottawa date and time

var otTime = getDateByOffset(-5);
var elem = document.getElementById("otTime");
elem.innerHTML = otTime;

// forecast
var elem = document.getElementById("otForecast");
displayForecast(elem, otTime);


function displayForecast(divElem, currentDate)
{
   for (var i = 1; i <= 1; i++)
   {
      var forecast = getDateForForecast(currentDate, i);
      dayOfWeek = forecast.getDay();
      divElem.innerHTML += weekdays[dayOfWeek] + " : " + getLowTemp() + getHighTemp() + "<br>";
   }
}

/*
Return a low temperature using the Math.random method.
*/

function getLowTemp()
{
   return "<span style='font-size:1.5em; text-align:center'>Low 2&deg;C </span>" +"/"+"";
}

/*
Return a high temperature using the Math.random method.
*/
function getHighTemp()
{
   return "<span style='font-size:1.5em; text-align:center'>High 7&deg;C </span>";

}
