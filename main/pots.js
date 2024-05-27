//add clear cart function and fix total 
// Function to add product to cart
function addToCart(event) {
    const product = event.target.closest('.col-md-12');
    const productName = product.querySelector('.nameOfProduct').innerText;
    const productPrice = product.querySelector('.price').innerText;

    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to cart
    cart.push({ name: productName, price: productPrice });

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Product added to cart!");
}

// Function to display cart items
function displayCart() {
    const cartItemsList = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Calculate total
    let total = 0;

    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price}`;
        cartItemsList.appendChild(listItem);

        // Update total
        total += parseFloat(item.price.replace('R ', ''));
    });

    // Display total amount
    totalAmount.innerText = `R ${total.toFixed(2)}`;
}

// Add event listener to clear cart button if it exists
const clearCartButton = document.getElementById('clearCart');
if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
}



// Function to process payment
function processPayment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvv = document.getElementById("cvv").value;

    // Your payment processing logic goes here

    // Show thank you message and clear cart
    alert("Payment successful! Thank you for your purchase.");
    localStorage.removeItem('cart');
    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("totalAmount").innerHTML = "R 0.00";

    return false; // Prevent form submission
}

// Event listeners for adding to cart
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-secondary');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });

    // Check if we are on the cart page
    if (document.getElementById('cartItems')) {
        displayCart();
    }
});









/*clear cart*/
// Function to clear the cart
function clearCart() {
  localStorage.removeItem('cart');
  displayCart(); // Refresh the cart display
  alert("Cart cleared!");
}