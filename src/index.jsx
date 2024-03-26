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
import APropos from './pages/APropos'
import Background from './components/Background'

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
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
