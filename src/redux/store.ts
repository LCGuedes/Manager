import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const persistConfig = { key: "root", storage: AsyncStorage };

const PersistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: PersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type rootState = ReturnType<typeof store.getState>;

export default store;
