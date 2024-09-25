import register from "./modules/buttonActions.js";
import { getWeather, getWindDirection } from "./services/weatherService.js";
import { getTemperatureDescription, getUVIndexDescription } from "./services/measurementService.js";

register()

//set default value
let weather = await getWeather('Beijing')
setWeather(weather)

// Add click event listeners to all location buttons
document.querySelectorAll('#location-list .location').forEach(button => {
    button.addEventListener('click', async () => {
        const location = button.innerText;
        const weatherData = await getWeather(location);
        setWeather(weatherData);
    });
});

// Add a mutation observer to handle dynamically added buttons
const locationList = document.querySelector('#location-list');
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('location')) {
                    node.addEventListener('click', async () => {
                        const location = node.innerText;
                        const weatherData = await getWeather(location);
                        setWeather(weatherData);
                    });
                }
            });
        }
    });
});

observer.observe(locationList, { childList: true });


function setWeather(weather) {
    const title = `${weather.address} - Weather Forecast`;
    document.title = title;
    setValue('weather-summary-temprature-value', weather.days[0].temp);
    setValue('weather-summary-condition-value', weather.days[0].conditions);
    setValue('weather-summary-description-value', weather.description);

    setValue('weather-precipitation-value', weather.days[0].precip);
    setValue('weather-precipitation-probability-value', weather.days[0].precipprob);
    setValue('weather-precipitation-type-value', weather.days[0].preciptype || 'None');

    setValue('weather-wind-speed', weather.days[0].windspeed);
    setValue('weather-wind-direction', getWindDirection(weather.days[0].winddir));
    setValue('weather-pressure-value', weather.days[0].pressure);
    setValue('weather-humidity', weather.days[0].humidity);

    setValue('weather-uv-index-value', weather.days[0].uvindex);
    
    setValue('weather-uv-description-value', getUVIndexDescription(weather.days[0].uvindex))
    setValue('weather-outdoor-description-value', getTemperatureDescription(weather.days[0].temp))

    // Clear existing hourly forecast
    const hourlyForecastList = document.querySelector('#weather-hourly-value');
    hourlyForecastList.innerHTML = '';

    // Get the next 24 hours of forecast
    const next24Hours = weather.days[0].hours.slice(0, 24);

    // Create and append list items for each hour
    next24Hours.forEach(hour => {
        const listItem = document.createElement('li');
        
        const hourSpan = document.createElement('span');
        hourSpan.className = 'weather-hourly-hour-value';
        hourSpan.textContent = new Date(hour.datetimeEpoch * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const tempDiv = document.createElement('div');
        const tempSpan = document.createElement('span');
        tempSpan.className = 'weather-hourly-temperature-value';
        tempSpan.textContent = Math.round(hour.temp);
        const unitSpan = document.createElement('span');
        unitSpan.textContent = '°C';
        tempDiv.appendChild(tempSpan);
        tempDiv.appendChild(unitSpan);
        
        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'weather-hourly-condition-value';
        conditionSpan.textContent = hour.conditions;
        
        listItem.appendChild(hourSpan);
        listItem.appendChild(tempDiv);
        listItem.appendChild(conditionSpan);
        
        hourlyForecastList.appendChild(listItem);
    });
}

function setValue(id, value) {
    let element = document.querySelector('#' + id)
    element.innerText = value
}