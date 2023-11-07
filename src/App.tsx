import React from 'react'
import { AppContextProvider } from './Context/AppContext'
import { ListPokemon } from './Pages/ListPokemon'
import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Acerca } from './Pages/Acerca'
import { Footer } from './Components/Footer'


function App() {

  return (
    <AppContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<ListPokemon />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path='/*' element={<Navigate to='/'/> } />
      </Routes>
      {/* <Footer /> */}
    </AppContextProvider>

  )
}

export default App