var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "WORLD!";
console.log(A + B);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    return x3;
}
console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));
var C = "hello";
var v = 4;

if (C.length > v) {
    console.log(C);
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(item) {
    if (item == "Banana") {
        alert("We found banana in first array");
    }
}
L1.forEach(findTheBanana);

var d = new Date();
var h = d.getHours();
console.log(h);

function greetingFunc() {
    let E = document.getElementById("greeting");        
    if (5 < h && h < 12) {
        E.innerHTML = "Good Morning, my name is Max Ladner";
    }
    if (12 < h && h < 18) {
        E.innerHTML = "Good Afternoon, my name is Max Ladner";
    }
    if (18 < h && h < 20) {
        E.innerHTML = "Good Evening, my name is Max Ladner";
    }
    if ((20 < h && h < 24) || (0 < h && h < 5)) {
        E.innerHTML = "Good Night, my name is Max Ladner";
    }
}
window.onload = greetingFunc;



