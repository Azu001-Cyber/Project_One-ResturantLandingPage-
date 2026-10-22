
// import imageThree from "../assets/fyntast-image-3.jpg";
// import imageFour from "../assets/fyntast-image-4.jpg";
// import imageFive from "../assets/fyntast-image-5.jpg";
// import imageSix from "../assets/fyntast-image-6.png"

import { useEffect, useRef} from 'react';
import bisonmeatburder from '../assets/bisonmeatburger-image.jfif';
import artisansunrisebagel from "../assets/artisansunrisebagel-image.jfif";
import chickenstripcombo from "../assets/chickenstrinpcombo-image.jfif"
import breadeggpasta from "../assets/breadeggpasta-image.jfif";
import botanicalberrybowl from '../assets/botanicalberrybowl-image.jfif';

import BtnComponent from "../ui/BtnComponent";
import ImageComponent from "../ui/Image";
import LeftArrow from '../ui/LeftArrow';
import RightArrow from '../ui/RightArrow';
// import { Menu } from 'lucide-react';


const Menus = [
    {
        id:'1',
        name: 'Bison Meat Burgers',
        image: bisonmeatburder,
        buttonText: 'See Menu',
    },
    {
        id:'2',
        name: 'Chicken Strip Combo',
        image: chickenstripcombo,
        buttonText: 'See Menu',
    },
    {
        id:'3',
        name: 'Artisan Sunrise Bagel',
        image: artisansunrisebagel,
        buttonText: 'See Menu',
    },
    {
        id:'4',
        name: 'Bread Egg Pasta',
        image: breadeggpasta,
        buttonText: 'See Menu',
    },
    {
        id:'5',
        name: 'Botanical Berry Bowl',
        image: botanicalberrybowl,
        buttonText: 'See Menu',
    },
]

export default function TopChoiceComponent(){
    const viewport = useRef()
    const tracker = useRef()

    const HandleScrollRight = () => {
        // viewport.current.scrollLeft  = viewport.current.scrollLeft + 150
        viewport.current.scrollTo({left: viewport.current.scrollLeft + 150, behavior:'smooth'})

        if(viewport.current.scrollLeft >= tracker.current.scrollWidth / 2 ){
            viewport.current.scrollLeft = viewport.current.scrollLeft - tracker.current.scrollWidth / 2
        }
        // console.log('Right', viewport.current) 
    }
    const HandleScrollLeft = () => {
        // viewport.current.scrollLeft = viewport.current.scrollLeft - 150
        // console.log('Left', viewport.current) 
        viewport.current.scrollTo({left:viewport.current.scrollLeft - 150, behavior:'smooth'})
    }

    useEffect(() =>{
        console.log(tracker.current.scrollWidth / 2)
    })


        return(
        <div>
            <div className="justify-self-center py-10 px-10">
                <h2 className="mb-14 font-semibold sectionheading text-center">Top Choice on The Menu</h2>

                <div className='menu-section'>
                    <div ref={viewport} className="container-card viewport max-w-6xl overflow-x-auto max-md:max-w-[625px]">
                        <div ref={tracker} className="flex space-x-5 tracker p-3">
                            {Menus.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-lg  transition-shadow hover:shadow-brand duration-300 hover:shadow-2xl">

                                    <div className="max-w-full">
                                        <ImageComponent src={item.image} className={'justify-self-center object-contain rounded-t-xl'}/>
                                    </div>

                                    <div className="card-body p-5 justify-self-center space-y-2">
                                        <h3 className="text-center font-medium text-nowrap">{item.name}</h3>
                                        <BtnComponent text={item.buttonText} className={'text-white font-medium bg-greenaccent py-[0.4em] px-10 rounded-full text-nowrap w-full hover:bg-accent transition-colors duration-300'}/>
                                    </div>

                                </div>

                            ))}
                            {Menus.map( item => (
                                <div key={item.id+'dup'} className="bg-white rounded-lg shadow-lg  transition-shadow duration-300 hover:shadow-2xl">

                                    <div className="max-w-full">
                                        <ImageComponent src={item.image} className={'justify-self-center object-contain rounded-t-xl'}/>
                                    </div>

                                    <div className="card-body p-5 justify-self-center space-y-2">
                                        <h3 className="text-center font-medium text-nowrap">{item.name}</h3>
                                        <BtnComponent text={item.buttonText} className={'text-white font-medium bg-greenaccent py-[0.4em] px-10 rounded-full text-nowrap w-full hover:bg-accent transition-colors duration-300 .active-button'}/>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="flex space-x-5 justify-self-center mt-5">
                        <LeftArrow className='border-muted border-2 rounded-full p-3 hover:bg-greenaccent hover:border-brand hover:text-white transition-colors duration-400 active:bg-black' onShiftLeftScroll={HandleScrollLeft}/>
                        <RightArrow className='border-muted border-2 rounded-full p-3  hover:bg-greenaccent hover:border-brand hover:text-white transition-colors duration-400 active:bg-black' onShiftRightScroll={HandleScrollRight}/>
                    </div>
                </div>

            </div>
        </div>
    )
}