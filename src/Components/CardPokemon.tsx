import React, { FC } from 'react';
import { Pokemon } from '../Interfaces/Interface';
import { tiposPorColor } from '../ColorPorTipos';

type CardPokemonProps = {
    pokemon: Pokemon;
}



const CardPokemon: FC<CardPokemonProps> = ({ pokemon }) => {


    return (
        <div className=" bg-gray-200 w-64 h-64 rounded-3xl flex flex-col justify-center items-center border border-gray-300" /*style={{ boxShadow: "rgba(60, 64, 67, 0.30) 0px 1px 2px 0px, rgba(60, 64, 67, 0.10) 0px 2px 6px 2px" }}*/>
            <h2 className='text-xs font-bold text-white bg-blue-500 rounded-full p-1'>#{pokemon.id}</h2>
            <div className=''>
                <img className='w-36' src={pokemon.img} alt={pokemon.name} />
            </div>
            <div className='font-bold text-gray-500 text-2xl rounded-2xl'>
                <h1 className='py-1 px-5'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            </div>
            <div className='flex gap-3 font-semibold'>
                {pokemon.tipos.map((tipo, id) => (
                    <h2 key={id} className={`text-xs text-white mt-2 py-1 px-4 rounded-md ${tiposPorColor[tipo]}`}>
                        {tipo.toUpperCase()}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export { CardPokemon }
