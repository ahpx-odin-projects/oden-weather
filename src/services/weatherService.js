//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/beijing?key=4JADYSQFJBLV5TNHBEPMXVB9Y&unitGroup=metric
//btw thx to random guy expose this on github lol

export async function getWeather(city) {
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

let w = await getWeather('Beijing')
console.log(w)
