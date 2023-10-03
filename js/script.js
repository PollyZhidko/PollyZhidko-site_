document.addEventListener("DOMContentLoaded", function () {
    const initialInvestmentInput = document.getElementById("initial-investment");
    const currentPriceInput = document.getElementById("current-value"); // Змінено id на "current-value"
    const quantityInput = document.getElementById("quantity"); // Додано id="quantity" в HTML
    const calculateButton = document.getElementById("calculate-button");
    const profitResult = document.getElementById("profit"); // Змінено id на "profit"

    calculateButton.addEventListener("click", function () {
        const initialInvestment = parseFloat(initialInvestmentInput.value);
        const currentPrice = parseFloat(currentPriceInput.value);
        const quantity = parseFloat(quantityInput.value); // Використовуємо правильний ідентифікатор

        if (isNaN(initialInvestment) || isNaN(currentPrice) || isNaN(quantity)) {
            profitResult.textContent = "Invalid input";
            return;
        }

        const profit = (currentPrice * quantity) - initialInvestment;
        profitResult.textContent = `$${profit.toFixed(2)}`;
    });
});
