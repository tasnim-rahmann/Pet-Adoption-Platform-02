import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password");
    const { registerUser, errorMessage } = useAuthContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(null);

    const onSubmit = async (data) => {
        delete data.confirm_password;
        setIsLoading(true);
        try {
            await registerUser(data);
            navigate("/");
        } catch (err) {
            console.log("Registration error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-12 lg:my-20 flex items-center justify-center">
            <div className="w-full lg:max-w-lg shadow-xl px-4 lg:px-12 py-4 lg:py-12 m-2 flex flex-col">
                <h1 className="text-2xl lg:text-3xl font-medium mb-4">Registration Form</h1>
                {errorMessage && <ErrorAlert errorMessege={errorMessage} />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <label htmlFor="firstName" className="text-sm">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your first name"
                            {...register("first_name", { required: "First Name is required" })}
                        />
                        {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="lastName" className="text-sm">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your last name"
                            {...register("last_name", { required: "Last Name is required" })}
                        />
                        {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Type your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" }
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full outline-0 border-1 p-3 rounded-sm mt-2"
                            placeholder="Retype your password"
                            {...register("confirm_password", {
                                required: "Confirm Password is required",
                                validate: value => value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 lg:mt-6 bg-[#1C4A2A] px-6 py-2 rounded-sm text-white font-medium cursor-pointer w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Registering" : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
