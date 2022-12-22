import moment from "moment";

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDate = new Date();
let firstweekday = weekdays[currentDate.getDay() + 1].substring(0, 3);
let secondweekday = weekdays[currentDate.getDay() + 2].substring(0, 3);

const getUpcomingDaysForecast = (data) => ({
  nextdaytemperature: Math.round(data.forecast.forecastday[1].day.maxtemp_c),
  firstImgUrl: data.forecast.forecastday[1].day.condition.icon,
  firstweekday: firstweekday,
  twodaystemperature: Math.round(data.forecast.forecastday[2].day.maxtemp_c),
  secondImgUrl: data.forecast.forecastday[2].day.condition.icon,
  secondweekday: secondweekday,
});

export default getUpcomingDaysForecast;
