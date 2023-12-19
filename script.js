
const statement = document.getElementById("statement");
const optionButtons = document.querySelector('#options').children;
const explanation = document.getElementById('explanation');



let fact = {
statement: "Type 'String'  is a primitive data type in JS",
answer: true,
explanation: "Type 'String' is one of the 7 primitive types in JS along: number, bigint, boolean, undefined, symbol and null"

};

statement.textContent = fact.statement;
