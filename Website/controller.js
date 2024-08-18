let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function displaySuccess() {
    popup.classList.add("show-popup");
    overlay.classList.add("show-overlay");
}

function hideSuccess() {
    popup.classList.remove("show-popup");
    overlay.classList.remove("show-overlay");
}

function checkForm() {
    // event.preventDefault();
    const form = document.getElementById("myForm");
    const popup = document.getElementById("popup");

    if (form.checkValidity()) {
        popup.classList.add("show-popup");
        overlay.classList.add("show-overlay");
    } 
}

// handle the submission asynchronously
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        checkForm();
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
                console.log("Form successfully submitted");
                form.reset();
            })
            .catch((error) => alert(error));
    });
});
