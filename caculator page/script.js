// Fetch the JSON data from the API
fetch('price-check.json')
  .then(response => response.json())
  .then(data => {
    const sendCountrySelect = document.getElementById('sendCountry');
    const receiveCountrySelect = document.getElementById('receiveCountry');
    const productTypeSelect = document.getElementById('productType');
    const productTypeSelects = document.getElementById('productTypess');
    const productTypeTypessSelect = document.getElementById('productTypess');


    const uniqueSendingCountryCodes = [...new Set(data.items.map(item => item.payInCountryCode))];
    const uniqueReceivingCountryCodes = [...new Set(data.items.map(item => item.payOutCountryCode))];

    console.log('Unique Sending Country Codes:', uniqueSendingCountryCodes);
    console.log('Unique Receiving Country Codes:', uniqueReceivingCountryCodes);

    // Populate sending country select options
    uniqueSendingCountryCodes.forEach(countryCode => {
      const option = document.createElement('option');
      option.value = countryCode;
      option.textContent = countryCode;
      sendCountrySelect.appendChild(option);
    });

    // Extract unique descriptions for populating the product type select
    const uniqueDescriptions = [...new Set(data.items.map(item => item.description))];

    // Populate the product type select options using unique descriptions
    uniqueDescriptions.forEach(description => {
      const option = document.createElement('option');
      option.value = description;
      option.textContent = description;
      productTypeSelect.appendChild(option);
    });

    // Update receiving country options when product type changes
    productTypeSelect.addEventListener('change', () => {
      const selectedDescription = productTypeSelect.value;

      const uniqueProductTypes = [...new Set(data.items
        .filter(item => item.description === selectedDescription)
        .map(item => item.type)
      )];

      

      // Filter unique receiving country codes based on the selected description
      const uniqueReceivingCountryCodes = [...new Set(data.items
        .filter(item => item.description === selectedDescription)
        .map(item => item.payOutCountryCode)
      )];

      // Clear and repopulate receiving country select options
      receiveCountrySelect.innerHTML = '';
      uniqueReceivingCountryCodes.forEach(countryCode => {
        const option = document.createElement('option');
        option.value = countryCode;
        option.textContent = countryCode;
        receiveCountrySelect.appendChild(option);
      });
    });

// Calculate function to be triggered when the Calculate button is clicked
document.getElementById('calculate').addEventListener('click', () => {
  const sendCountryCode = sendCountrySelect.value;
  const receiveCountryCode = receiveCountrySelect.value;
  const selectedDescription = productTypeSelect.value;
  const sendAmount = parseFloat(document.getElementById('sendAmount').value);

  // Filter the JSON data based on the selected criteria
  const filteredItems = data.items.filter(item =>
    item.payInCountryCode === sendCountryCode &&
    item.payOutCountryCode === receiveCountryCode &&
    item.description === selectedDescription
  );

  // Display the results in the 'result' container
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = ''; // Clear previous results

  // Calculate total received amount based on the selected exchange rate and sending amount
  let totalReceivedAmount = 0;

  filteredItems.forEach(item => {
    const paragraph = document.createElement('p');
    paragraph.textContent = `Description: ${item.description}\n`;
    paragraph.textContent += `Sending Amount: ${sendAmount} ${item.payInCurrencyCode}\n`;
    paragraph.textContent += `Receiving Amount: ${item.payOutAmount} ${item.payOutCurrencyCode}\n`;
    paragraph.textContent += `Exchange Rate: ${item.rate.rate}\n`;
    paragraph.textContent += `Fee: ${item.fee.amount} ${item.fee.currencyCode}\n`;
    paragraph.textContent += `Pay In Amount Message: ${item.payInAmountMessage}\n`;
    paragraph.textContent += `Pay Out Amount Message: ${item.payOutAmountMessage}\n`;
    // Include additional details as needed
    // ...

    resultContainer.appendChild(paragraph);

    // Calculate and accumulate total received amount
    totalReceivedAmount += parseFloat(item.payOutAmount);
  });

  // Display the total received amount
  const totalReceivedParagraph = document.createElement('p');
  totalReceivedParagraph.textContent = `Total Received Amount: ${totalReceivedAmount.toFixed(2)} ${receiveCurrencyCode}`;
  resultContainer.appendChild(totalReceivedParagraph);

  // Display the calculator type based on the selected description
  calculatorTypeDisplay.textContent = uniqueCalculatorTypes.length > 0
    ? `Calculator Type: ${uniqueCalculatorTypes[0]}`
    : 'Calculator Type: N/A';
});

// Display error messages or success messages based on the calculations
// ...

// Clear previous results if needed
// ...


    // Display error messages or success messages based on the calculations
    // ...

    // Clear previous results if needed
    // ...

  })
  .catch(error => console.error('Error fetching data:', error));
