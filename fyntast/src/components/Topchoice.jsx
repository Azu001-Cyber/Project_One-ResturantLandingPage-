
import imageThree from "../assets/fyntast-image-3.jpg";
import imageFour from "../assets/fyntast-image-4.jpg";
import imageFive from "../assets/fyntast-image-5.jpg";
// import imageSix from "../assets/fyntast-image-6.jpg"
import BtnComponent from "../ui/BtnComponent";
import ImageComponent from "../ui/Image";
const Menus = [
    {
        id:'1',
        name: 'Bison Meat Burgers',
        image: imageFive,
        buttonText: 'See Menu',
    },
    {
        id:'2',
        name: 'Chicken Heaven',
        image: imageFour,
        buttonText: 'See Menu',
    },
    {
        id:'3',
        name: 'Seltzer Drinks',
        image: imageThree,
        buttonText: 'See Menu',
    },
    // {
    //     id:'4',
    //     name: 'Fresh Spinach Mix',
    //     image: imageSix,
    //     buttonText: 'See Menu',
    // },
]
export default function TopChoiceComponent(){
    return(
        <div>
            <div className="justify-self-center py-10">
                <h2 className="mb-14 font-semibold text-2xl md:text-3xl lg:text-4xl">Top Choice on The Menu</h2>

                <div>
                    <div className="container-card">
                        <div className="card-head grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {Menus.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl p-5">

                                    <ImageComponent src={item.image} className={'max-w-30'}/>

                                    <div className="card-body">
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <BtnComponent text={item.buttonText} className={'text-white font-medium bg-greenaccent py-[0.4em] px-10 rounded-full'}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}