let sum = document.getElementById("sumOfArray");

function arraySum() {

    let array = [];
    let sum = 0;



    for(let i = 0; i <= 100; i++){

        array.push(i);
        sum += i;
    }

    console.log("The sum is:", sum);


};



sum.addEventListener("click", arraySum);