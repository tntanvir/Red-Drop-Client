import React, { useEffect, useState } from "react";

const UserDeshBord = () => {
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        blood_group: "",
        image: "",
    });
    const [editingImage, setEditingImage] = useState(false);

    const apiUrl = `https://red-drop-django.vercel.app/authore/user/${sessionStorage.getItem('username')}/`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setFormData({
                    name: data.name,
                    phone: data.phone,
                    location: data.location,
                    blood_group: data.blood_group,
                    image: data.image,
                });
            })
            .catch((error) => console.error("Error fetching user data:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setEditingImage(false); // Hide the image input after updating
                alert("User details updated successfully!");
            })
            .catch((error) => console.error("Error updating user data:", error));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border">
            {userData ? (
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32">
                        <img
                            src={formData.image || userData.image}
                            alt="User"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md cursor-pointer"
                            onClick={() => setEditingImage(!editingImage)}
                        />
                    </div>

                    {/* Image URL Input (Only appears when editing) */}
                    {editingImage && (
                        <div className="w-full mt-4">
                            <label className="block font-medium">New Profile Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Enter Image URL"
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    )}

                    <h2 className="text-xl font-semibold mt-3">{userData.name}</h2>
                    <p className="text-gray-500">@{userData.user.username}</p>
                    <p className="text-gray-500">{userData.user.email}</p>

                    {/* Update Form */}
                    <form onSubmit={handleSubmit} className="w-full mt-6">
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="mb-4">
                            <label className="block font-medium">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Location Input */}
                        <div className="mb-4">
                            <label className="block font-medium">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Blood Group Input */}
                        <div className="mb-4">
                            <label className="block font-medium">Blood Group</label>
                            <input
                                type="text"
                                name="blood_group"
                                value={formData.blood_group}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            ) : (
                <p className="text-center">Loading user details...</p>
            )}
        </div>
    );
};

export default UserDeshBord;
