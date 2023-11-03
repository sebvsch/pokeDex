import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
    return (
        <>

            <footer className="bg-gray-200 border-t-2}">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div className='mr-5'>
                                <h2 className="mb-2 text-sm font-semibold text-[#DE1036]">CONTACTO</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                                    <li className="mb-4">
                                        <a href="https://github.com/sebvsch" target='_blank' className="flex items-center hover:text-[#DE1036] ease-in duration-200 "> Github</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.linkedin.com/in/sebastian-chico-80802625b/" target='_blank' className="flex items-center hover:text-[#DE1036] ease-in duration-200 ">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:text-[#DE1036] ease-in duration-200">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mr-5'>
                                <h2 className="mb-2 text-sm font-semibold text-[#DE1036]">NAVEGACIÓN</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                                    <li className="mb-4">
                                        <Link to="/home" className="hover:text-[#DE1036] ease-in duration-200 ">Home</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/pokedex" className="hover:text-[#DE1036] ease-in duration-200 ">Pokedex</Link>
                                    </li>
                                    <li>
                                        <Link to="/acerca" className="hover:text-[#DE1036] ease-in duration-200">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='mr-5'>
                                <h2 className="mb-2 text-sm font-semibold text-[#DE1036]">SIGUEME</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                                    <li className="mb-4">
                                        <Link to="https://www.instagram.com/sebvsch" target='_blank' className="hover:text-[#DE1036] ease-in duration-200 ">Instagram</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="https://www.facebook.com/yesiamasimpsnipermonkey/" target='_blank' className="hover:text-[#DE1036] ease-in duration-200 ">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/sebvsch" target='_blank' className="hover:text-[#DE1036] ease-in duration-200">Twitter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    
            </footer>

        </>
    )
}

export { Footer }