//your JS code here. If required.
const num1  = document.getElementById("num1")
const num2  = document.getElementById("num2")
const calculate  = document.getElementById("calculate")
const selectOperator = document.getElementById("select-operator");
const result = document.getElementById("result");
let operator = "+"
selectOperator.addEventListener("change",(e) =>{
	operator = e.target.value;
	
})
calculate.addEventListener( "click", ()=>{
	switch(operator){
	case "+":
		result.textContent = Number(num1.value)+Number(num2.value);
			break
	case "-":
		result.textContent =Number(num1.value)-Number(num2.value);
			break
	case "*":
		result.textContent =Number(num1.value)*Number(num2.value);
			break
	case "/":
		result.textContent =Number(num1.value)/Number(num2.value);
			break
}
})


