let Button1 = document.getElementById("ButtonA");
let Button2 = document.getElementById("ButtonB");
let Button3 = document.getElementById("ButtonC");
let Button4 = document.getElementById("ButtonD");
let Button5 = document.getElementById("ButtonE");

function forButton1(){

    let array1 = [];
    let removeDivisible = [];

    for(let i = 0; i <= 100; i++){
        
        array1.push(i);
    }
    for(let i = 0; i <= 100; i++){

        if(array1[i] % 3 !== 0){
            removeDivisible.push(i);
        }

    }
    console.log(removeDivisible);
}

function forButton2(){

    let array2 = [];
    let extra = [];

    for(let i = 0; i <= 100; i++){
        
        array2.push(i);

        if(i < 50){
            extra.push(i + 101);
        }
    }

    let newArray = array2.concat(extra);
    console.log(newArray);

};

function forButton3(){

    let array3 = [];
    let numberToAdd = 3;

    function addNumber(value, index, array){
        
        array[index] = value + numberToAdd;

    }

    for(let i = 0; i <= 100; i++){
        
        array3.push(i);
    }
    
    array3.forEach(addNumber);

    console.log(array3);

};


function forButton4(){

    let array4 = [];

    for(let i = 0; i <= 100; i++){
        
        array4.push(i);
    }
    let sliceArray = array4.slice(20, 41);

    console.log(sliceArray);

};

function forButton5(){

    let array5 = [];
    

    for(let i = 0; i <= 100; i++){
        
        array5.push(i);
    }

    function shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(array5);

    console.log(array5);

    function descendingSort(a,b){
        
        return b-a;
    }
    
    array5.sort(descendingSort);
    
    console.log(array5);

};

Button1.addEventListener("click",forButton1);
Button2.addEventListener("click",forButton2);
Button3.addEventListener("click",forButton3);
Button4.addEventListener("click",forButton4);
Button5.addEventListener("click",forButton5);