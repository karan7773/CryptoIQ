import React from 'react'
import { useGetCryptoDetailsQuery } from '../services/CryptoAPI'
import Loader from './Loader';

function Description({coinId}) {
    const {data:CoinDetail,isFetching}=useGetCryptoDetailsQuery(coinId);
    console.log(CoinDetail);
    if (isFetching) return <Loader/>
    return (CoinDetail?.data?.coin.description)
    
}

export default Description
