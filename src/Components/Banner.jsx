import banner1 from "../assets/banner/1.jpg"
import banner2 from "../assets/banner/2.jpg"
import banner3 from "../assets/banner/3.jpg"
import banner4 from "../assets/banner/4.jpg"
import banner5 from "../assets/banner/5.jpg"
import banner6 from "../assets/banner/6.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full max-h-[650px] rounded-xl" />
                    <div className="absolute flex items-center left-0 top-0  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="sm:w-1/2 w-3/4 space-y-1 sm:space-y-5 ml-5  md:ml-20">
                            <h1 className="text-2xl md:3xl xl:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <button className="btn  bg-orange-600 text-white ">Discover More</button>
                                <button className="btn  btn-outline  text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-0 transform -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;