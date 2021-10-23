import React from 'react';
import 'materialize-css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import AppRoute from "./routes/AppRoute";

const App = () => {

  return (
    <Provider store={store}>
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;


