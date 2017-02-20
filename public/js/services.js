// SERVICES
weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.getWeather = function(city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=fb42f9de5f36ab7934cec141d08fdede", {
      callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

    return weatherAPI.get({ q: city, cnt: days });
  }
}])
