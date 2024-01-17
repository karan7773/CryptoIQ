import { configureStore } from "@reduxjs/toolkit";

import { CryptoApi } from "../services/CryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer:{
        [CryptoApi.reducerPath]:CryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>{
    return(
        getDefaultMiddleware().concat(CryptoApi.middleware),
        getDefaultMiddleware().concat(cryptoNewsApi.middleware)
    )
    }
})