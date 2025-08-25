import { GoArrowUpRight } from "react-icons/go";
import dogImage1 from "../../assets/dog2.jpg";
import dogImage2 from "../../assets/dog3.jpg";

const About = () => {
    return (
        <div className="px-4 lg:px-40 my-12 lg:my-30">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                <div className="w-full lg:w-2/3 flex flex-col justify-between">
                    <p className="max-w-5xl text-lg lg:text-2xl font-medium leading-tight">
                        At Petopia, we're dedicated to rescuing and rehoming pets in need, ensuring they find the love they deserve. With compassion and community at our core, we aim to match each pet with their perfect forever family, fostering lifelong bonds of love.
                    </p>
                    <button className="border-1 w-52 justify-center py-2 rounded-sm mt-4 cursor-pointer flex items-center gap-2 hover:shadow-sm transition-all">Join Our Community <GoArrowUpRight /></button>
                </div>
                <div className="w-full lg:w-1/3 grid grid-cols-2 gap-5">
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-4xl lg:text-6xl font-medium">200+</h1>
                        <p className="text-sm lg:text-lg font-medium text-gray-400">Shelters</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-4xl lg:text-6xl font-medium">2.5K</h1>
                        <p className="text-sm lg:text-lg font-medium text-gray-400">Volunteers</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-4xl lg:text-6xl font-medium">5.8K</h1>
                        <p className="text-sm lg:text-lg font-medium text-gray-400">Pet Adopted</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-4xl lg:text-6xl font-medium">25K</h1>
                        <p className="text-sm lg:text-lg font-medium text-gray-400">Volunteers Hours</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-8 lg:mt-10">
                <img src={dogImage1} alt="Dog Image" className="w-full lg:w-1/2 h-40 lg:h-76  rounded-sm object-cover" />
                <img src={dogImage2} alt="Dog Image" className="w-full lg:w-1/2 h-40 lg:h-76  rounded-sm object-cover" />
            </div>
        </div>
    );
};

export default About;