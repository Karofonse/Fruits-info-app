import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ListadoFrutas from './components/ListadoFrutas/ListadoFrutas'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route exact path="/:id" element={<About />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
