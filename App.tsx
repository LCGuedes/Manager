import { StatusBar } from "expo-status-bar";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { Text } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>loading...</Text>}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
