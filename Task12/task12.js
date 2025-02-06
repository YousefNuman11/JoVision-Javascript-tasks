let submit = document.getElementById("button");

function creatObject (){

    let personName = document.getElementById("name").value;
    let personAge = parseInt(document.getElementById("age").value);

    if(isNaN(personAge) || personAge <= 0){
        alert("Please enter a valid number");
        return;
    }

    let person = {
    	name: personName,
    	age : personAge,
    	timestamp : new Date()
	};

    alert(`Your name is: ${person.name} \nYour age is: ${person.age} \nTimestamp: ${person.timestamp}`);



   
}

submit.addEventListener("click", creatObject);