// script.js
const apiUrl = "https://api-uct.mukuru.com/taurus/v1/products/price-check";
const queryParams = {
    pay_in_country: "ZA",
    pay_out_country: "ZW",
    pay_in_currency: "ZAR",
    pay_out_currency: "USD",
    pay_in_amount: "100",
    pay_out_amount: "100",
    type: "bank-top-up",
    page_size: 10,
    page: 1
};

// Function to fetch data from the API
async function fetchData() {
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${apiUrl}?${queryString}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display data on the webpage
async function displayData() {
    const dataContainer = document.getElementById("data-container");
    const apiData = await fetchData();

    apiData.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <h2>${item.description}</h2>
            <p>Calculator Type: ${item.calculatorType}</p>
            <!-- ... other properties you want to display -->
        `;
        dataContainer.appendChild(itemDiv);
    });
}

// Call the function to display data when the page loads
displayData();
