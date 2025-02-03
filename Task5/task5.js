let even = document.getElementById("sumOfEvenNumbers")

function sumOfEven() {

    let array = [];
    let sum = 0;



    for(let i = 0; i <= 100; i++){

        array.push(i);
        if(i % 2 === 0){
           sum += i; 

        }
    }

    console.log("The sum of even numbers is:", sum);


}



even.addEventListener("click", sumOfEven);