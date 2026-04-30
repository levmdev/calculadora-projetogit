let displayField = document.querySelector('#current-operand');
let calculousArray = [];
let clearAllBtn = document.querySelector("#clear");
clearAllBtn.addEventListener('click', () => {
    calculousArray = [];
    displayField.textContent = 0
})

let clearLast = document.querySelector('#clear-entry');
clearLast.addEventListener('click', () => {
    if(calculousArray.length > 1){
        displayField.textContent = displayField.textContent.slice(0,-1)
        calculousArray.pop();
        return;
    }
    displayField.textContent = 0
    calculousArray = [];
})

let numbers = document.querySelectorAll('.btn-number')
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        calculousArray.push(number)
        let attr = number.getAttributeNames();
        fillScreen(number.textContent, attr[1])
    })
})

let operators = document.querySelectorAll('.btn-operator')
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(calculousArray.length > 0 && calculousArray[calculousArray.length - 1].getAttribute('data-number') == undefined) return;
        calculousArray.push(operator)
        let attr = operator.getAttributeNames();
        fillScreen(operator.textContent, attr[1]);
    })
})

const fillScreen = (input, attr) => {
    if(attr == 'data-number' && calculousArray.length == 1) {
        displayField.textContent = input
        return;
    } else if(attr == 'data-number' && calculousArray.length != 1) {
        displayField.textContent += input
        return;
    }
    displayField.textContent += input;
}