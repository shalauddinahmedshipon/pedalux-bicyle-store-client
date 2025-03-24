import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import authReducer from './features/auth/authSlice'
import cartReducer from './features/cart/cartSlice'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'auth',
  storage,
}
 
const persistedAuthReducer = persistReducer(persistConfig,authReducer)


export const store = configureStore({
  reducer: {
    auth:persistedAuthReducer,
    cart:cartReducer,
   [baseApi.reducerPath]:baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }
    ).concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)