import Banner from "../banner/Banner";
import AboutUs from "./AboutUs";
import BeAprovider from "./BeAprovider";
import Faq from "./Faq";
import Map from "./Map";
import PopularService from "./PopularService";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PopularService></PopularService>
            <BeAprovider></BeAprovider>
            <Testimonial></Testimonial>

            <Faq></Faq>
            <Map></Map>
        </div>
    );
};

export default Home;