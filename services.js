/**
 * Created by Niyas on 1/15/2017.
 */
// CUSTOM SERVICE
// Here Custom service used to share data between the pages
weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

// Encapsualting the services for reusability and taking out from controller.
weatherApp.service('weatherService', ['$resource', function($resource){
    this.getWeather = function(city, days, APIKEY){

        //$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {callback: "JSON_CALLBACK"}, {get: {method:"JSONP"}});
        //$scope.temperatureResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days, appid:$scope.APIKEY});

        // The above 2 lines used in the controller modified as below
        var weatherAPI1 = $resource("http://api.openweathermap.org/data/2.5/forecast", {callback: "JSON_CALLBACK"}, {get: {method:"JSONP"}});
        return weatherAPI1.get({q: city, cnt:days, appid:APIKEY});
    };

}]);