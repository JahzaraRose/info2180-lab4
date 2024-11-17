function searchList() {
    const result = document.getElementById("result");
    const val = document.getElementById("userinput").value.trim();
    const req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                // Check if the response includes a 'not-found' indicator
                if (req.responseText.includes('id="not-found"')) {
                    result.innerHTML = `<p style="color: red; font-weight: bold;">Superhero not found</p>`;
                } else {
                    result.innerHTML = req.responseText; // Insert response into result div
                }
            } else {
                console.log("There seems to be an error!");
            }
        }
    };

    // Send GET request to the PHP endpoint with the search query
    req.open(
        "GET",
        `http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(val)}`,
        true
    );
    req.send();
}

window.onload = function () {
    console.log("Page successfully loaded");
    const button = document.getElementById("searchBtn");
    button.addEventListener("click", searchList);
};
