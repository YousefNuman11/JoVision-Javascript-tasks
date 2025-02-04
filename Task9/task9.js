let button = document.getElementById("ip");


function req (){
  let fetchReq = fetch("https://api.ipify.org/");

  fetchReq.then(response => response.text())
  .then(data => {console.log(data)});
}

button.addEventListener("click", req);