export class DataProcessor
{
    #url;
constructor(url)
{
this.#url = url;
}
async getData(latitude,longitude)
{
const responseFromServes =
await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
return responseFromServes.json;
}
getTemperatureData(city,startDate,endDate,hourFrom,hourTo)
{
    //TODO
}
}