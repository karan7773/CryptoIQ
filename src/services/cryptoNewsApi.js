import { createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query";

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'f321042e27mshed0f3deb1982c4cp112b4djsndd8dab6ab0bd',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl= 'https://newsnow.p.rapidapi.com';

const createRequest=(url)=>({url, headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'CryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        }),
    })
});

export const {useGetCryptoNewsQuery}=cryptoNewsApi;