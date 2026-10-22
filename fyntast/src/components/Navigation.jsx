import { useState } from "react";

import BtnComponent from "../ui/BtnComponent";
import {Menu, X} from 'lucide-react';


function NavComponent(){
    const [isOpen, setisOpen] = useState (false);

    console.log('Current Dropdown useState ' + isOpen)

    const HandleDropdown = () => {
        setisOpen(!isOpen)
    }

    return(
            <div className="fixed top-0 left-0 z-50 w-full">
                <nav className="flex relative justify-between items-center bg-secondary py-5 px-5 m-5 rounded-full">
                    <div><a href="" className="brand-logo font-bold text-lg text-black-600">FYNTASTIQUE</a></div>


                    <div className="hidden md:block">
                        <ul className="flex items-center gap-10">
                            <li><a href="" className="brand-logo-link font-medium">Home</a></li>
                            <li><a href="" className="brand-logo-link font-medium">About</a></li>
                            <li><a href="" className="brand-logo-link font-medium">Menu</a></li>
                            <li><a href="" className="brand-logo-link font-medium">Pages</a></li>
                            <li><a href="" className="brand-logo-link font-medium">Blog</a></li>
                            <li><a href="" className="brand-logo-link font-medium">Contact</a></li>
                            <li><a href="" className="brand-logo-link font-medium">Branch</a></li>

                            <BtnComponent text='Find A Table ' className='border-0 rounded-full bg-greenaccent text-white py-2 px-5 font-medium'/>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={HandleDropdown}>
                            {!isOpen ? <Menu/> : <X/>}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute top-full left-0 w-full rounded-2xl bg-secondary py-5 px-5 shadow-lg md:hidden">
                            <ul className="flex flex-col gap-5">
                                <li><a href="" className="brand-logo-link font-medium">Home</a></li>
                                <li><a href="" className="brand-logo-link font-medium">About</a></li>
                                <li><a href="" className="brand-logo-link font-medium">Menu</a></li>
                                <li><a href="" className="brand-logo-link font-medium">Pages</a></li>
                                <li><a href="" className="brand-logo-link font-medium">Blog</a></li>
                                <li><a href="" className="brand-logo-link font-medium">Contact</a></li>
                                <li><a href="" className="brand-logo-link font-medium">Branch</a></li>

                                <BtnComponent text='Find A Table ' className='border-0 rounded-full bg-greenaccent text-white py-2 px-5 font-medium'/>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        )
}

export default NavComponent;