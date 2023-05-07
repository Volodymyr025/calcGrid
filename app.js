const sum = document.querySelector('.sum')
const result = document.querySelector('.result')
// const option = document.querySelectorAll('.option')
// const num = document.querySelectorAll('.number')
// const ac = document.querySelector('.ac')
// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const multiply = document.querySelector('.multiply')
// const devide = document.querySelector('.devide')
// const equal = document.querySelector('.equal')
// const dot = document.querySelector('.dot')
let num = 0
let resultSum = 0
let option = ''
let memory


function calc (param) {
    // all clearn
    if(param === 'AC'){
        result.textContent = 0
        resultSum = 0
        sum.textContent = ''
        option = ''
        num = 0
    }
    // show number in input
    if(Number.isInteger(param)){
        sum.textContent += param
    }
    // check operation
    // if(param === '+' ||
    //    param === '-' ||
    //    param === '*' ||
    //    param === '/'){
    //       option = param
    // }

    // operation +
    if(param === '+'){
        if(sum.textContent === ''){
            return
        }
        num = parseInt(sum.textContent)
        resultSum = num + resultSum
        sum.textContent = ''
        return
    }
    if(param === '=' && option === '+'){
        result.textContent = resultSum + parseInt(sum.textContent)
        resultSum = parseInt(result.textContent) 
        sum.textContent = '' 
        return      
    }
    // operation -
    if(param === '-'){
        if(sum.textContent === ''){
            return
        }
        num = parseInt(sum.textContent)
        resultSum = num - resultSum
        sum.textContent = ''
        return
    }
    if(param === '=' && option === '-'){
        result.textContent = resultSum - parseInt(sum.textContent)
        resultSum = parseInt(result.textContent) 
        sum.textContent = '' 
        return      
    }
    
}


const opration_type = {
    name: Symbol,
    number: false
}










// function getEl (el){
//     debugger
//     if(result.textContent !== ''&& el === plus && b === ''){
//         a = parseInt(result.textContent)
//     }
//         else if(a !== ''){
//             b = parseInt(result.textContent) 
//         }
//     }

// function operationPlus (event){
//     debugger
//     if(event === plus){
//     result.textContent = ''
//     sum.textContent = event.textContent
    
//     }
    // if(event === equal && sum.textContent === plus.textContent){
    //     defaultResult = a + b
    //     s = defaultResult
    //     result.textContent += parseInt(s)
    // }


// function doubleSymbols (){
//     if (
//         sum.textContent.includes('++') ||
//         sum.textContent.includes('--') ||
//         sum.textContent.includes('**') ||
//         sum.textContent.includes('//') ||
//         sum.textContent.includes('+-') ||
//         sum.textContent.includes('-+') ||
//         sum.textContent.includes('+*') ||
//         sum.textContent.includes('*+') ||
//         sum.textContent.includes('+/') ||
//         sum.textContent.includes('-*') ||
//         sum.textContent.includes('*-') ||
//         sum.textContent.includes('/-') ||
//         sum.textContent.includes('-/') ||
//         sum.textContent.includes('*/') ||
//         sum.textContent.includes('/*') ||
//         sum.textContent.includes('..') ||
//         sum.textContent.includes('.+') ||
//         sum.textContent.includes('+.') ||
//         sum.textContent.includes('.-') ||
//         sum.textContent.includes('-.') ||
//         sum.textContent.includes('.*') ||
//         sum.textContent.includes('*.') ||
//         sum.textContent.includes('/.') ||
//         sum.textContent.includes('./')
//       ) {
//         alert('Operation invalid, please press correctly');
//         sum.textContent = sum.textContent.slice(0, -1);
//       }
// }


// console.log(btn.length)


// // show pressed button
// for(let i = 0;i < btn.length;i++){
//     clickBtn = () =>{
//         debugger
//         const btnNum = +btn[i].textContent
//         const sumNum = result.textContent + btnNum
//         result.textContent = +sumNum
//         maxLineLength ()
//         return
//         }
//     btn[i].addEventListener('click',clickBtn)
// } 
// for(let i = 0;i < option.length;i++){
//     checkOption = () =>{
//         debugger
//         const btnNum = option[i].textContent
//         sum.textContent = btnNum.textContent
//             }
//     option[i].addEventListener('click',checkOption)
// }
