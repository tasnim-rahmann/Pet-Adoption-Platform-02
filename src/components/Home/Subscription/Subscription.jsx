import dogImage from "../../../assets/dog4.jpg";

const Subscription = () => {
    return (
        <div className="lg:px-40 mt-12 lg:mt-30 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <img src={dogImage} alt="Dog Image" />
            </div>
            <div className="w-full lg:w-1/2 bg-[#1C4A2A] text-white flex flex-col items-center justify-center p-2 lg:p-0 pt-4 lg:pt-0">
                <h1 className="text-2xl lg:text-5xl font-medium leading-tight max-w-2xl">Subscribe to Our Newsletter for Pet Updates and News!</h1>
                <p className="lg:text-lg max-w-2xl">
                    Stay in the loop with the latest updates! Join our newsletter to receive news, event announcements, and heartwarming stories directly to your inbox.
                </p>
                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                    <input type="email" className="outline-0 border-1 rounded-sm p-4" placeholder="Type your email here..." />
                    <button className="bg-white text-black px-6 py-4 rounded-sm cursor-pointer hover:shadow-sm transition-all">Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;