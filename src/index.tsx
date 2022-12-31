import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';

import './index.scss';
import createBrowserRouter from './utils/router'
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const THEME = createTheme({
  typography: {
   "fontFamily": `"Lato", "-apple-system", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

root.render(
  <ThemeProvider theme={THEME}>
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter}/>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

// Material UI
