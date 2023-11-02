import React from 'react'
import { AppContextProvider } from './Context/AppContext'
import { ListPokemon } from './Pages/ListPokemon'
import { NavBar } from './Components/NavBar'


function App() {

  return (
    <AppContextProvider>
      <NavBar />
      <ListPokemon />
    </AppContextProvider>

  )
}

export default App