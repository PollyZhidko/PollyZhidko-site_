document.addEventListener("DOMContentLoaded", function () {
    const initialInvestmentInput = document.getElementById("initial-investment");
    const currentPriceInput = document.getElementById("current-price");
    const quantityInput = document.getElementById("quantity");
    const calculateButton = document.getElementById("calculate-button");
    const profitResult = document.getElementById("profit-result");

    calculateButton.addEventListener("click", function () {
        const initialInvestment = parseFloat(initialInvestmentInput.value);
        const currentPrice = parseFloat(currentPriceInput.value);
        const quantity = parseFloat(quantityInput.value);

        if (isNaN(initialInvestment) || isNaN(currentPrice) || isNaN(quantity)) {
            profitResult.textContent = "Invalid input";
            return;
        }

        const profit = (currentPrice * quantity) - initialInvestment;
        profitResult.textContent = `$${profit.toFixed(2)}`;
    });
});

