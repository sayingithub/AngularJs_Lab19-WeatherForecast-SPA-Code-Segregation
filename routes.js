/**
 * Created by Niyas on 1/15/2017.
 */
// ROUTES
weatherApp.config(function($routeProvider){

    $routeProvider

        .when('/',{
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

        .when('/forecast/:days',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
    //http://localhost:63342/Lab18-WeatherForecast-SPA/index.html#/forecast/4
    //http://localhost:63342/Lab18-WeatherForecast-SPA/index.html#/forecast/7
});
