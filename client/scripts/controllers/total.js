pizzaApp.controller('TotalController', ['PizzaService', function(PizzaService){
  var total = this;
  total.confirmedPizzas = PizzaService.confirmedPizzas.pizzaList;
  total.grandTotal = PizzaService.grandTotal;
}]);
