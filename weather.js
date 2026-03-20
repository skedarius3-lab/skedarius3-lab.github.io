const latitude = 33.196214;  // Replace with YOUR city's latitude
const longitude = -87.58710; // Replace with YOUR city's longitude

// The API URL asking for 7 days of daily high/low temperatures in Fahrenheit
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`;

let weatherData = null;

async function renderForecast(dailyData) {
    const container = document.getElementById("forecast-container");
    container.innerHTML = ""; 

    const dates = dailyData.time;
    const maxTemps = dailyData.temperature_2m_max;
    const minTemps = dailyData.temperature_2m_min;

    for (let i = 0; i < dates.length; i++) {
        const dayDiv = document.createElement("div");
        
        dayDiv.innerHTML = `
            <p><strong>Date:</strong> ${dates[i]}</p>
            <p><strong>High:</strong> ${maxTemps[i]}°F | <strong>Low:</strong> ${minTemps[i]}°F</p>
            <hr>
        `;
        
        container.appendChild(dayDiv);
    }
}

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

document.getElementById("analyze-btn").addEventListener("click", () => {
    if (!weatherData) return; 

    const maxTemps = weatherData.temperature_2m_max;
    
    // Find the highest number in the array
    const absoluteMax = Math.max(...maxTemps);
    
    // Find the index (position) of that highest temperature
    const hottestIndex = maxTemps.indexOf(absoluteMax);
    
    // Use that same index to find the corresponding date
    const hottestDate = weatherData.time[hottestIndex];

    document.getElementById("analysis-result").innerHTML = 
        `🔥 The hottest day this week will be ${hottestDate} with a high of ${absoluteMax}°F!`;
});
