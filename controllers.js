/**
 * Created by Niyas on 1/15/2017.
 */
// CONTROLLERS
weatherApp.controller('homeController',['$scope', '$location','cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;

    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });

    $scope.submit = function(){
      $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController',['$scope', '$resource','$routeParams','cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService){
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2'; // get the no. of days from the routeParam as query parameter and if no values passed, default it to 2 days.

    $scope.APIKEY = "9859a5d6386b7d482747ff0fea2059d7"; //  Registered and got from http://openweathermap.org


    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {callback: "JSON_CALLBACK"}, {get: {method:"JSONP"}});
    $scope.temperatureResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days, appid:$scope.APIKEY});

    // another way to doing it, by moving it to custom services and not using the controller
    // The above 2 lines which getting the data from API can encapsulated and put it under separate service for reusability. Another way of doing it.
    // Write new service called weatherService in services.js
    // Inject weatherService in the controller
    $scope.temperatureResult1 = weatherService.getWeather($scope.city, $scope.days, $scope.APIKEY); // another way to doing it, by moving it to custom services and not using the controller

    console.log("temperatureResult ["+$scope.temperatureResult+"]");
    console.log("temperatureResult1 ["+$scope.temperatureResult1+"]"); // another way to doing it, by moving it to custom services and not using the controller

    $scope.convertToFahrenheit = function(degreeInKelvin){
        console.log("degreeInKelvin ["+degreeInKelvin+"]");
        return Math.round((1.8 * (degreeInKelvin - 273)) + 32);
    }

    $scope.convertToDate = function(dateVal){
        console.log("dateVal ["+dateVal+"]");
        return new Date(dateVal * 1000);
    }
}]);