import { configureStore } from "@reduxjs/toolkit";

import { CryptoApi } from "../services/CryptoAPI";

export default configureStore({
    reducer:{
        [CryptoApi.reducerPath]:CryptoApi.reducer,
    },
})