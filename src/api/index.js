import axios from 'axios';
import {
    TimeStampToWeekDay,
    TimeStampToHoursMinutes
} from '../utils/dateHelpers';



const weatherAPIKey = process.env.WEATHER_API_KEY
const weatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    headers: {'Content-Type': 'application/json'}
});

const locationAPIKey = process.env.LOCATION_API_KEY
const locationAPI = axios.create({
    baseURL: 'https://api.opencagedata.com/geocode/v1/',
    headers: {'Content-Type': 'application/json'}
});


export const getDailyWeatherByCountry = async ({city, country}, success, failure) => {
    const {data: locData} = await locationAPI.get(`json?q=${country}, ${city}&key=${locationAPIKey}`);
    const {lat, lng} = locData.results[0].geometry;
    const {data: weatherData} = await weatherAPI.get(`onecall?lat=${lat}&lon=${lng}&units=metric&exclude=hourly,alerts,current,minutely&appid=${weatherAPIKey}`)
    console.log(weatherData.daily);
    const formatedDays = weatherData.daily.map(({temp, clouds, dt, sunrise, sunset, wind_deg, wind_speed}) => ({
        temp: temp.day,
        cloudLevel: clouds,
        weekDay: TimeStampToWeekDay(dt),
        sunrise: TimeStampToHoursMinutes(sunrise),
        sunset: TimeStampToHoursMinutes(sunset),
        windDeg: wind_deg,
        windSpeed: wind_speed
    }))
    console.log(weatherData.daily[0])
    console.log(formatedDays[0])
}
