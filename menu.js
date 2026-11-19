
// Cart Array

let cart = [];


// 1. Add To Cart Function

function addToCart(name, price) {

    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    updateCart();

    alert(name + " added to cart!");

}


// 2. Update Cart Function

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    let cartCount = document.getElementById("cartCount");

    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total = total + cart[i].price;

        let div = document.createElement("div");

        div.className = "cart-row";

        div.innerHTML = `
            <span>${cart[i].name} - ₹${cart[i].price}</span>

            <button onclick="removeItem(${i})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);

    }

    if (cart.length === 0) {

        cartItems.innerText = "Your cart is empty.";

    }

    cartCount.innerText = cart.length;

    totalPrice.innerText = total;

}


// 3. Remove Item Function

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// 4. Clear Cart Function

function clearCart() {

    cart = [];

    updateCart();

}

// PLACE ORDER FUNCTION

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty! Please add food items.");

    }

    else {

        alert("Your order has been placed successfully!");

        cart = [];

        updateCart();

        document.getElementById("orderMessage").innerText =
            "Thank you for ordering from Cafe Flora! ";

    }

}



// 5. Filter Food Function

function filterFood(category) {

    let cards = document.getElementsByClassName("food-card");

    for (let i = 0; i < cards.length; i++) {

        if (category === "all") {

            cards[i].style.display = "block";

        }

        else if (cards[i].getAttribute("data-category") === category) {

            cards[i].style.display = "block";

        }

        else {

            cards[i].style.display = "none";

        }

    }

}
