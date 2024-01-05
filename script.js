

const statement = document.getElementById("statement");
const optionButtons = document.querySelector('#options').children;
const explanation = document.getElementById('explanation');
const nextQuestionBtn = document.getElementById('sg_btn');
const firstNumberScore = document.getElementById('firstScore');
const secondNumberScore = document.getElementById('secondScore');

let fact = [
    {
statement: "Type 'String'  is a primitive data type in JS",
answer: true,
explanation: "Type 'String' is one of the 7 primitive types in JS along: number, bigint, boolean, undefined, symbol and null"
    },

   {
statement: "1 + 1 === 2",
answer: true,
explanation: "The addition (+) operator produces the sum of numeric operands or string concatenation."
    },

    {
statement: "Primitive values are mutable",
answer: false,
explanation: "Primitive values are immutable (they are hardcoded and cannot be changed)."
    }

];


function disable (button) {
    button.setAttribute("disabled", "")
}

function enable (button) {
    button.removeAttribute("disabled")
}

function isCorrect (guessString) {
    return guessString === fact[i].answer.toString()
}

let i = 0;
statement.textContent = fact[i].statement;
explanation.classList.add("hide")
disable(nextQuestionBtn)

        for (let btn of optionButtons) {
            btn.addEventListener("click" , function (event) {

                explanation.classList.remove("hide")
                explanation.classList.add("show")
                explanation.textContent = fact[i].explanation;
                    for (let btns of optionButtons) {
                        disable(btns)
                    } 
        
            let guessedValue = btn.getAttribute("value")
        
            if(isCorrect(guessedValue)) {
                btn.classList.add("correct")
                firstNumberScore.textContent = i + 1;
            }   else {
                btn.classList.add("incorrect")
            }
        
            secondNumberScore.textContent = i+1;

            if (i === fact.length-1) {
                nextQuestionBtn.textContent = "No more questions!"
                disable(nextQuestionBtn)
            } else {
                enable(nextQuestionBtn)
            }
            

        })
        }




    nextQuestionBtn.addEventListener("click" , function () {
    i++
    statement.textContent = fact[i].statement;
    explanation.classList.remove("show")
    explanation.classList.add("hide")
    for (let btns of optionButtons) {
        enable(btns);
        btns.classList.remove("correct", "incorrect");
    } 
    explanation.textContent = "";
    
    disable(nextQuestionBtn)
    
})
