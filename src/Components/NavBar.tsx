import React, { FC } from 'react'

const NavBar: FC = () => {


    return (

        <header className="bg-[#DE1036] w-full text-sm py-6" /*style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}*/>
            <nav className="w-full mx-auto px-8 flex gap-12 text-base justify-center font-medium">
                <div className='text-center text-white'>
                    <a href="">Pokedex</a>
                </div>
                <div className='text-center text-white'>
                    <a href="">Pokedex 2</a>
                </div>
                <div className='text-center text-white'>
                    <a href="">Pokedex 3</a>
                </div>
            </nav>
        </header>
    )

}

export { NavBar }