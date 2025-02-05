let button = document.getElementById("ip");

function handleResponse (response){

  return response.text();
}
function returnData (data){

  console.log(data);
}





function req (){


  fetch("https://api.ipify.org/")
  .then(handleResponse)
  .then(returnData);
}

button.addEventListener("click", req);