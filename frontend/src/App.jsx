import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Home from './pages/Home'
import NavBar from './components/NavBar'




const App = () => {
  return (
    <Router>
      <TopNav />
      <NavBar />
      <Routes>
        <Route path='' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
