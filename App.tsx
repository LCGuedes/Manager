import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
