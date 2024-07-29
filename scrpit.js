function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    const rates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.14
    };

    const result = (amount * rates[toCurrency] / rates[fromCurrency]).toFixed(2);
    
    document.getElementById('result').innerHTML = 
        `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}
