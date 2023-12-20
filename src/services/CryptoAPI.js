import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'f321042e27mshed0f3deb1982c4cp112b4djsndd8dab6ab0bd',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com/coins'

const createRequest=(url)=>({url, headers:cryptoApiHeaders})

export const CryptoApi=createApi({
    reducerPath:'CryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>{
        getCryptos: builder.query({
            query:()=> createRequest('/coins')
        })
    }
})

export const {
    useGetCryptosQuery,
} = createApi;