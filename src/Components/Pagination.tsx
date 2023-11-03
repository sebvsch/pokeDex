import React, { FC } from "react";

const Pagination: FC = () => {
    return (
        <>
            <nav className="flex items-center space-x-9">
                <a className="text-sm text-white bg-[#DE1036] px-3 py-2 rounded-xl font-semibold" href="#">
                    <span>Anterior</span>
                </a>
                <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
                <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
                <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>

                <a className="text-sm text-white bg-[#DE1036] px-3 py-2 rounded-xl font-semibold" href="#">
                    <span>Siguiente</span>
                </a>
            </nav>
        </>
    )
}

export { Pagination }