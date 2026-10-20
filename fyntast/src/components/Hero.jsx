
import BtnComponent from "../ui/BtnComponent";
import ImageComponent from "../ui/Image";
import imageOne from "../assets/fyntast-image-1.jpg"
import imageTwo from "../assets/fyntast-image-2.jpg"

export default function HeroComponent(){
    return( 
        <div>
            <div className="bg-brand flex justify-around hero-container pb-16">
                <div className="flex flex-col space-y-10">
                    <h1 className="font-bold text-[30px] sm:text-4xl md:text-6xl">Crafting the Best Taste <br /> with Passion</h1>

                    <p className="text-muted font-medium max-lg:text-white">
                        We serve freshly prepared dishes made with <br/>
                        premium ingredients. authentic recipes, <br /> and a passion  for unforgetable flavor <br />
                        so every bite feels specialy satisfying.
                    </p>
                    <BtnComponent text='Find A Table' className={'bg-greenaccent text-white font-medium py-3 px-8 rounded-3xl'}/>
                </div>
                
                <div className="flex items-end space-x-2 object-contain max-lg:hidden">
                    <ImageComponent src={imageTwo} alt='first image' className={'max-w-[20em] rounded-3xl hidden lg:block soup'}/>
                    <ImageComponent src={imageOne} alt='second image' className={'max-h-[25em] max-w-[20em] rounded-3xl hidden lg:block chicken-chips'}/>
                </div>

            </div>
        </div>
        )
}