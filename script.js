function scrollToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("success-msg").innerText =
        "Message Sent Successfully!";

    form.reset();
});