import React from "react";
import "./App.css";
import { Login, Home } from "./components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {false && <Login />}
        {true && <Home />}
      </div>
    </ThemeProvider>
  );
}

export default App;
