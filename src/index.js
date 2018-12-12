import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Import react-router-dom
import { BrowserRouter } from 'react-router-dom'

// Wrap browserrouter around the App component to allow Route components
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
