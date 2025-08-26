import catImage from "../../../assets/cat1.jpg";
import dgoImage from "../../../assets/dog1.jpg";
import rabitImage from "../../../assets/rabit1.jpg";
import birdImage from '../../../assets/bird1.jpg';

const CategoryItem = () => {
    return (
        <div className="my-12 lg:my-30 px-4 lg:px-40 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="hover:blur-[2px] cursor-pointer transition-all duration-300"><img src={catImage} alt="Cat Image" className="w-94 h-76 rounded-sm object-cover object-top" /></div>
                <div className="hover:blur-[2px] cursor-pointer transition-all duration-300"><img src={dgoImage} alt="Cat Image" className="w-94 h-76 rounded-sm object-cover object-top" /></div>
                <div className="hover:blur-[2px] cursor-pointer transition-all duration-300"><img src={rabitImage} alt="Cat Image" className="w-94 h-76 rounded-sm object-cover object-top" /></div>
                <div className="hover:blur-[2px] cursor-pointer transition-all duration-300"><img src={birdImage} alt="Cat Image" className="w-94 h-76 rounded-sm object-cover object-top" /></div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-3xl lg:text-6xl font-medium leading-tight -tracking-tight max-w-2xl mt-6 lg:mt-0">Find Out Which Furry Friend Fits You Best!</h1>
                <p className="text-[16px] lg:text-lg font-medium leading-tight tracking-tight mt-4 lg:mt-6 text-[#8C8C8C] max-w-2xl">
                    Take a stroll through our furry family and uncover the ideal companion that perfectly matches your lifestyle and personality. Whether you're seeking a playful pal for outdoor adventures or a cuddly companion for cozy nights in, our diverse selection of pets awaits your discovery.
                </p>
            </div>
        </div>
    );
};

export default CategoryItem;