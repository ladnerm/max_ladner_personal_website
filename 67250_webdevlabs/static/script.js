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
//L1.forEach(findTheBanana);

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
function addYear() {
    var g = new Date();
    var year = g.getFullYear();
    let p_tag = document.getElementById("getYear");
    p_tag.innerHTML = year.toString();
}
window.onload=function(){

    addYear();
    greetingFunc();
}

//function showList() {
//    const list = document.getElementById('my-list');
//    const b = document.getElementById('show-button');
//
//    list.style.display = 'block';
//
//    b.style.display = 'none';
//}

function show_advice() {
    fetch("https://api.adviceslip.com/advice").then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
            document.getElementById("quote").innerText = data.slip.advice;
            document.getElementById("advice_button").style.display = "none";
        }).catch(error => {
            document.getElementById("quote").innerText = "Failed to get advice. Please try again!";
            console.error("Error fetching advice:", error);
        });
}


    

$(document).ready(function() {
    $('#toggle-bio').click(function() {
        if ($('#full-bio').is(':hidden')) {
            $('#full-bio').show();
            $('#short-bio').hide();
            $('#toggle-bio').text('Read Less');
        } else {
            $('#full-bio').hide();
            $('#short-bio').show();
            $('#toggle-bio').text('Read More');
        }
    });
});

const form = document.getElementById('contact-form');
const message = document.getElementById('validation-message');

form.addEventListener('submit', function(event) {
    if (window.location.href.includes("fun.html")) {
    message.style.display = 'none';
    message.innerHTML = '';

    let is_valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const description = document.getElementById('description');

    if (!name.checkValidity()) {
        is_valid = false;
        message.innerHTML += '<p>Please enter your name.</p>';
    }

    if (!email.checkValidity()) {
        is_valid = false;
        message.innerHTML += '<p>Please enter a valid email address.</p>';
    }

    if (!description.checkValidity()) {
        is_valid = false;
        message.innerHTML += '<p>Please enter a description.</p>';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        message.style.display = 'block';
    }
    }
});
