import fetch from 'isomorphic-fetch';
const api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
const type = '&type=accurate';
const appid = '&APPID=1c54d20c58cc378a8bfa28d2870daca1';
const days = '&cnt=5';

export function fetchWeather(city) {
  return fetch(api + city + days + type + appid)
    .then((response) => response.json());
}
