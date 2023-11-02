import React, { FC, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { CardPokemon } from '../Components/CardPokemon';

const ListPokemon: FC = () => {
    const { pokemones } = useContext(AppContext)

    return (
        <div className='flex flex-wrap justify-center mt-8 gap-8'>
            {pokemones.map((pokemon, id) => (<CardPokemon key={id} pokemon={pokemon} />
            ))}
        </div>
    )
}

export { ListPokemon }
