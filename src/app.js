document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');
    const API_KEY = API_KEY;

    convertBtn.addEventListener('click', async () => {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value.toUpperCase();
        const toCurrency = document.getElementById('toCurrency').value.toUpperCase();

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
            const data = await response.json();

            if (data.result === "success" && data.conversion_rates[toCurrency]) {
                const rate = data.conversion_rates[toCurrency];
                const result = (amount * rate).toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
                resultDiv.classList.remove('error');
            } else {
                resultDiv.textContent = 'Invalid currency codes. Please try again.';
                resultDiv.classList.add('error');
            }
        } catch (error) {
            resultDiv.textContent = 'Error fetching exchange rates. Please try again.';
            resultDiv.classList.add('error');
        }
    });
});