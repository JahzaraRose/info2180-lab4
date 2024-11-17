// Listen for the button click
document.getElementById("search").addEventListener("click", function () {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open the GET request to superheroes.php
    xhr.open("GET", "superheroes.php", true);

    // Handle the response
    xhr.onload = function () {
        if (this.status === 200) {
            // Parse the JSON response
            const superheroes = JSON.parse(this.responseText);

            // Display the list in an alert
            alert("Superheroes:\n" + superheroes.join("\n"));
        } else {
            alert("Error fetching superheroes.");
        }
    };

    // Send the request
    xhr.send();
});
