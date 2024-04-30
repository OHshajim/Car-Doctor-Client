import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-5">
            <Banner/>
            <AboutUs/>
        </div>
    );
};

export default Home;