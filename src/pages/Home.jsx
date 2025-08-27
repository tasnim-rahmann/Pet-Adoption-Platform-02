import HeroSection from "../components/Home/HeroSection/HeroSection";
import Subscription from "../components/Home/Subscription/Subscription";
import About from "../components/Home/About";
import CategoryItem from "../components/Home/Categories/CategoryItem";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CategoryItem />
            <About />
            <Subscription />
        </div>
    );
};

export default Home;