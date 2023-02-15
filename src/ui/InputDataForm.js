import { DataProcessor } from "../service/DataProcessor.js";
import { weatherConfig } from "../service/weather-config.js";
const maxDay = 16;
const dateProcessor = new DataProcessor(weatherConfig.url)
export class DataFormForInput
{
    parentElementforinputCity;
    selectOfCity;
    parentElementForInputHour;
    selectFromHours;
    selectToHours;
    parentElementforinputDayandFinishday;
    parentElementForInputButton;
    dateToElement;
    dateFromElement;

   constructor (parentClassforInputCity, parentClassforInputStartDayandFinishday,
    parentClassforInputforHour, parentClassforcreateButtons) 
   {
    this.createInputCity(parentClassforInputCity);
    this.creatLinksForSelectCity()
    this.createInputStartDayandFinishday(parentClassforInputStartDayandFinishday);
    this.setMinMaxDates(maxDay)
    this.createInputforHour(parentClassforInputforHour);
    this.creatLinksForSelectHour()
    this.createButtons(parentClassforcreateButtons);
   }

   createInputCity(parentClassforInputCity)

    {
        this.parentElementforinputCity = document.querySelector(parentClassforInputCity);
        this.parentElementforinputCity.innerHTML=`
        <div class="form-select-city"><label>Select city</label><select name="city" id="select-city" class="select-city"><option value="uuuu"></option></select></div>`;
    }

    creatLinksForSelectCity()
    {
        this.selectOfCity = document.getElementById("select-city");
        this.selectOfCity.innerHTML = Object.keys(weatherConfig.cities).map(city =>
        `<option value="${city}">${city}</option>`);
    }

    createInputforHour(parentClassforInputforHour)
    {
        this.parentElementForInputHour = document.querySelector(parentClassforInputforHour);
        this.parentElementForInputHour.innerHTML=`
        <div class="form-select-from-hour"><label>Select from hour</label><select name="from_hour" id="select-from-hour" class="select-from-hour"><option value="uuuu"></option></select></div>
        <div class="form-select-to-hour"><label>Select to hour</label><select name="to_hour" id="select-to-hour" class="select-to-hour"><option value="uuuu"></option></select></div>`;
    }
    creatLinksForSelectHour()
    {
        this.selectFromHours = document.getElementById("select-from-hour");
        this.selectFromHours.innerHTML = weatherConfig.hour.map((hours) =>
        `<option value="${hours}">${hours}</option>`);
        this.selectToHours = document.getElementById("select-to-hour");
        this.selectToHours.innerHTML = weatherConfig.hour.map((hours) =>
        `<option value="${hours}">${hours}</option>`);

    }
      createInputStartDayandFinishday(parentClassforInputStartDayandFinishday)
      {
        this.parentElementforinputDayandFinishday = document.querySelector(parentClassforInputStartDayandFinishday);
        this.parentElementforinputDayandFinishday.innerHTML = `<form_id="data-form-id">
        <div>Select start day</div><input type="date" id="date-from-id">
        <div>Select finish day</div><input type="date" id="date-to-id"></form>`;
        
      }
      setMinMaxDates(maxDay)
      {
          this.dateFromElement = document.getElementById("date-from-id");
          this.dateToElement = document.getElementById("date-to-id");
          const current = new Date();
          const maxDayOfMonth = current.getDate()+maxDay;
          const maxDate = new Date()
          maxDate.setDate(maxDayOfMonth);
          const minDateStr = current.toISOString().split("T")[0];
          const maxDateStr = maxDate.toISOString().split("T")[0];
          this.dateFromElement.min = minDateStr;
          this.dateFromElement.max = maxDateStr;
          this.dateToElement.min = minDateStr;
          this.dateToElement.max = maxDateStr;
      }
        createButtons(parentClassforcreateButtons)

    {   
        this.parentElementForInputButton = document.querySelector(parentClassforcreateButtons);
        this.parentElementForInputButton.innerHTML=
        `<button class = "submit" type="submit">Submit</button>
        <button class = "reset" type="reset"> Reset </button>`;  
    }
    addFormHandler() 
    {
      
       
 

    }
        getDataFromFrom() {
        const weatherData = {};
        weatherData.city = this.selectOfCity.value;
        weatherData.startDay = this.dateFromElement.value;
        weatherData.finishDay = this.dateToElement.value;
        weatherData.fromHour = +this.selectFromHours.value;
        weatherData.toHour = +this.selectToHours.value;

        return weatherData;
    }

  
        
}
