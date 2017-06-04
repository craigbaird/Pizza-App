var pizzaApp = angular.module('pizzaApp', ['ngRoute'] );

pizzaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/order', {
    templateUrl : 'views/templates/order.html',
    controller : 'OrderController',
    controllerAs : 'order'
  })
  .when('/list', {
    templateUrl : 'views/templates/list.html',
    controller : 'ListController',
    controllerAs : 'list'
  })
  .when('/total', {
    templateUrl : 'views/templates/total.html',
    controller : 'TotalController',
    controllerAs : 'total'
  });
}]);
