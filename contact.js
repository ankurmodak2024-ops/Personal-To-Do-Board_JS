
// CONTACT FORM

let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    // Stop page refreshing

    event.preventDefault();


    // Get input values

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;


    // Get message element

    let result = document.getElementById("formMessage");


    // Check empty fields

    if (
        name.trim() === "" ||
        email.trim() === "" ||
        subject.trim() === "" ||
        message.trim() === ""
    ) {

        result.style.color = "red";

        result.innerText = "Please fill all the fields.";

    }

    else {

        result.style.color = "green";

        result.innerText =
            "Thank you " + name +
            "! Your message has been received.";

        // Clear form

        form.reset();

    }

});
