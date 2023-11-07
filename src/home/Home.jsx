import Banner from "../banner/Banner";
import BeAprovider from "./BeAprovider";
import Faq from "./Faq";
import PopularService from "./PopularService";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <PopularService></PopularService>
            <BeAprovider></BeAprovider>
            <Testimonial></Testimonial>

            <Faq></Faq>
        </div>
    );
};

export default Home;