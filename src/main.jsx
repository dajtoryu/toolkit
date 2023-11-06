import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { countStore } from "./countStore";

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={countStore}>
            <App />

   </Provider>
)
