import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";

const Profile = () => {
    const { user, updateUserProfile, changePassword, errorMessage } = useAuthContext();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        Object.keys(user).forEach((key) => (setValue(key, user[key])));
    }, [user, setValue]);

    const onSubmit = async (data) => {
        try {
            // Profile Update
            const profilePayload = {
                first_name: data.first_name,
                last_name: data.last_name,
                address: data.address,
                phone_number: data.phone_number,
                email: data.email
            };
            await updateUserProfile(profilePayload);

            // Password Change
            if (data.current_password && data.new_password) {
                await changePassword({ current_password: data.current_password, new_password: data.new_password });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl p-1 lg:p-4">
            <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                    Profile Information
                </h2>
                {errorMessage && <ErrorAlert errorMessege={errorMessage} />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ProfileForm register={register} errors={errors} isEditing={isEditing} />
                    <PasswordChangeForm errors={errors} register={register} isEditing={isEditing} watch={watch} />
                    <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
                </form>
            </div>
        </div>
    );
};

export default Profile;