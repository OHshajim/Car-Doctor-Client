import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Info from "../Components/Info";
import Services from "../Components/Service/Services";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-5">
            <Banner/>
            <AboutUs/>
            <Services/>
            <Info/>
        </div>
    );
};

export default Home;