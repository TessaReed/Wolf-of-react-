import React from 'react';

export default function StockError({error}) {
  if (error!== null) {
    return(<h1>ERROORRREERRR is : {error}</h1>)
  }else{
    return(<h1></h1>)
  }
}
