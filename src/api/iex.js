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

export function StockError({error}) {
  if (error!== null) {
    return(<h1>ERROORRREERRR is : {error}</h1>)
  }else{
    return(<h1></h1>)
  }
}
