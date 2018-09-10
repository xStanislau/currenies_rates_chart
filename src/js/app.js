import { startDateIsBigger } from './utils';
import { displayCurrencyForInterval, displayCurrencyRateForLastWeek } from './currency_rates';
import { CURRENCIES } from "./constants";
import { chart } from './chart'


const curencies = document.getElementById('currency');
curencies.addEventListener('change', (event) => {
	const currentCurrency = curencies.options[currency.selectedIndex].value;
	displayCurrencyRateForLastWeek(chart, CURRENCIES[currentCurrency])
});

const form = document.querySelector('.currency-widget');
const startDateInput = document.querySelector('.start-date');
const endDateInput = document.querySelector('.end-date');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const currentCurrency = currency.options[currency.selectedIndex].value;
	const startDate = startDateInput.value;
	const endDate = endDateInput.value;

	if (!startDate) {
		alert('Выберите дату начала!');
		return;
	} else if (!endDate) {
		alert('Выберите дату окончания!');
		return;
	} else if (startDateIsBigger(startDate, endDate)) {
		alert("Введите корректные даты!");
		return;
	}
	displayCurrencyForInterval(chart, CURRENCIES[currentCurrency], startDate, endDate);
});

