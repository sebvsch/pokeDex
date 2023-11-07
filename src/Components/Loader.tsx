import React, { FC } from "react";
import { tailspin } from 'ldrs'
tailspin.register()




const Loader: FC = () => {
    return (
        <>
            <l-tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color="#D61036"
            ></l-tailspin>
        </>
    )
}

export { Loader }

