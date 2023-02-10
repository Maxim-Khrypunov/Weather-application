import { DataProcessor } from "./service/DataProcessor.js";

const url = "https://api.open-meteo.com/v1/gfs?hourly=temperature_2m";
const dataProcessor = new DataProcessor(url);
async function displayTemperature()
{
    const data = dataProcessor.getData(29.5577, 34.9519);
    console.log(data.hourly.temperature_2m);
}
displayTemperature();