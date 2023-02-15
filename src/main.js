import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./service/weather-config.js";
import { DataFormForInput } from "./ui/InputDataForm.js";
import { Table } from "./ui/tables.js";

const dataForm = new DataFormForInput(".input_city", ".input_days",".input_hours",".input_buttons");

const schema =
[{columnName: `City`, fieldName: ""},
{columnName: `Date`, fieldName: `name`},
{columnName: `Hour`, fieldName: `name`},
{columnName: `Temperature`, fieldName: `birthYear`},
];

const tanbleWeather = new Table("table","Weather for a given period",schema)
const dateFromClients = dataForm.addFormHandler();
console.log(dateFromClients);
const element = dateFromClients[1];
console.log(element);

const dateProcessor = new DataProcessor(weatherConfig.url)
async function displayTemperature()
{
    const dataFromServer = await dateProcessor.createWeatherObject(dateFromClients[0],dateFromClients[1],dateFromClients[2],
        dateFromClients[3], dateFromClients[4])
        return dataFromServer;
}
const finishResultFromServer = displayTemperature();

