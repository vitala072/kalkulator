'use strict';
// // const res = document.querySelector('#res');
// function calc(e) {
// // const inputValue = e.value;
// // if(inputValue == "C") {
// //     res.value = '';
// // }
// // else if(inputValue == "=") {
// //     res.value = eval(res.value);
// // }else {
// //     res.value += inputValue;
// // }
// };

function calc(){}
(function(){
    function calcul(result, type){
        this.res = document.querySelector('#' + result);
    this.button = document.querySelectorAll('input[type="'+type+'"]');
    this.calcRes();
    }
    calcul.prototype.calcRes = function(){
        this.button.forEach(function(item){
            item.addEventListener('click', function(e) {
            e.preventDefault();
                const inputValue = item.value;
                if(inputValue == "C") {
                    res.value = '';
                }
                else if(inputValue == "=") {
                    res.value = eval(res.value);
                }else {
                    res.value += inputValue;
                }}.bind(this))
        });  
    }
    new calcul('res', 'button');
    })()