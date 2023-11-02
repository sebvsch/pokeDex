import { createContext, useEffect, useState } from 'react';
import { Pokemon } from '../Interfaces/Interface';

type AppContextType = {
    pokemones: Pokemon[]
}

export const AppContext = createContext<AppContextType>(
    {} as AppContextType
);

export function AppContextProvider({ children }: any) {

    const [pokemones, setPokemones] = useState<Pokemon[]>([])

    const poke = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`)
        const data = await res.json();

        const { results } = data

        const newPokemons = results.map(async (pokemon: Pokemon) => {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.front_default,
                peso: poke.weight,
                tipoUno: poke.types[0].type.name,
            }
        })
        setPokemones(await Promise.all(newPokemons))

    }

    useEffect(() => {
        poke()
    }, [])

    return (
        <AppContext.Provider value={{
            pokemones,
        }}>
            {children}
        </AppContext.Provider>
    )
}