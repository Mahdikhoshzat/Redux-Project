import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Reducer from './Store/reducer'


const store = createStore(Reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
