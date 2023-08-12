document.addEventListener("DOMContentLoaded", function () {
    const sendCountrySelect = document.getElementById("sendCountry");
    const receiveCountrySelect = document.getElementById("receiveCountry");
    const productTypeSelect = document.getElementById("productType");
    const sendAmountInput = document.getElementById("sendAmount");
    const receiveAmountInput = document.getElementById("receiveAmount");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const sendCurrencySpan = document.getElementById("sendCurrency");
    const receiveCurrencySpan = document.getElementById("receiveCurrency");
  
    // Fetch and populate data
    fetchData("countries.json").then((countriesData) => {
      populateSelectOptions(sendCountrySelect, countriesData.items, "code", "name");
      populateSelectOptions(receiveCountrySelect, countriesData.items, "code", "name");
    });
  
    fetchData("product-types.json").then((productTypesData) => {
      populateSelectOptions(productTypeSelect, productTypesData.items, "code", "name");
    });
  
    fetchData("currencies.json").then((currenciesData) => {
      const currencyOptions = Object.values(currenciesData.items).map(currency => {
        return `<option value="${currency.code}">${currency.name} (${currency.symbol})</option>`;
      });
      sendCountrySelect.innerHTML += currencyOptions.join("");
      receiveCountrySelect.innerHTML += currencyOptions.join("");
    });
  
    calculateButton.addEventListener("click", calculateReceiveAmount);
  
    // Rest of the code remains the same...
  });
  
  