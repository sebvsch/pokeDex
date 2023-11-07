import React, { FC, useState } from "react";

type PaginacionProps = {
    pagina: number;
    setPagina: (pagina: number) => void;
    maximo: number;
}

const Paginacion: FC<PaginacionProps> = ({ pagina, setPagina, maximo }) => {

    const [input, setInput] = useState<number>(1)

    const paginaSiguiente = () => {
        setInput(input + 1)
        setPagina(pagina + 1)
    }

    const paginaAnterior = () => {
        setInput(input - 1)
        setPagina(pagina - 1)
    }

    return (
        <>
            <div className="mb-7">
                <nav className="flex items-center space-x-9">
                    <button disabled={pagina === 1} onClick={paginaAnterior} className="text-white bg-[#DE1036] px-3 py-1 rounded-xl font-semibold">
                        <span className="material-symbols-outlined flex justify-center text-2xl">arrow_left</span>
                    </button>

                    <p>{input}</p>
                    <p>de</p>
                    <p>{maximo}</p>

                    <button disabled={maximo === pagina} onClick={paginaSiguiente} className="text-white bg-[#DE1036] px-3 py-1 rounded-xl font-semibold">
                        <span className="material-symbols-outlined flex justify-center text-2xl">arrow_right</span>
                    </button>
                </nav>
            </div>
        </>
    )
}

export { Paginacion }