import React, { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { CardPokemon } from '../Components/CardPokemon';
import { Paginacion } from '../Components/Paginacion';


const ListPokemon: FC = () => {
    const { pokemones, filtrar, buscarPokemon, buscar } = useContext(AppContext)

    const [pagina, setPagina] = useState<number>(1)
    const [porPagina, setPorPagina] = useState<number>(15)


    const handlePageChange = (selectedPage: number) => {
        setPagina(selectedPage);
    };

    return (
        <>
            <div>
                <div>
                    <div className='flex justify-center text-3xl font-semibold text-gray-600 mt-4 mb-4'>
                        <h1>Buscar Pokemon</h1>
                    </div>
                    <div className='flex justify-center'>
                        <input className='border rounded-full pr-28 pl-3 py-1' type="text" placeholder="Buscar..." value={buscar} onChange={buscarPokemon} />
                    </div>
                </div>

                <div className='mx-auto w-[80%]'>
                    {filtrar.length > 0 ? (
                        <div className='flex flex-wrap justify-center mt-8 gap-8'>
                            {filtrar.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((pokemon, id) => (
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
                </div>


                <div className='flex justify-center mt-20'>
                    <Paginacion pagina={pagina} onPageChange={handlePageChange} totalPages={Math.ceil(filtrar.length / porPagina)} />
                </div>
            </div>

        </>
    )

}

export { ListPokemon }
