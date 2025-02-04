import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { Theme } from "@radix-ui/themes";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Theme>
        <GlobalStyle />
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </Theme>
    </ThemeProvider>
  );
}
