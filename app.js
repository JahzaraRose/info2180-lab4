function searchList() {
    var result = document.getElementById("result");
    var val = document.getElementById("userinput").value.trim();
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) 
            {
                result.innerHTML = req.responseText;
            }
            if (req.responseText.includes('id="not-found"')) 
                {
                    result.innerHTML = `<p style="color: red; font-weight: bold;">Avenger not found</p>`;
                } 
            else 
            {
                console.log("There seems to be an error!");
            }
        }
    };

    // Send GET request to the PHP endpoint with the search query
    req.open("GET",`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(val.value.trim())}`, true);
    req.send();
}

window.onload = function () {
    console.log("Page successfully loaded");
    var but = document.getElementById("searchBtn");
    but.addEventListener("click", searchList);
};
