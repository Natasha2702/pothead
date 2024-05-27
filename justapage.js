//cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => 
    {button.addEventListener("click",() => 
    //get product details
    {const product = button.previousSibling.previousSibling;
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector("p").textContent;
    //add to cart
    const cart = document.querySelector(".cart");

    const cartList =cart.querySelector("ul");
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `<img src = "{product.querySelector("img").src"}  alt="${productName}">
        <h3>${productName}</h3>
        <p>Price: ${productPrice}</p>
        <button>Remove</button>`;
 cartList.appendChild(cartItem);});
    ;});

    //Remove from cart functionality
document.querySelectorAll('.remove').forEach(button => {button.addEventListener('click' , () =>
{const cartItem = button.parentNode;
cartItem.remove();
    });
});

//Checkout fuctionaly
document.querySelector('.checkout').addEventListener('click',() =>
{ //Get cart items
const cartItems = document.querySelectorAll('.cart li');

const product = [];
cartItems.forEach(item => {
    const productName=
    item.querySelector('p').textContent;
    products.push({name:
    productName, price:
productPrice});
    });
});



