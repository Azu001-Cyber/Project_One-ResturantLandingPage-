
import burgerVideo from '../assets/Creating_restaurant_cheeseburger…_20260927160615.mp4';
import BtnComponent from '../ui/BtnComponent';
import { BadgeCheck } from 'lucide-react';
import { Van } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { PaperBag } from 'lucide-react';

const labels = [
    {
        id: '1',
        logo: <Van/>,
        title: 'Quick Delivery',
        description: 'Your favourite meals delivered to your door promptly, so you can spend less time waiting and more time enjoying.'
    },
    {
        id:'2',
        logo: <PaperBag/>,
        title: 'Order and Collect',
        description: "We'll have your order prepared for collection, helping you spend less time waiting."
    },
    {
        id: '3',
        logo: <Utensils/>,
        title: 'Perfect Dining',
        description: 'Enjoy delicious meals, refreshing drinks, and exceptional flavours in a welcoming atmosphere.'
    },
]

export default  function ShowBurgerComponent(){
    return(
        <div>

            <div className='bg-brand p-14'>
                <div className='flex flex-wrap space-y-1.5'>
                    <h3 className='text-2xl md:text-4xl font-semibold'>We serve great food <br/> made to satisfy every craving.</h3>

                    <div className='inner flex flex-wrap lg:flex-nowrap justify-between items-center gap-20'>
                        <div className='max-w-[40em] max-h-[30em]'>
                            <video src={burgerVideo} autoPlay muted playsInline className='border-none rounded-3xl'></video>
                        </div>


                        <div className=''>
                            <div>
                                <ul className='show_list space-y-5'>
                                    <span className="flex items-center gap-2">
                                        <BadgeCheck className="text-greenaccent"/>
                                        <li>Fresh ingredients and quality flavours in every dish.</li>
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <BadgeCheck className="text-greenaccent"/>
                                        <li>A diverse menu with something delicious for everyone.</li>
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <BadgeCheck className="text-greenaccent"/>
                                      <li>Great food, refreshing drinks, and memorable dining experiences.</li>
                                    </span>
                                </ul>
                            </div>

                            <div>
                                {labels.map((item) => (
                                    <div className='my-5'>
                                        <div key={item.id} className=''>
                                            <div className='flex items-center space-x-2.5'>
                                                <div className="border p-2 rounded-full bg-white text-accent">
                                                    {/* icon */}
                                                    {item.logo}
                                                </div>
                                                <div>
                                                    {/* text */}
                                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                                    <p className="text-wrap font-light">{item.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col space-y-3'>
                                <p className='text-muted text-lg font-[400]'>Whether you're stopping by for a quick bite, enjoying a meal with friends, or looking for your next favourite dish. <br/> FYNTASTIQUE is ready to make every visit worthwhile.
                                </p>

                                <div className='flex items-center space-x-5'>
                                    <BtnComponent text={'View Details'} className={'bg-greenaccent text-white rounded-3xl py-2 px-5'}/>
                                    <BtnComponent text={'+4027638246'} className={'bg-transparent hover:bg-accent hover:text-white transition-all duration-400 rounded-3xl py-2 px-5 font-medium'}/>
                                </div>
                            </div>

                        </div>
                    </div>          
                </div>
            </div>
        </div>
    )
};