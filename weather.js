const latitude = 33.196214;  // Replace with YOUR city's latitude
const longitude = -87.58710; // Replace with YOUR city's longitude

// The API URL asking for 7 days of daily high/low temperatures in Fahrenheit
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`;

let weatherData = null;

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log("Data successfully retrieved:", data);
        weatherData = data.daily; 
        
        // We will write this function in Step 4!
        renderForecast(weatherData); 

    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}

// Run the function
getWeatherData();
