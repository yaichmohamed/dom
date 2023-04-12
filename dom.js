var cartItems = document.querySelectorAll(".card");
var sum = document.getElementById("sum");
var totalPrice = 0;

cartItems.forEach(function(item) {
  var plusButton = item.querySelector(".plus");
  var minusButton = item.querySelector(".minus");
  var deleteButton = item.querySelector(".btn-primary");
  var priceElement = item.querySelector(".price");
  var quantityElement = item.querySelector(".x");
  
  var price = parseFloat(priceElement.textContent);
  var quantity = parseInt(quantityElement.textContent);
  
  totalPrice += price * quantity;
  
  plusButton.addEventListener("click", function() {
    quantity++;
    quantityElement.textContent = quantity;
    totalPrice += price;
    sum.textContent = totalPrice.toFixed(2);
  });
  
  minusButton.addEventListener("click", function() {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      totalPrice -= price;
      sum.textContent = totalPrice.toFixed(2);
    }
  });
  
  deleteButton.addEventListener("click", function(event) {
    event.preventDefault();
    item.parentNode.removeChild(item);
    totalPrice -= price * quantity;
    sum.textContent = totalPrice.toFixed(2);
  });
});




