import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Test from "../components/Test";
import Results from "../components/Results";
import { TestContext } from "../contexts/TestContext";
import LandingPage from "../components/LandingPage";

// theme config for MUI
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function App() {
  const { testDone } = useContext(TestContext);

  return (
    <ThemeProvider theme={theme}>
      <main className="h-screen font-krub">
        {testDone ? <Results /> : <LandingPage />}
      </main>
    </ThemeProvider>
  );
}

export default App;
