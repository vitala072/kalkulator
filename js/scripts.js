'use strict';
const res = document.querySelector('#res');
function calc(e) {
const inputValue = e.value;

if(inputValue == "C") {
    res.value = '';
}
else if(inputValue == "=") {
    res.value = eval(res.value);
}else {
    res.value += inputValue;
}};