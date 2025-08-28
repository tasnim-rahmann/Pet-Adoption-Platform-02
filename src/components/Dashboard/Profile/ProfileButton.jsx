const ProfileButton = ({ isEditing, setIsEditing }) => {
    return (
        <div className="flex justify-start pt-4">
            {isEditing ? (
                <>
                    <button
                        type="button"
                        className="btn bg-green-700 text-white mt-4 mr-2"
                        onClick={() => setIsEditing(false)}
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="btn bg-red-700 text-white mt-4"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    className="btn bg-green-700 text-white px-6 mt-4"
                    onClick={() => setIsEditing(true)}
                >
                    Edit Profile
                </button>
            )}
        </div>
    );
};

export default ProfileButton;