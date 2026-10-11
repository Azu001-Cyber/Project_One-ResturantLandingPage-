
import burgerVideo from '../assets/Creating_restaurant_cheeseburger…_20260927160615.mp4';
import BtnComponent from '../ui/BtnComponent';

const labels = [
    {
        id: '1',
        logo: '@',
        title: 'Quick Delivery',
        description: 'commodo ultancrper lacus contrary popular trelief massa.'
    },
    {
        id:'2',
        logo: '@',
        title: 'Order and Collect',
        description: 'Commodo ultamocrper lacus contrary popular trelief massa.'
    },
    {
        id: '3',
        logo: '@',
        title: 'Perfect Dining',
        description: 'Commodo ultamocrper lacus contrary popular trelief massa.'
    },
]
export default  function ShowBurgerComponent(){
    return(
        <div className='bg-brand'>

            <div className=' p-14'>
                <div className='flex flex-col space-y-1.5 max-md:justify-items-center'>
                    <h3 className='text-2xl md:text-4xl font-semibold'>We will deliver burgers <br /> like no other</h3>

                    <div className='inner flex flex-wrap lg:flex-nowrap justify-around items-center basis-10'>
                        <div className='max-w-[40em] max-h-[30em]'>
                            <video src={burgerVideo} autoPlay muted controls className='border-none rounded-3xl'></video>
                        </div>


                        <div className=''>
                            <div>
                                <ul className='show_list'>
                                    <li>Donec conviels vestibulum eget pharetra.</li>
                                    <li>Bignissim posuere. Suspendisse elementun quem.</li>
                                    <li>Eget conveils erat sollicitudin pellentesque orci.</li>
                                </ul>
                            </div>

                            <div>
                                {labels.map((item) => (
                                    <div className='my-5'>
                                        <div key={item.id} className=''>
                                            <div className='flex items-center space-x-2.5'>
                                                <div>
                                                {/* icon */}
                                                {item.logo}

                                                </div>
                                                <div>
                                                    {/* text */}
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col space-y-3'>
                                <p>commondo ultamcorper lacus vestibulun sed non blendit <br />
                                massa enim up one of the more obscure latin words
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