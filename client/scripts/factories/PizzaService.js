pizzaApp.factory('PizzaService', function(){
  var allPizzas = {
    pizzaList: []
  };

  function addPizza(newPizza){
    if (newPizza.size === "large"){
      newPizza.cost = 8;
    } else if (newPizza.size ==="medium") {
      newPizza.cost = 7;
    } else {
      newPizza.cost = 6;
    }
    for (var i = 0; i < newPizza.toppings.length; i++) {
      newPizza.cost++;
    }
    allPizzas.pizzaList.push(newPizza);
    console.log(allPizzas.pizzaList);
  }

  var confirmedPizzas = {
    pizzaList: []
  };

  function confirmPizza(pizza){
    confirmedPizzas.pizzaList.push(pizza);
    deletePizza(pizza);
    console.log('confirmed pizzas: ', confirmedPizzas);
    finalCost(pizza);
  }

  function deletePizza(pizza){
    var index = allPizzas.pizzaList.indexOf(pizza);
    allPizzas.pizzaList.splice(index,1);
    console.log(allPizzas.pizzaList);
    console.log("foo bar", pizza);
  }

  function finalCost(pizza) {
      grandTotal.totalCost += pizza.cost;
  }

  var grandTotal = {
        totalCost: 0
    };

  return {
    addPizza : addPizza,
    allPizzas : allPizzas,
    confirmPizza : confirmPizza,
    deletePizza : deletePizza,
    confirmedPizzas : confirmedPizzas,
    grandTotal : grandTotal
  };
});
