import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { Theme } from "@radix-ui/themes";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Theme>
        <GlobalStyle />

        <Transactions />
      </Theme>
    </ThemeProvider>
  );
}
