class Deferred 
{
    constructor() {
      this.callbacks = [];
      this.resolvedValue = undefined;
    }
  
    then(callback) {
      this.callbacks.push(callback);
      return this;
    }
  
    resolve(value) {
      this.resolvedValue = value;
      let result = this.resolvedValue;
      for (let i = 0; i < this.callbacks.length; i++) {
        result = this.callbacks[i](result);
      }
    }
  }

const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res);
return "c"; });
d.resolve('hello');