class Deferred 
{
    constructor() 
    {
      this.callBackFunctions = [];
    }
  
    then(cb) 
    {
      this.callBackFunctions.push(cb);
    }
  
    resolve(value) 
    {
      let result = value;
      for(let i=0; i<this.callBackFunctions.length; i++)
      {
        result =  this.callBackFunctions[i](result);
      }
    }
  }

const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');