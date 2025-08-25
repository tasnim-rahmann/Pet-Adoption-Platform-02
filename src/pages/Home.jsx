import HeroSection from "../components/Home/HeroSection/HeroSection";
import Subscription from "../components/Home/Subscription/Subscription";
import About from "../components/Home/About";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Subscription />
        </div>
    );
};

export default Home;