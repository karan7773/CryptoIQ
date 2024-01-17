import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'X-rapidapi-key': 'f321042e27mshed0f3deb1982c4cp112b4djsndd8dab6ab0bd',
}

const baseUrl='https://coinranking1.p.rapidapi.com'
 
const createRequest=(url)=>({url, headers:cryptoApiHeaders})

export const CryptoApi=createApi({
    reducerPath:'CryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        
    })
});

export const { 
    useGetCryptosQuery,
} = CryptoApi;