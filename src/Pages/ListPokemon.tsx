import React, { FC, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { CardPokemon } from '../Components/CardPokemon';
import { Pagination } from '../Components/Pagination';


const ListPokemon: FC = () => {
    const { pokemones, filtrar, buscarPokemon, buscar } = useContext(AppContext)

    return (
        <>
            <div>
                <div className=''>
                    <div className='flex justify-center text-3xl font-semibold text-gray-600 mt-4 mb-4'>
                        <h1>Buscar Pokemon</h1>
                    </div>
                    <div className='flex justify-center'>
                        <input className='border rounded-full pr-28 pl-3 py-1' type="text" placeholder="Buscar..." value={buscar} onChange={buscarPokemon} />
                    </div>
                </div>
                {filtrar.length > 0 ? (
                    <div className='flex flex-wrap justify-center mt-8 gap-8'>
                        {filtrar.map((pokemon, id) => (
                            <CardPokemon key={id} pokemon={pokemon} />
                        ))}
                    </div>
                ) : (
                    <div className='mt-44'>
                        <div className='flex justify-center'>
                            <img className='h-24' src="/public/media/snorlax-sleeping.gif" alt="" />
                        </div>
                        <div className='text-center text-gray-400 text-xl mt-4'>
                            <p>No se encontraron resultados.</p>
                        </div>
                    </div>
                )}
                <div className='flex justify-center mt-20'>
                    {/* <Pagination /> */}
                </div>
            </div>
        </>
    )
}

export { ListPokemon }
