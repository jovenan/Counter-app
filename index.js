const decrease = document.querySelector("#DECREASCE");
const reset = document.querySelector("#RESET");
const increase = document.querySelector("#INCREASE");

const number = document.querySelector(".number");

decrease.addEventListener("click", (e) => {
    const numberValue = document.querySelector(".number").getAttribute("value");
    const decreasedNumber = parseInt(numberValue) - 1;

    number.innerHTML = decreasedNumber;
    number.setAttribute('value', decreasedNumber);
})

increase.addEventListener("click", (e) => {
    const numberValue = document.querySelector(".number").getAttribute("value");
    const increasedNumber = parseInt(numberValue) + 1;

    number.innerHTML = increasedNumber;
    number.setAttribute('value', increasedNumber);
})

reset.addEventListener("click", (e) => {
    number.innerHTML = "0";
    number.setAttribute('value', 0);
})