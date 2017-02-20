// CUSTOM DIRECTIVES
weatherApp.directive('weatherPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherPanel.htm',
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
});
