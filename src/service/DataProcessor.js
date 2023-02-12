import { weatherConfig } from "./weather-config.js";

export class DataProcessor {
    #url;
    constructor(url) {
        this.#url = url;
    }
    async getData(latitude, longitude) {
        const responseFromServes =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServes.json();
    }
    async getTemperatureData(city, startDate, endDate) {
        const latitudeOfCity = weatherConfig.cities[city].latitude;
        const longitudeofCity = weatherConfig.cities[city].longitude;
        const responseFromServes =
            await fetch(`${this.#url}&latitude=${latitudeOfCity}&longitude=${longitudeofCity}&start_date=${startDate}
&end_date=${endDate}`);
        return responseFromServes.json();
    }
    async createWeatherObject(city, startDate, endDate, hourFrom, hourTo) {
        const control = this.dataСhecking(startDate, endDate, hourFrom, hourTo);
        if (control)
        {const dataFromServer = await this.getTemperatureData(city, startDate, endDate);
        const temperatures = dataFromServer.hourly.temperature_2m;
        const times = dataFromServer.hourly.time;
        const weatherObject = [];
        times.forEach((element, index) => {
            const time = new Date(element).getHours();
            if (time >= hourFrom && time <= hourTo) {
                const dateForArray = element.split("T")[0];
                weatherObject.push({ date: dateForArray, hour: time, temperature: temperatures[index] })
            }
        });
        return console.log(weatherObject);}
    }
        dataСhecking(startDate,endDate,hourFrom,hourTo) {
        const  currentDate = new Date();
        const controlResult = true;
        if (hourFrom < 0 || hourFrom > 23) {return console.log("Error.Start time value can be set from 0 to 23"); controlResult = false}
        else if (hourTo < 0 || hourTo > 23) {return  console.log("Error. End time value can be set from 0 to 23"); controlResult = false}
        else if (currentDate > startDate) { return console.log("The start date that you specified is less than the current date"); controlResult = false}
        else if (this.maximumDurationOfForecast()<endDate)  {return console.log("Maximum weather forecast duration 16 days");controlResult = false}
        return controlResult;
    }
    maximumDurationOfForecast() 
    {
        const controlStartDate = new Date();
        const maximumDuration = controlStartDate.setDate(controlStartDate.getDate() + 16);
        return maximumDuration;
    }
}

