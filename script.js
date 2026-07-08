function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    document.getElementById("message").innerHTML =
    "✅ Thank you! Your message has been sent.";

    this.reset();

});