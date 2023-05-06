const sum = document.querySelector('.sum')
const result = document.querySelector('.result')
// const num = document.querySelectorAll('.number')
// const ac = document.querySelector('.ac')
// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const multiply = document.querySelector('.multiply')
// const devide = document.querySelector('.devide')
// const equal = document.querySelector('.equal')
// const dot = document.querySelector('.dot')
// const option = document.querySelectorAll('.option')
let num = 0
let resultSum = 0
let option = ''
let memory


function calc (param) {
    if(param === 'AC'){
        result.textContent = 0
        resultSum = 0
        sum.textContent = ''
        option = ''
        num = 0
    }
    if(Number.isInteger(param)){
        sum.textContent += param
    }
    if(param === '+'){
        if(sum.textContent === ''){
            sum = 0
        }
        num = parseInt(sum.textContent)
        resultSum += num
        option = param
        sum.textContent = ''
    }
    if(param === '=' && option === '+'){
        result.textContent = resultSum + parseInt(sum.textContent)
        resultSum = parseInt(result.textContent) 
        sum.textContent = ''       
    }
    if(param === '-'){
        num = parseInt(sum.textContent)
        resultSum = num
        option = param
        sum.textContent = ''
    }
    if(param === '=' && option === '-'){
        result.textContent = resultSum - parseInt(sum.textContent)
        resultSum = parseInt(result.textContent)     
    }
    
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
