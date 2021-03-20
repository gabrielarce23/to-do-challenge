import React from "react";

import "./App.css";
import Layout from "./containers/Layout/Layout";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles'
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {main: teal[500]},
    secondary: {main: teal[50]}
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
