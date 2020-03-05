// 41e632e4cd548258a7be779a21b09480


$(document).ready(function () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=5780993&appid=41e632e4cd548258a7be779a21b09480&units=imperial')
        //     fetch('http://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1')
        .then(response => {
            response.json().then(jsonObject => {
                console.log(jsonObject);
                console.log(jsonObject.list[0].main.temp);
                console.log()
                let date;

                let forecasts = [];
                     for (let i = 0; i < 40; i++) {
                         let forecast = new Forecast(jsonObject, i);
                         if (i < 1) {
                             date = new Date(forecast.getDate()*1000);
                             forecasts.push(forecast)
                             console.log(forecast)
                         }
                         let newDate = new Date(forecast.getDate()*1000);
                         if (newDate.getDate() !== date.getDate()) {
                             date = newDate;
                             forecasts.push(forecast);
                             console.log(forecast);
                         }


                     }
                     for (let i = 0; i < forecasts.length; i++) {
                         let d = new Date(forecasts[i].getDate() * 1000).toDateString();
                         let icon = "http://openweathermap.org/img/wn/" + forecasts[i].icon + "@2x.png";
                         console.log(icon)
                         $("#box" + i).html( d  + "<br>" + forecasts[i].getTemperature() + "<br>" +  forecasts[i].getDescription() + `<br>` + "<div id='sex" + i + "'></div>");
                         document.getElementById("sex" + i).innerHTML = "<img alt='weather' src='" + icon + "'>";

                     }

                 });
            });
});
class Forecast {
    constructor(json, day) {
        this.temp = json.list[day].main.temp;
        this.weatherCode = json.list[day].weatherCode;
        this.date = json.list[day].dt;
        this.description = json.list[day].weather[0].description;
        this.icon = json.list[day].weather[0].icon;
    }

    getTemperature() {
        return this.temp;
    }

    getWeatherCode() {
        return this.weatherCode;
    }
    getDate() {
        return this.date;
    }
    getDescription() {
        return this.description;
    }
}