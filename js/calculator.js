const displayField = document.querySelector('#current-operand');
let  calculousArray = [];
const resultBtn = document.querySelector('.btn-equals')
let result = 0;

const isPercentOperator = (button) => {
    return button && button.getAttribute('data-operator') === '%';
}

const normalizeExpression = (expression) => {
    return expression.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
}

resultBtn.addEventListener('click', () => {
   if(calculousArray.length <= 1) return;

    let lastInput = calculousArray[calculousArray.length - 1];
    if(lastInput.getAttribute('data-number') == undefined && !isPercentOperator(lastInput)) return;

    result = eval(normalizeExpression(displayField.textContent));
    displayField.textContent = result
    calculousArray = []
});

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
        fillScreen(parseInt(number.textContent), attr[1])
    })
})

let operators = document.querySelectorAll('.btn-operator')
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(calculousArray.length === 0) return;

        let lastInput = calculousArray[calculousArray.length - 1];
        let lastIsNumber = lastInput.getAttribute('data-number') != undefined;
        let lastIsPercent = isPercentOperator(lastInput);
        let currentIsPercent = isPercentOperator(operator);

        if(!lastIsNumber && !(lastIsPercent && !currentIsPercent)) return;

        calculousArray.push(operator)
        let attr = operator.getAttributeNames();
        fillScreen(operator.getAttribute('data-operator'), attr[1]);
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