document.getElementById("sumOfArray").addEventListener("click", function() {

    let array = [];
    let sum = 0;



    for(let i = 1; i <= 100; i++){

        array.push(i);
        sum += i;
    }

    console.log("The sum is:", sum);


});