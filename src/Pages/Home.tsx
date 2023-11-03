import React, { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <div className="text-gray-600">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-3xl font-semibold">Bienvenido</h1>
                </div>
                <div className="flex justify-center">
                <p className=" text-center w-[50%]">"¡Bienvenido a la Pokédex! Tu guía Pokémon definitiva."</p>
                </div>
            </div>
        </>
    )
}

export { Home }