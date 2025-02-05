let button = document.getElementById("ip");

function handleResponse(response) {
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }
    return response.text();
}

function returnData(data) {
    button.innerHTML = data; 
}

function handleError(error) {
    alert("The URL is invalid.");
}

function req() {
    fetch("https://api.ipify.orgx/")
        .then(handleResponse)
        .then(returnData)
        .catch(handleError);
}

button.addEventListener("click", req);
