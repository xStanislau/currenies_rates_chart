function handleError(response) {
  if(!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export function getJSON(url) {
  return fetch(url)
          .then(handleError)
          .then(response => response.json())
          .catch(error => console.error(error))
}

export function formatDate(date) {
  return date.split('.').reverse().join('-');
}

export function getLastWeekDate() {
  const date = new Date();
  const endDate = formatDate(date.toLocaleDateString());
  date.setDate(date.getDate() - 6);
  const startDate = formatDate(date.toLocaleDateString());
  return {
    startDate: startDate,
    endDate: endDate
  }
}

export function mapDates(currencyRatesJson) {
  const dates = currencyRatesJson.map((rates) => {
    const date = rates.Date.split('T')
    return date[0];
  });
  return dates;
}

export function mapCurrencyRates(currencyRatesJson) {
  const currencyRates = currencyRatesJson.map((rates) => {
    return rates.Cur_OfficialRate;
  });
  return currencyRates;
}

export function startDateIsBigger(startDateString, endDateString) {
  const firstDate = Date.parse(startDateString);
  const secondDate = Date.parse(endDateString);
  if (firstDate > secondDate) {
    return true;
  } else {
    return false;
  }
}

