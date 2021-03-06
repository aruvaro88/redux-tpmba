import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { createStore } from "redux"
import { Provider } from "react-redux"
import allReducers from "./components/reducers/index"
//create general state with all reducers on it (moviesList and filter) and make it visible on redux devtools extension
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
