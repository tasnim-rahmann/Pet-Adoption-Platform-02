import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { errorMessage, loginUser } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await loginUser(data);
            navigate("/");
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-12 lg:my-40 flex items-center justify-center">
            <div className="w-full lg:max-w-lg shadow-xl p-4 lg:p-12 m-2">
                <h1 className="text-2xl lg:text-3xl font-medium mb-2">Login Form</h1>

                {errorMessage && <ErrorAlert errorMessege={errorMessage} />}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                        <label htmlFor="email" className="text-sm">Enter Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your email here"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <span className="text-sm lable-text-alt text-error">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="text-sm">Enter Your Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your password here"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
                            <span className="text-sm lable-text-alt text-error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 lg:mt-6 bg-[#1C4A2A] px-6 py-2 rounded-sm text-white font-medium cursor-pointer w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging In..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
