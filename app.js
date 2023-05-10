const sum = document.querySelector('.sum')
const result = document.querySelector('.result')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const division = document.querySelector('.divide')
const equal = document.querySelector('.equal')
const dot = document.querySelector('.dot')
let num = null
let resultSum = null
let plus1 = false
let minus1 = false
let multi1 = false
let devid1 = false





function calc (param) {
    // all clearn
    if(param === 'AC'){
        result.textContent = '0'
        resultSum = null
        sum.textContent = ''
        num = null
        plus1 = false
        minus1 = false
        multi1 = false
        devid1 = false
    }
   
    // show number in input
    if(Number.isInteger(param) || param === '.'){
        const presBtn = sum.textContent += param
        num = +presBtn
        return       
    }
}

// plus button
plus.addEventListener('click', operationPlus = () => {
    if(minus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent - num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        minus1 = false
    }
    if(multi1 === true && sum.textContent !== ''){
        resultSum = +result.textContent * num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        multi1 = false
    }
    if(devid1 === true && sum.textContent !== ''){
        resultSum = +result.textContent / num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        devid1 = false
    }
    else if (plus1 === true){
        resultSum = +result.textContent + num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
    }
    plus1 = true
    return
})
// minus button
minus.addEventListener('click', operationMinus = () => {
    if(plus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent + num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        plus1 = false
    }
    if(multi1 === true && sum.textContent !== ''){
        resultSum = +result.textContent * num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        multi1 = false
    }
    if(devid1 === true && sum.textContent !== ''){
        resultSum = +result.textContent / num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        devid1 = false
    }
    else if(minus1 === true){
    resultSum = +result.textContent - num
    result.textContent = resultSum
    num = null
    sum.textContent = ''
   }
   minus1 = true
   return
})
// multiply button
multiply.addEventListener('click', operationMultiply = () => {
    if(plus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent + num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        plus1 = false
    }
    if(minus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent - num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        minus1 = false
    }
    if(devid1 === true && sum.textContent !== ''){
        resultSum = +result.textContent / num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        devid1 = false
    }
    else if(multi1 === true){
        if(result.textContent == 0){
            result.textContent = 1
        }
    resultSum = +result.textContent * num
    result.textContent = resultSum
    num = null
    sum.textContent = ''
   }
   multi1 = true
   return
})
// division button
division.addEventListener('click', operationMultiply = () => {
    if(plus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent + num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        plus1 = false
    }
    if(minus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent - num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        minus1 = false
    }
    if(multi1 === true && sum.textContent !== ''){
        resultSum = +result.textContent * num
        result.textContent = resultSum
        num = null
        sum.textContent = ''
        multi1 = false
    }
    else if(devid1 === true){
        if(result.textContent == 0){
            result.textContent = 1
        }
    resultSum = +result.textContent / num
    result.textContent = resultSum
    num = null
    sum.textContent = ''
   }
   devid1 = true
   return
})
// equal button
equal.addEventListener('click', operationPlus = () => {
    if(plus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent + num
        result.textContent = resultSum
        sum.textContent = ''
        plus1 = false
        minus1 = false
        multi1 = false
        devid1 = false
        return
    }
    if(minus1 === true && sum.textContent !== ''){
        resultSum = +result.textContent - num
        result.textContent = resultSum
        sum.textContent = ''
        plus1 = false
        minus1 = false
        multi1 = false
        devid1 = false
        return
    }
    if(multi1 === true && sum.textContent !== ''){
        resultSum = +result.textContent * num
        result.textContent = resultSum
        sum.textContent = ''
        plus1 = false
        minus1 = false
        multi1 = false
        devid1 = false
        return
    }
    if(devid1 === true && sum.textContent !== ''){
        resultSum = +result.textContent / num
        result.textContent = resultSum
        sum.textContent = ''
        plus1 = false
        minus1 = false
        multi1 = false
        devid1 = false
        return
    }
})
