import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
    const { user } = useAuthContext();
    const { register, watch, setValue, formState: { errors } } = useForm();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        Object.keys(user).forEach((key) => (setValue(key, user[key])));
    }, [user, setValue]);

    return (
        <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl p-1 lg:p-4">
            <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                    Profile Information
                </h2>
                <form action="">
                    <ProfileForm register={register} errors={errors} isEditing={isEditing} />
                    <PasswordChangeForm errors={errors} register={register} isEditing={isEditing} watch={watch} />
                    <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
                </form>
            </div>
        </div>
    );
};

export default Profile;