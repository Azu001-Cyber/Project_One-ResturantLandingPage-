import { useState } from "react";

import BtnComponent from "../ui/BtnComponent";
import {Menu} from 'lucide-react';


function NavComponent(){
    const [dropdown, setDropdown] = useState (false);

    console.log('Current Dropdown useState ' + dropdown)

    const HandleDropdown = () => {
        if(dropdown === false){
            setDropdown(true)
        }else{
            setDropdown(false)
        }
    }

    {dropdown ? (
            <div>
                <nav className="flex justify-around items-center fixed bg-secondary nav-container py-10">
                    <div><a href="" className="brand-logo font-bold text-lg text-black-600">FYNTASTIQUE</a></div>

                    <ul className="flex items-center gap-10">
                        <li><a href="" className="brand-logo-link">Home</a></li>
                        <li><a href="" className="brand-logo-link">About</a></li>
                        <li><a href="" className="brand-logo-link">Menu</a></li>
                        <li><a href="" className="brand-logo-link">Pages</a></li>
                        <li><a href="" className="brand-logo-link">Blog</a></li>
                        <li><a href="" className="brand-logo-link">Contact</a></li>
                        <li><a href="" className="brand-logo-link">Branch</a></li>
                    </ul>

                    <div>
                        <BtnComponent text='Find A Table ' className='border-0 rounded-full bg-greenaccent text-white py-2 px-5 font-medium'/>
                    </div>
                <button onClick={() => HandleDropdown()} aria-label="">
                        <Menu/>
                </button>
                </nav>
            </div>
        )
    : (<div>
                <nav className="flex justify-between items-center fixed  bg-secondary nav-container py-5 px-5 m-5 rounded-full">
                    <div><a href="" className="brand-logo font-bold text-lg text-black-600">FYNTAST</a></div>
    
                    <ul className="flex items-center gap-10">
                        <li><a href="" className="brand-logo-link">Home</a></li>
                        <li><a href="" className="brand-logo-link">About</a></li>
                        <li><a href="" className="brand-logo-link">Menu</a></li>
                        <li><a href="" className="brand-logo-link">Pages</a></li>
                        <li><a href="" className="brand-logo-link">Blog</a></li>
                        <li><a href="" className="brand-logo-link">Contact</a></li>
                        <li><a href="" className="brand-logo-link">Branch</a></li>
                    </ul>
    
                    <div>
                        <BtnComponent text='Find A Table ' className='border-0 rounded-full bg-greenaccent text-white py-2 px-5 font-medium'/>
                    </div>
                </nav>
            </div>
        )}
    }

export default NavComponent;