function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (username === "anitoono" && password === "45644564") {
        // Slide out the login form
        document.getElementById("loginForm").style.transform = 'translateX(-100%)'; // Slide out
        document.getElementById("loginForm").style.transition = 'transform 0.5s ease';

        setTimeout(function() {
            document.getElementById("loginForm").classList.add("hidden"); // Completely hide the form after sliding out
            var welcomeSection = document.getElementById("welcomeSection");
            welcomeSection.classList.remove("hidden"); // Show welcome section
            welcomeSection.classList.add("show"); // Add class for transition
            welcomeSection.style.transform = 'translateY(0)'; // Reset position

            // Show the database section after a delay
            setTimeout(function() {
                var databaseSection = document.getElementById("databaseSection");
                databaseSection.classList.remove("hidden"); // Show database section
                databaseSection.style.opacity = 1; // Ensure it's visible
                databaseSection.style.transition = 'opacity 0.5s ease'; // Add transition for opacity
            }, 2000); // Show database after 2 seconds
        }, 500); // Match the timeout to the CSS transition duration
    } else {
        error.textContent = "Incorrect username or password!";
    }
}
