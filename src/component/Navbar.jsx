import React from "react"
import { navLinks } from "../helper/Helper"

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const Navbar = () => {
    return (
        <header className="px-8 mt-4 flex justify-center absolute w-[100%] ">
            <nav className="flex z-10 py-4 px-[10%] justify-between select-none font-semibold bg-[#BE3144] uppercase fixed w-[100%] text-white">
                <div className="flex">
                    <DirectionsCarIcon sx={{fontSize:32}} />
                    <h2 className="text-2xl">VICARI</h2>
                </div>
                <div className="flex gap-4 items-center">
                    {navLinks.map((link, index) => {
                        return (
                            <div key={index}>
                                <a className="hover:text-amber-400 duration-300" href={link.href}>{link.name}</a>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Navbar