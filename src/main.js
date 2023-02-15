
import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./service/weather-config.js";
import { DataFormForInput } from "./ui/InputDataForm.js";
import { Table } from "./ui/tables.js";

const schema =[
{columnName: `Date`, fieldName: `date`},
{columnName: `Hour`, fieldName: `hour`},
{columnName: `Temperature`, fieldName: `temperature`},
];

const dataForm = new DataFormForInput(".input_city", ".input_days",".input_hours",".input_buttons");
const dateProcessor = new DataProcessor(weatherConfig.url);
const buttonSubmit = document.querySelector(".submit");
const tanbleWeather = new Table("table","Weather for a given period",schema)

buttonSubmit.addEventListener("click",async()=>
{const dataFromClient = dataForm.getDataFromFrom();
const dataFromServer= await displayTemperature(dataFromClient);
tanbleWeather.addRow(dataFromServer)
});

async function displayTemperature(dataFromClient)
{
    const dataFromServer = await dateProcessor.createWeatherObject(dataFromClient.city,dataFromClient.startDay,
        dataFromClient.finishDay, dataFromClient.fromHour, dataFromClient.toHour);
        return dataFromServer;
}






