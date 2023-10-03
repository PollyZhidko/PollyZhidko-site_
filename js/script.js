document.addEventListener("DOMContentLoaded", function () {
    const initialInvestmentInput = document.getElementById("initial-investment");
    const currentValueInput = document.getElementById("current-value");
    const profitInput = document.getElementById("profit");
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", function () {
        const initialInvestment = parseFloat(initialInvestmentInput.value);
        const currentValue = parseFloat(currentValueInput.value);

        if (!isNaN(initialInvestment) && !isNaN(currentValue)) {
            const profit = currentValue - initialInvestment;
            profitInput.value = profit.toFixed(2);
        } else {
            profitInput.value = "Invalid input";
        }
    });
});

