import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/styles/globalStyle'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Spots from './pages/Spots'
import Header from './components/Header'
import Footer from './components/Footer'
import Conditions from './pages/Conditions'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/à-propos" element={<Contact />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/conditions/:spotName" element={<Conditions />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
