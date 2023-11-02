import React, { FC } from 'react';
import { Pokemon } from '../Interfaces/Interface';

type CardPokemonProps = {
    pokemon: Pokemon;
}

const CardPokemon: FC<CardPokemonProps> = ({ pokemon }) => {
    return (
        <div className="bg-gray-200 w-64 h-64 rounded-3xl flex flex-col justify-center items-center border border-gray-300" /*style={{ boxShadow: "rgba(60, 64, 67, 0.30) 0px 1px 2px 0px, rgba(60, 64, 67, 0.10) 0px 2px 6px 2px" }}*/>
            <h2 className='text-xs font-bold text-white bg-blue-500 rounded-full p-1'>#{pokemon.id}</h2>
            <div className=''>
                <img className='w-36' src={pokemon.img} alt={pokemon.name} />
            </div>
            <div className='font-bold text-white text-2xl bg-zinc-500 rounded-2xl'>
                <h1 className='py-1 px-5'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            </div>
            <div className='flex gap-3 font-semibold'>
                <h2 className='text-xs text-white mt-2 bg-[#DE1036] py-1 px-4 rounded-md'>{pokemon.tipoUno.toLocaleUpperCase()}</h2>
            </div>
        </div>
    )
}

export { CardPokemon }
