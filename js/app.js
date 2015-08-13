/*
    Inițializarea aplicației
*/

var app = angular.module('app', ['ui.sortable', 'ui.bootstrap', 'ngRoute']).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.filter('array', function() {
    return function(items) {
        var filtered = [];
        angular.forEach(items, function(item) {
        filtered.push(item);
        });
        return filtered;
    };
});

app.filter('range', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i = 0; i < range; i++)
      val.push(i);
    return val;
  };
});
