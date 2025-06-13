//your JS code here. If required.
const num1  = document.getElementById("num1")
const num2  = document.getElementById("num2")
const calculate  = document.getElementById("calculate")
const selectOperator = document.getElementById("operator");
const result = document.getElementById("result");
const changeText = document.getElementById("change_text")
let operator = "+"
const division = document.getElementById("division");
changeText.addEventListener("click",()=>{
	division.innerHTML = `<p>Bye</p>
		<p>Good Bye</p>
		<p>To</p>
		<p>Your</p>
		<p>Class</p>`
}
)
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


