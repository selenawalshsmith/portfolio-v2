//import { useState } from "react";
import About from "./components/About/About.tsx";
import Experience from "./components/Experience/Experience.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, colors, AppBar } from "@mui/material";
//import theme from './style/theme.ts';
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal[900],
    },
    secondary: {
      main: colors.yellow[700],
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main id="section-container">
        <About />
        <Experience />
      </main>
    </ThemeProvider>
  );
};

export default App;
