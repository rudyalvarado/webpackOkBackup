import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
    <div className="container">
        <h1>Hola</h1>
        <App />
    </div>, 
    document.getElementById("app")
)