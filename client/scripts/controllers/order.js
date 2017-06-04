pizzaApp.controller('OrderController', [ '$location', 'PizzaService', function($location, PizzaService){
  console.log('in the order controller');
  var order = this;
  // order.orderObject = PizzaService.orderObject;

  var newPizza = {
    size: '',
    toppings: []
  };
  order.newPizza = newPizza;
  var toppingsArray = [
    {name : 'Pepperoni'},
    {name : 'Sausage'},
    {name : 'Bacon'},
    {name : 'Thick-Cut Bacon'},
    {name : 'Canadian Bacon'},
    {name : 'Ham'},
    {name : 'Tuna'},
    {name : 'Anchovies'},
    {name : 'Mutton Curry'},
    {name : 'BBQ Chicken'},
    {name : 'Bison Chuck'},
  ];
  // var toppingsArray = ['pepperoni', 'sausage', 'olives', 'mushrooms', 'pineapple'];
  order.toppingsArray = toppingsArray;
  order.addToppings = function(topping) {
    newPizza.toppings.push(topping.name);
    topping.disabled = true;
    // var index = toppingsArray.indexOf(topping);
    // toppingsArray.splice(index,1);
  };

  order.addPizza = PizzaService.addPizza;

  order.goBack= function() {
    $location.path('/list');
  };

}]);
