
// Cart Counter

let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert("Item added to cart!");
}

// Contact Form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    alert("Thank you " + name + "! Your message has been received.");

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}
