//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/beijing?key=4JADYSQFJBLV5TNHBEPMXVB9Y&unitGroup=metric
//btw thx to random guy expose this on github lol

async function getWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=4JADYSQFJBLV5TNHBEPMXVB9Y&unitGroup=metric`;
  let result = fetch(url).then(r => {
    return r.json()
  })
  .then(j => {
    return {
        address: j.address,
        tzoffset: j.tzoffset,
        description: j.description,
        days: j.days
    }
  });

  return result;
}

function getWindDirection(winddir){
    const directions = ['North', 'North-Northeast', 'Northeast', 'East-Northeast', 'East', 'East-Southeast', 'Southeast', 'South-Southeast', 'South', 'South-Southwest', 'Southwest', 'West-Southwest', 'West', 'West-Northwest', 'Northwest', 'North-Northwest'];
    const index = Math.round(((winddir % 360) / 22.5));
    return directions[index % 16];
}

export {getWeather, getWindDirection}

let w = await getWeather('Beijing')
console.log(w)
