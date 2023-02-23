

import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite'
import viewedReducer from "./slices/view";

const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        viewed: viewedReducer
    },
})
export default store