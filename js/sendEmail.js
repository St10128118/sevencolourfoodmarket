
(function () {
    emailjs.init("MOmkglFAuzMDMtncd"); // Replace with your EmailJS public key
})();

const form = document.getElementById('reachoutForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validation
    const title = document.getElementById('title');
    const name = document.getElementById('name');
    const message = document.getElementById('message');
    const email = document.getElementById('email');
    const time = new Date();

    //NB!!: the form validation will be handled by "required" attribute

    // document.getElementById('titleError').textContent = title.value.length < 2 ? "title must be at least 2 characters." : "";
    // document.getElementById('nameError').textContent = name.value.length < 5 ? "Name must be at least 5 characters." : "";
    // document.getElementById('emailError').textContent = email.validity.valid ? "" : "Enter a valid email.";
    // document.getElementById('messageError').textContent = message.value.length < 10 ? "Message must be descriptive as much as possible." : "";

    // if (title.value.length < 2 || name.value.length < 2 || !email.validity.valid || message.value.length < 10) {
    //     valid = false;
    // }

    // alert("Clicked on the submit");

    // if (!valid) return;

    // Send email via EmailJS
    emailjs.send("service_ohvelbn", "template_zk2urfd", {
        title: title.value,
        name: name.value,
        time: new Date().toLocaleTimeString(),
        email: email.value,
        message: message.value
    })
        .then(function (response) {
            alert("Form submitted successfully! Email sent.");
            form.reset();
        }, function (error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
});
