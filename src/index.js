import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import setupInterceptors from "globals/interceptors";
import store from 'store';
import reportWebVitals from "./reportWebVitals";
import ComponentsOverrides from "./theme/overrides";
import shadows from "./theme/shadows";
import customShadows from "./theme/customShadows";
import palette from "./theme/palette";
import App from "./App";
import "./index.css";

setupInterceptors(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeOptions = ({
  palette: palette,
  shape: { borderRadius: 6 },
  shadows: shadows(),
  customShadows: customShadows(),
});

const theme = createTheme(themeOptions);
theme.components = ComponentsOverrides(theme);

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
