/**
 * Created by Niyas on 1/15/2017.
 */
// CUSTOM DIRECTIVE
// Write custom directive for getting the Weather results which can be used in many pages
weatherApp.directive('weatherReport',function(){
    return{
        // Restrict the directive to work fo HTML only - 'AECM'
        restrict: 'E',
        //template: '<p>TEST MESSAGE</p>',
        templateUrl: 'directives/weather.html',
        replace: false, // strange: Throwing error when used 'true' - Error: Template for directive '{0}' must have exactly one root element. {1}
        scope: {
            // Need to pass the weather Object
            weatherDay: "=",

            // Need to pass the functions

            convertToStandardFaren: "&",
            convertToStandardDate: "&",

            // Need to pass the string - 2 way binding
            dateFormat: "@"
        }
    }
});