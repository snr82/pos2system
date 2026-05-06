const prices = {
    Burger: 60,
    Fries: 50,
    Fishbol: 20,
    Kikiam: 25
};

const finalizeBtn = document.getElementById("finalize");
const foodSelect = document.getElementById("foods");
const quantityInput = document.getElementById("quantity");
const cashInput = document.getElementById("cash");
const result = document.getElementById("result");

finalizeBtn.addEventListener("click", function() {
    const food = foodSelect.value;
    const quantity = parseInt(quantityInput.value);
    const cash = parseInt(cashInput.value);

    const total = prices[food] * quantity;
    const change = cash - total;

    if (cash < total) {
        result.textContent = "Not enough cash.";
    } else {
        alert("The order is created! Your change is " + change + " pesos.");
    }
});