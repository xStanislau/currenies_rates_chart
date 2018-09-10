import {
  getLastWeekDate,
  getJSON,
  mapDates,
  mapCurrencyRates
} from './utils';
import { updateChart } from './chart'

export function getCurrencyRateForTimeInterval(endpointUrl, startDate, endDate) {
  const queryParametrs = `?startDate=${startDate}&endDate=${endDate}`
  const url = endpointUrl + queryParametrs;

  return getJSON(url);
}

export function getCurrencyRateForLastWeek(endpointUrl) {
  const { startDate, endDate } = getLastWeekDate();
  return getCurrencyRateForTimeInterval(endpointUrl, startDate, endDate)
}

export async function displayCurrencyForInterval(chart, currency, startDate, endDate) {
  const currencyRatesJson = await getCurrencyRateForTimeInterval(currency.END_POINT, startDate, endDate);
  const currencyLabel = `${currency.SCALE} ${currency.TEXT_CODE}`;
  const dateLabels = mapDates(currencyRatesJson);
  const currencyRates = mapCurrencyRates(currencyRatesJson);
  const data = {
    label: currencyLabel,
    borderColor: 'rgb(99, 99, 232)',
    data: currencyRates,
    fill: false
  }
  updateChart(chart, dateLabels, data);
}

export async function displayCurrencyRateForLastWeek(chart, currency) {
  const currencyRatesJson = await getCurrencyRateForLastWeek(currency.END_POINT);
  const currencyLabel = `${currency.SCALE} ${currency.TEXT_CODE}`
  const dateLabels = mapDates(currencyRatesJson);
  const currencyRates = mapCurrencyRates(currencyRatesJson);
  const data = {
    label: currencyLabel,
    borderColor: 'rgb(99, 99, 232)',
    data: currencyRates,
    fill: false
  }
  updateChart(chart, dateLabels, data);
}