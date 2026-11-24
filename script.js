
const loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document
        .getElementById("username").value.trim();

    const password = document
        .getElementById("password").value.trim();

    if (username === "" && password === "") {
        alert("Please enter your username and password.");
    } else if (username === "") {
        alert("Please enter your username.");
    } else if (password === "") {
        alert("Please enter your password.");
    } else {
        alert("Login form submitted successfully!");
    }
});
