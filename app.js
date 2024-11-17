document.getElementById('searchButton').addEventListener('click', function() {
    // Make an AJAX request to the superheroes.php file
    fetch('superheroes.php')
        .then(response => response.json())  // Assume the server returns JSON data
        .then(data => {
            // Create a list of superhero names from the data
            const superheroes = data.join(', '); // Join names with commas
            // Show the list of superheroes in an alert
            alert('Superheroes: ' + superheroes);
        })
        .catch(error => {
            console.error('Error fetching superheroes:', error);
            alert('Failed to load superheroes.');
        });
});
