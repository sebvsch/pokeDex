import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FC = () => {


    return (

        <header className="bg-[#DE1036] w-full text-sm py-6" /*style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}*/>
            <nav className="w-full mx-auto px-8 flex gap-12 text-base justify-center font-medium">
                <div className='text-center text-white'>
                    <Link to="/pokedex">Pokedex</Link>
                </div>
                <div className='text-center text-white'>
                    <Link to="/">Home</Link>
                </div>
                <div className='text-center text-white'>
                    <Link to="/acerca">Acerca</Link>
                </div>
            </nav>
        </header>
    )

}

export { NavBar }