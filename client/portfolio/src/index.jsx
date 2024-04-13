import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Themes/themeContext';

const theme = {
  background: "#EAF2FB",
  dominantColor: "#2D7DD2",
  primaryColor: '#F45D01',
  secondaryColor: "#A2C945",
  successColor: "#20AC6B",
  dangerColor: "#AE1E2C",
  warningColor: "#CC9900",
  infoColor: "#0AA3C2",
  backgroundText: "#000000",
  dominantText: "#FFFFFF",
  primaryText: "#FFFFFF",
  secondaryText: "#000000",
  successText: "#FFFFFF",
  dangerText: "#FFFFFF",
  warningText: "#000000",
  infoText: "#FFFFFF",
  hoverColor: "#ff4500",

} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
