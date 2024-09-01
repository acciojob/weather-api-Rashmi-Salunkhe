//your JS code here. If required.
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'YOUR_API_KEY';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract the weather description from the data
            const weatherDescription = data.weather[0].description;
            // Display the weather data in the required format
            document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weatherData').textContent = 'Unable to fetch weather data at the moment.';
        });
});
