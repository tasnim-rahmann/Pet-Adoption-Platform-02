const Register = () => {
    return (
        <div className="my-12 lg:my-2 lg:h-screen flex items-center justify-center">
            <div className="w-full lg:max-w-sm border-1 p-4 m-2 lg:mb-40 flex flex-col">
                <h1 className="text-2xl lg:text-3xl font-medium mb-4">Registretion Form</h1>
                <div className="mt-4">
                    <label htmlFor="firstName" className="text-sm">Enter Your First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                        placeholder="Type your first name here"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="lastName" className="text-sm">Enter Your Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                        placeholder="Type your last name here"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="text-sm">Enter Your Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                        placeholder="Type your email here"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="text-sm">Enter Your Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                        placeholder="Type your password here"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="confirmPassword" className="text-sm">Confirm Your Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                        placeholder="Retype your password here"
                        required
                    />
                </div>
                <button
                    className="mt-4 lg:mt-6 bg-[#1C4A2A] px-6 py-2 rounded-sm text-white font-medium cursor-pointer"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;