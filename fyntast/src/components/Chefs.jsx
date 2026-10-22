// import imgPlaceholder from '../assets/fyntast-placeholder-food.png'
import headchef from '../assets/chefdecuisine.jfif';
import expertchefone from "../assets/souschef.jfif";
import expertcheftwo from "../assets/demichefdepartie.jfif";
const Chefs = [
    {
        id:"1",
        image: headchef,
        name: 'Fergus Douchebag',
        rate: 'Chef de Cuisine',
    },
    {
        id:"2",
        image: expertchefone,
        name: 'Mariam Seth',
        rate: 'Sous Chef',
    },
    {
        id:"3",
        image: expertcheftwo,
        name: 'Abigail Simon',
        rate: 'Demi Chef de Partie',
    }

]

export default function MeetChefsComponent(){
    return(
        <div>
            <div className='p-14 flex flex-col space-y-5'>
                <h2 className='sectionheading font-semibold text-start'>Meet Our Master Chefs</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {Chefs.map((chef) => (
                        <div key={chef.id} className='rounded-xl shadow-xl hover:shadow-brand'>
                            <img src={chef.image} alt="image of fyntastique chef" className="rounded-t-2xl" />
                            <div>
                                <div className='text-start p-5'>
                                    <h4 className='font-medium'>{chef.name}</h4>
                                    <p className='text-muted'>{chef.rate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}