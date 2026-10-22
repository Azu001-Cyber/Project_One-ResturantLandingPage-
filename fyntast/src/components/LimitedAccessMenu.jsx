import { useState } from "react";
import Menu from "../data/menu";
import MenuButton from "../ui/menubtn";
import BtnComponent from "../ui/BtnComponent";

export default function LimitedMenuComponent(){


    const [activeCategory, setActiveCategory] = useState('FastFood');
    const [isLoading, setIsLoading] = useState(false);

    const HandleCategory = (category) => {
        setIsLoading(true);

        setActiveCategory(category),

        setTimeout( () => {
            setIsLoading(false)
    }, 1000)

    }

    return (
        <div>
            <div className="p-18 flex flex-col space-y-10">
                <h2 className="sectionheading font-semibold">Limited Access Menu</h2>

                <div className="flex justify-between items-center">
                    <div className="flex space-x-5 items-center flex-wrap ">
                        <MenuButton text={'Fast Food'}  onclick={() => HandleCategory("FastFood")} className={`${activeCategory === 'FastFood' ? "bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400" : ""} text-nowrap font-medium`}/>
                        <MenuButton text={'Morning'}  onclick={() => HandleCategory('Morning')} className={`${activeCategory === 'Morning' ? "bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400" : ""} font-medium`}/>
                        <MenuButton text={'Weekday Lunch'} onclick={() => HandleCategory("Weekday Lunch")} className={`${activeCategory === 'Weekday Lunch' ? 'bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400' : ''} text-nowrap font-medium`}/>
                        <MenuButton text={'Dinner'} onclick={() => HandleCategory("Dinner")} className={`${activeCategory === 'Dinner' ? 'bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400' : ''} font-medium`}/>
                        <MenuButton text={'Beverage'} onclick={() => HandleCategory("Beverage")} className={`${activeCategory === 'Beverage' ? 'bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400' : ''} font-medium`}/>
                        <MenuButton text={'Dessert'} onclick={() => HandleCategory("Dessert")} className={`${activeCategory === 'Dessert' ? 'bg-greenaccent text-white py-2 px-5 active-btn border rounded-lg transition-colors duration-400' : ''} font-medium`}/>
                    </div>

                    {/* <div>
                        <BtnComponent text='View All' className='bg-greenaccent text-white font-medium rounded-lg py-1 px-2'/>
                    </div> */}
                </div>

                {isLoading ? (<div className="flex justify-center items-center py-10">
                                <div className="w-8 h-8 border-4 border-t-greenaccent border-brand rounded-full animate-spin"></div>
                                </div>) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {Menu.filter((food) => 
                    food.category === activeCategory,
                    
                    ).map((food) => (
                            <div key={food.id} className="shadow-xl hover:shadow-6xl hover:shadow-brand transition-shadow duration-300 rounded-[20px] cursor-pointer">
                                <div>
                                    <img src={food.image} alt="food image" className="max-w-full object-cover rounded-t-xl justify-self-center" />

                                    <div className="flex flex-col space-y-5 mt-5 p-5">
                                        <div className="flex justify-between">
                                            <h1>{food.name}</h1>
                                            <p>{`£${food.price}`}</p>
                                        </div>

                                        <p className="text-muted">{food.description}</p>
                                        <BtnComponent text={`${activeCategory === 'Beverage' ? 'Grab A Drink' : 'Grab A Bite'}`}className='bg-accent text-white py-3 px-2 w-full rounded-full font-semibold active:bg-black transition-colors duration-300'/>
                                    </div>

                                </div>
                            </div> 
                    ))
                    }
                </div>)}
            </div>
        </div>
    )
}