
class Calculator {
    constructor(previousOperandButtons, currentOperandButtons) {
        this.previousOperandButtons  = previousOperandButtons
        this.currentOperandButtons = currentOperandButtons    
        this.clear()   
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operationButtons = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    //Quiero que appendOperation() ponga a this.currentOperand y lo convierta a 3.1415 (PI)
    appendOperation() {
        if (specialOperations.innerText === 'π') {
            this.currentOperand = 3.141592.toString()
        }
        this.updateDisplay()
    }
    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.currentOperand != ''){
            this.computeFunction();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }
    computeFunction(){
        
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
             case "+":
            result = prev + current
            break;
             case "-":
            result = prev - current
            break;
             case "*":
            result = prev * current
            break;
             case "÷":
            result = prev / current
            break;
            case "²":
            result = current * current
            this.updateDisplay()
             //esto me lo saque de los heuvos ni idea si funciona jajjsajasjaksjak
            break;
            case"Q":
            result = prev % current
            break;
             default:
            return;
         }
         this.currentOperand = result;
         this.operationButtons = undefined;
         this.previousOperandButtons.innerText = this.previousOperand;
         this.previousOperand = ''
        }
        
    updateDisplay () {
        this.currentOperandButtons.innerText = this.currentOperand;
        if(this.currentOperand === '3.141592'){
            this.previousOperandButtons.innerText = "This is π"
        } else if (this.currentOperand === '230108') {
            this.previousOperandButtons.innerText = 'Cumple de la swiftie'
        } else if (this.currentOperand != '3.141592'){
            this.previousOperandButtons.innerText = this.previousOperand
        } else if (this.currentOperand != '230108'){
            this.previousOperandButtons.innerText = this.previousOperand
        }
        if (this.previousOperand != ''){
            this.previousOperandButtons.innerText = this.previousOperand
        }
        
    }
}
let result;
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const allClearButtons = document.querySelector("[data-all-clear]")
const deleteButtons = document.querySelector("[data-delete]")
const equalsButtons = document.querySelector("[data-equals]")
const previousOperandButtons = document.querySelector("[data-previous-operand]")
const currentOperandButtons = document.querySelector("[data-current-operand]")
const specialOperations = document.querySelector("[data-specialOperations]")
const outputPlaceholder = document.getElementById('output')

const calculator = new Calculator(previousOperandButtons, currentOperandButtons)

numberButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        //Esto stringea el texto del boton y añade el propio parametro de number a currentOperand
        calculator.updateDisplay()
    })
})

operationButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

deleteButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

equalsButtons.addEventListener('click', button => {
    calculator.computeFunction()
    calculator.updateDisplay()
    CorrectOrFalse()
  })

specialOperations.addEventListener('click', button => {
    calculator.appendOperation()
    //Esto callea la funcion de la linea 18:1, esta conectada con el simbolo de PI
})
//Aqui acaba la calculadorae

//aqui empieza el quiz y la configuracion
class config {
    openConfigClass(openOrNot){
        if (openOrNot === true) {
        document.getElementById('overlay').classList.add('active')
        document.getElementById('config-content').classList.add('active')
        }
    }
    closeConfigClass(openOrNot){
        if (openOrNot === false){
            document.getElementById('overlay').classList.remove('active')
            document.getElementById('config-content').classList.remove('active')  
        }
    }
    darkThemeClass(darkOrNot){
        easterEgg = easterEgg + 1
        easter()
        if (darkOrNot === true){
            document.getElementById('calculator-grid').classList.add('Dark')
            background.classList.add('Dark')
            outputPlaceholder.classList.add('Dark')
            prevz.classList.add('Dark')
            currz.classList.add('Dark')
            document.getElementById('questionPrompt').classList.add('Dark')
            document.getElementById('quizDisplay').classList.add('Dark')
        }else if (darkOrNot != true) {
            document.getElementById('calculator-grid').classList.remove('Dark')
            background.classList.remove('Dark')
            outputPlaceholder.classList.remove('Dark')
            prevz.classList.remove('Dark')
            currz.classList.remove('Dark')
            document.getElementById('questionPrompt').classList.remove('Dark')
            document.getElementById('quizDisplay').classList.remove('Dark')
        }
    }
    quizButtonFunction(){
        
        function questionNumber(){
            document.getElementById('questionPrompt').innerText = 'Get ready.'
            document.getElementById('questionPrompt').classList.add('active')
        setTimeout(function (){
            document.getElementById('questionPrompt').classList.remove('active')
        }, 2000)
        setTimeout(() =>{
            questionNumberShowerFunc()
        }, 2500)
    }
    questionNumber()
         //Hace que el display rojo del quiz tome el valor de randomNumber
         
     }
    NOQCFunction(){
        questionNumberHiderFunc()
        function randomNumberAnimation(){
          let animation = 200;
            var leemao = setInterval(()=>{
                animation = animation - 1;
                randomAnim()
                quizButtonRNG()
                if(animation === 0){
                clearInterval(leemao)
                }
            }, 10)
            
         }
         randomNumberAnimation()
        }
        
}
 function CorrectOrFalse(){
        if(parseFloat(currentOperandButtons.innerText) === parseFloat(quizDisplay.innerText)){
            config.NOQCFunction()
            alert('Correct!!')
            
        }else if(parseFloat(currentOperandButtons) != parseFloat(quizDisplay.innerText)){
            alert('incorrect :((((((')
        }
    }
    function numberHider(){
        
    }
let randomNumber = 0;
function randomAnim(){
    randomNumber = Math.floor(Math.random() * 108)
    parseFloat(randomNumber)
}
function quizButtonRNG(){
            quizDisplay.innerText = randomNumber
}
 const CONFIGURATION = new config()

        

const openConfigjs = document.getElementById('configModal')
const closeButton = document.getElementById('close-button')
const overlay = document.getElementById('overlay')
const darkTheme = document.getElementById('darkThemeButton')
const content = document.querySelector('config-content')
const background = document.getElementById('background')
const lightTheme = document.getElementById('lightThemeButton')
const prevz = document.getElementById('previous-operand')
const currz = document.getElementById('current-operand')
const quizButton = document.getElementById('QuizButton')
const quizDisplay = document.getElementById('quizDisplay')
//const questionNumberButtons = document.querySelectorAll("#questionNumber.button")
const questionNumberButtoninf = document.querySelector('#questionNumberinf')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const zero = document.getElementById('0')
const questionNumberCloseButton = document.getElementById('closebuttonQ')
let easterEgg = 0
let openOrNot = false
let darkOrNot = false
let NOQC = 0
function fr(variable, DOMelement){
    return variable.classList.remove(DOMelement)
}

openConfigjs.addEventListener('click', () => {
      openOrNot = true
      CONFIGURATION.openConfigClass(openOrNot)
    })
overlay.addEventListener('click', () => {
    openOrNot = false
    CONFIGURATION.closeConfigClass(openOrNot)
})

closeButton.addEventListener('click', () => {
        openOrNot = false
        CONFIGURATION.closeConfigClass(openOrNot)
    })

darkTheme.addEventListener('click', () => {
    darkOrNot = true
    CONFIGURATION.darkThemeClass(darkOrNot)
})

lightTheme.addEventListener('click', () => {
    darkOrNot = false
    CONFIGURATION.darkThemeClass(darkOrNot)
})

function easter(){
    if (easterEgg === 4){
        currentOperandButtons.text = 'Stop messing with config you moron'
    } else if (easterEgg === 12){
        currentOperandButtons.text = 'stop'
    }else if (easterEgg === 28){
        currentOperandButtons.text ='kys'
    easterEgg = 0
    }
}
quizButton.addEventListener('click', () => {
    CONFIGURATION.quizButtonFunction()
})

 function questionNumberShowerFunc(){
    questionNumberButtoninf.classList.add('active')
 }

 function questionNumberHiderFunc(){
    questionNumberButtoninf.classList.remove('active')
    questionNumberCloseButton.classList.add('active')
    quizDisplay.classList.add('active')
 }

 questionNumberButtoninf.addEventListener('click', () => {
    CONFIGURATION.NOQCFunction()
 })
 questionNumberCloseButton.addEventListener('click', () => {
    questionNumberCloseButton.classList.remove('active')
    quizDisplay.classList.remove('active')
    randomNumber = '?'
    questionsLeft = 0
    NOQC = 0
 })
