import imgPlaceholder from '../assets/fyntast-placeholder-food.png'

const Chefs = [
    {
        id:"1",
        image: imgPlaceholder,
        name: 'Fergus Douchebag',
        rate: 'Expert',
    },
    {
        id:"2",
        image: imgPlaceholder,
        name: 'Mariam Seth',
        rate: 'Expert',
    },
    {
        id:"3",
        image: imgPlaceholder,
        name: 'Simon James',
        rate: 'Expert',
    }

]

export default function MeetChefsComponent(){
    return(
        <div>
            <div className='justify-self-center'>
                <h2>Meet Our Master Chefs</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {Chefs.map((chef) => (
                        <div key={chef.id}>
                            <img src={chef.image} alt="" />
                            <div>
                                <div>
                                    <h4>{chef.name}</h4>
                                    <p>{chef.rate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}