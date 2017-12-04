import axios from 'axios';
import React from 'react';

//axios is used to talk to api's
const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
});

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote`)
    .then(res => res.data)
}

export function loadLogo(symbol) {
  return api.get(`/stock/${symbol}/logo`)
    .then(res => res.data)
}
