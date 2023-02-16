
import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./service/weather-config.js";
import { reset } from "./ui/buttons-function.js";
import { DataFormForInput } from "./ui/InputDataForm.js";
import { Table } from "./ui/tables.js";

const schema =[
{columnName: `City`, fieldName: `city`},
{columnName: `Date`, fieldName: `date`},
{columnName: `Hour`, fieldName: `hour`},
{columnName: `Temperature`, fieldName: `temperature`},
];

const tanbleWeather = new Table("table","Weather for a given period",schema)
const dataForm = new DataFormForInput(".input_city", ".input_days",".input_hours",".input_buttons");
const dateProcessor = new DataProcessor(weatherConfig.url);

const buttonSubmit = document.querySelector(".submit");
const buttonReset = document.querySelector(".reset");
const showTable = document.getElementById("table");


buttonSubmit.addEventListener("click",async()=>
{
const dataFromClient = dataForm.getDataForForm();
const dataFromServer= await displayTemperature(dataFromClient);
dataFromServer.forEach(row =>tanbleWeather.addRow(row))
showTable.style.display = 'block';
});

async function displayTemperature(dataFromClient)
{
    const dataFromServer = await dateProcessor.createWeatherObject(dataFromClient.city,dataFromClient.startDay,
    dataFromClient.finishDay, dataFromClient.fromHour, dataFromClient.toHour);
    return dataFromServer;
}

buttonReset.addEventListener("click",()=>
{
reset();
})





