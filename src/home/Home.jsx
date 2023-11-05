import Banner from "../banner/Banner";
import PopularService from "./PopularService";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <PopularService></PopularService>
        </div>
    );
};

export default Home;