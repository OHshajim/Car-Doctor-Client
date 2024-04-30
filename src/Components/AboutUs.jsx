import about from "../assets/about_us/person.jpg"
import parts from "../assets/about_us/parts.jpg"
const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="hero-content max-w-[1600px] flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 left-1/3 border-8 border-white" />
                    </div>
                    <div className="lg:w-1/2">
                        <h4 className="text-orange-600 font-semibold mb-3">About Us</h4>
                        <h1 className="text-2xl md:3xl xl:text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn  bg-orange-600 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;