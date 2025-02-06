let submit = document.getElementById("button");

function req(e){

    e.preventDefault();

function handleResponse (response){

    return response.json();
  }
  function returnData ({name, age}){
  
    alert(`Your name is: ${name} \nYour age is:${age}`);
    
  }


let myPromise = new Promise(function(myResolve, myReject) {
    
    let name = document.getElementById("name").value;

    if(name){

        fetch(`https://api.agify.io?name=${name}`)
        .then(handleResponse)
        .then(returnData);

    }
    else{
        alert("Please enter a name");
    }
  });
}

submit.addEventListener("click", req);