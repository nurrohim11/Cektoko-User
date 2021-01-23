import React from 'react'
import CardLocation from './CardLocation'
import CardMerchant from './CardMerchant'
import CardProduk from './CardProduk'

const CardItem = ({type,params}) => {
  if(type === 'location'){
    return <CardLocation/>
  }
  if(type=== 'merchant'){
    return <CardMerchant/>
  }
  if(type === 'produk'){
    return <CardProduk params={params}/>
  }
  return <CardLocation/>
}

export default CardItem