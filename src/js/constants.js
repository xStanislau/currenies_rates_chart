const URL = 'http://www.nbrb.by/';
const PATH = 'API/ExRates/Rates/Dynamics/';
const CURRENCIES_ID = {
  USD: 145,
  EUR: 292,
  RUB: 298
};
export const CURRENCIES = {
  USD: {
    TEXT_CODE: 'USD',
    SCALE: 1,
    END_POINT: `${URL + PATH + CURRENCIES_ID.USD}`
  },
  EUR: {
    TEXT_CODE: 'EUR',
    SCALE: 1,
    END_POINT: `${URL + PATH + CURRENCIES_ID.EUR}`
  },
  RUB: {
    TEXT_CODE: 'RUB',
    SCALE: 100,
    END_POINT: `${URL + PATH + CURRENCIES_ID.RUB}`
  },
};


