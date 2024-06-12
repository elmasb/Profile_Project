
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var nav = document.getElementById("nav-box");
        if (nav) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                nav.style.top = "0";
            } else {
                nav.style.top = "100px";
            }
        }
    };

    var welcomeText = document.getElementById("welcome-text");
    if (welcomeText) {
        setInterval(function() {
            welcomeText.style.visibility = (welcomeText.style.visibility == "hidden" ? "visible" : "hidden");
        }, 10000); 
    }

 
    var separator = document.createElement("div");
    separator.style.width = "100%";
    separator.style.height = "1px";
    separator.style.backgroundColor = "red";
    separator.style.marginTop = "10px"; 
    document.getElementById("contact-form").appendChild(separator);

    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if (!firstName || !lastName || !email || !subject || !message) {
            alert("GFill the blanks!!");
            event.preventDefault(); 
        } else {
            alert("Your message is sent! If you want more, click here.");
            form.reset(); 
            event.preventDefault(); 
        }
    });
});
