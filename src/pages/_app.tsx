import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { persistor, store } from "@redux/store";
import "@styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
