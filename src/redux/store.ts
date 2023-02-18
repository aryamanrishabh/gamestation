import { PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { useDispatch } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./slices";

const persistConfig = {
  key: "gamestation",
  storage,
  whiteList: [],
};

const reducer = (state: any, action: PayloadAction) => {
  if (action.type === "persist/REHYDRATE" || action.type === HYDRATE) {
    return { ...state };
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export const wrapper = createWrapper(() => store, { debug: false });
