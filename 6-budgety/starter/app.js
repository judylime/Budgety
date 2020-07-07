//BUDGET CONTROLLER
var budgetController = (function (){


})();

//UI CONTROLLER
var UIController = (function () {
  //Some code

})();

// GLOBAL APP CONTROLLER
var controller =(function(budgetCtrl,UICtrl){
  var ctrAddItem = function (){
    
    // 1. Get the filed input data
  
    // 2. Add the item to the budget controller
  
    // 3. Add  the item to the UI
  
    // 4. Calculate the budget
  
    // 5. Display the budget on the UI

    console.log('it works')
  }  
  document.querySelector('.add__btn').addEventListener('click', ctrAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrAddItem();
    }
  })


})(budgetController,UIController);