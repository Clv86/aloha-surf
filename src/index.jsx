import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/styles/globalStyle'
import Home from './pages/Home'
import Contact from './pages/Contact/Contact'
import Spots from './pages/Spots/Spots'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Conditions from './pages/Conditions/Conditions'
import APropos from './pages/APropos/APropos'
import Background from './components/Background/Background'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Background />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/à-propos"
          element={
            <>
              <APropos />
              <Footer />
            </>
          }
        />
        <Route path="/spots" element={<Spots />} />
        <Route path="/spots/:spotsearch" element={<Spots />} />
        <Route
          path="/conditions/:spotName"
          element={
            <>
              <Conditions />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
