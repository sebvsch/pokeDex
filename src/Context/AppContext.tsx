import { createContext, useEffect, useState } from 'react';
import { Pokemon } from '../Interfaces/Interface';

type AppContextType = {
    pokemones: Pokemon[]
    filtrar: Pokemon[]
    buscarPokemon: (e: React.ChangeEvent<HTMLInputElement>) => void
    buscar: string
}

export const AppContext = createContext<AppContextType>(
    {} as AppContextType
);

export function AppContextProvider({ children }: any) {

    const [pokemones, setPokemones] = useState<Pokemon[]>([]);
    const [buscar, setBuscar] = useState<string>("");


    const poke = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=89&offset=0`)
        const data = await res.json();

        const { results } = data

        const newPokemons = results.map(async (pokemon: Pokemon) => {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            const tipos = poke.types.map((tipo: any) => tipo.type.name);

            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.front_default,
                peso: poke.weight,
                tipos: tipos
            }
        })
        setPokemones(await Promise.all(newPokemons))

    }

    const buscarPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBuscar(e.target.value)
    };

    const filtrar = pokemones.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(buscar.toLowerCase())
    );

    useEffect(() => {
        poke()
    }, [])

    return (
        <AppContext.Provider value={{
            pokemones,
            filtrar,
            buscarPokemon,
            buscar,
        }}>
            {children}
        </AppContext.Provider>
    )
}