let button = document.getElementById("ip");



function req (){
    try{
    let fetchReq = fetch("https://api.ipify.org/");

    fetchReq
    .then(response => response.text())
    .then(data => {button.innerHTML = data;});
    }
    catch(err){
        alert("The url is invalid");
    }
    

}

button.addEventListener("click", req);