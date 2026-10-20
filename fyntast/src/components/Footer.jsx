

export default function FooterComponent(){

    const getyear = new Date()
    return (
        <div>
            <div className="bg-black text-white pt-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold justify-self-center">Outstanding Delivery Service <span className="text-accent">+456 <span> 819 </span> <span>4852</span> </span> </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 footer-inner-container justify-self-center">
                    <div>
                        <h4 className="font-bold">FYNTASTIQUE</h4>
                    </div>
                    <div>
                        <h5 className="mb-5 text-sm font-medium">FIND OUR RESTAURANT</h5>
                        <p className="font-light text-sm">
                            HIGH ST, LEATHERHEAD <br />
                            KT22 BAA UNITED KIGNDOM
                        </p>
                    </div>
                    <div>
                        <h5 className="mb-5 text-sm font-medium">OPENING HOURS</h5>
                        <p className="font-light text-sm">MONDAY-SUNDAY</p>
                        <p className="font-light text-sm">9:00AM TO 11:30PM</p>
                    </div>
                    <div>
                        <h5 className="mb-5 text-sm font-medium">CONTACT US</h5>
                        <div>

                        </div>
                    </div>
                </div>
                <hr className="text-white"/>
                <div className="flex flex-wrap md:flex-nowrap gap-3 justify-around items-center bottom-footer" >
                    <div>
                        <ul className="flex justify-around items-center gap-5">
                            <li className="footer-link-items"><a href="" className="footer-link">Home</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">About</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">Menu</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">Pages</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">Blog</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">Contact</a></li>
                            <li className="footer-link-items"><a href="" className="footer-link">Branch</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Moses <span>@{getyear.getFullYear()}</span> All Rights Reserved By Moses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}