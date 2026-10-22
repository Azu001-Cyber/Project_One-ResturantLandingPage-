

export default function MapComponent(){
    return(
        <div>
            <div className="bg-brand p-14">
                <h2 className="sectionheading mb-10">Where You Can Find Us</h2>
                <div className="flex flex-col md:flex-row justify-around items-center space-y-10">
                    <div>
                        <p className="text-muted text-2xl font-medium "> Great food, good company, and a warm welcome await you. <br />
                            Find us on the map and come enjoy the FYNTASTIQUE experience.
                        </p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.855289338364!2d-0.3305300241395992!3d51.295387071765894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e1029856f585%3A0x96cc2130b0a72bed!2sHigh%20St%2C%20Leatherhead%2C%20UK!5e0!3m2!1sen!2sng!4v1792579040501!5m2!1sen!2sng"  
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            className="rounded-2xl w-lg h-[60vh]"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}