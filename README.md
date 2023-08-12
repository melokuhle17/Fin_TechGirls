# User-Friendly Remittance Calculator

![Remittance Calculator](screenshot.png)

Welcome to the User-Friendly Remittance Calculator project! This application aims to provide a hassle-free way to calculate remittance amounts between different countries. Whether you're an expatriate sending money back home, a traveler budgeting for your trip, or just curious about exchange rates, this calculator has got you covered.

## Features

- **User-Friendly Interface:** Our intuitive interface makes it easy for users of all backgrounds to quickly calculate remittance amounts.

- **Real-Time Exchange Rates:** The calculator utilizes real-time exchange rate data to ensure accuracy in calculations.

- **Multiple Currencies:** Support for a wide range of currencies, allowing you to calculate remittances for various destination countries.

- **Interactive Map:** Explore a world map with selectable countries to easily choose your source and destination locations.

- **Transparency:** All calculations are broken down, showing the exchange rate used and any applicable fees, so you understand exactly how the remittance amount is derived.

- **Responsive Design:** Accessible on various devices, including desktops, tablets, and mobile phones.

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript
- Backend: Python Flask
- Exchange Rate Data: Countries API (more details below)
- Mapping: Leaflet.js

## Getting Started

1. Clone the repository: `git clone https://github.com/yourusername/remittance-calculator.git`
2. Navigate to the project directory: `cd remittance-calculator`
3. Set up a virtual environment (recommended): `python -m venv venv`
4. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS and Linux: `source venv/bin/activate`
5. Install the required packages: `pip install -r requirements.txt`
6. Run the application: `python app.py`
7. Open your web browser and go to `http://localhost:5000`

## Using the Countries API

This project utilizes the Countries API to fetch the necessary exchange rate data. The API provides up-to-date information on countries, currencies, and exchange rates. You can find more information about the API and how to use it in the [API Documentation](https://api.example.com/docs).

To use the API in this project, you need to sign up for an API key on the API provider's website. Once you have your API key, insert it into the appropriate configuration file or environment variable in the project.

## Contributing

We welcome contributions to improve the User-Friendly Remittance Calculator. If you find a bug, have an enhancement in mind, or want to add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your changes"`.
4. Push the branch: `git push origin feature/your-feature-name`.
5. Create a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

We hope you find the User-Friendly Remittance Calculator helpful and easy to use. If you encounter any issues or have suggestions for improvement, please feel free to open an issue on the GitHub repository. Thank you for using our calculator!

Project maintained by [Your Name](https://github.com/yourusername)
# Fin_TechGirls
# API Data Display Example

This example demonstrates how to use JavaScript to fetch data from an API and display it on a webpage.

## Instructions

1. Open `api.html` in a web browser.
2. The JavaScript logic is in the `api.js` file.
3. Adjust the query parameters in `api.js` to customize the API request.
4. Run the example and observe the displayed data.

## API Documentation

API Endpoint: https://api-uct.mukuru.com/taurus/v1/products/price-check

### Query Parameters

- `pay_in_country`: Country ISO2 the customer is sending from
- `pay_out_country`: Country ISO2 the beneficiary is receiving in
- `pay_in_currency`: Currency ISO3 the customer will be paying with
- ... (other parameters as described in the API documentation)
