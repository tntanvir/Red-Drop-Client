import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import {
    Button, Textarea,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";

const Addreview = () => {
    const [texts, setText] = useState(""); // Correct state variable
    const [myreview, setMyreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    const [eText, setEtext] = useState(null)


    const [eId, SetEid] = useState(null)
    const handleEdit = (id) => {
        SetEid(id)
        // console.log(id)
        fetch(`https://red-drop-django.vercel.app/reviews/data/${id}/`)
            .then(res => res.json())
            .then(data => {

                setEtext(data?.text)
                handleOpen()


            })
    }


    const handleConfirm = () => {
        fetch(`https://red-drop-django.vercel.app/reviews/data/${eId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ "text": eText }),
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                handleOpen()
                setLoading(!loading)


            })
    }
    const handleDelete = (id) => {
        fetch(`https://red-drop-django.vercel.app/reviews/data/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ "text": eText }),
        })

            .then(data => {



                setLoading(!loading)


            })
    }




    const handleSubmit = () => {
        if (!texts.trim()) return alert("Please enter some feedback!"); // Fixed 'text' to 'texts'

        setLoading(true);
        fetch("https://red-drop-django.vercel.app/reviews/data/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify({ text: texts }), // Send 'texts' state correctly
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Review Posted:", data);
                setText(""); // Clear textarea after submission
            })
            .catch((err) => console.error("Error posting review:", err))
            .finally(() => setLoading(false)); // Ensure loading state resets
    };

    useEffect(() => {
        fetch(
            `https://red-drop-django.vercel.app/reviews/data/?username=${sessionStorage.getItem(
                "username"
            )}`
        )
            .then((res) => res.json())
            .then((data) => setMyreview(data));
    }, [loading]);



    return (
        <div className="min-h-screen py-12 bg-gray-100">
            {/* Feedback Form Section */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Add Your Feedback
                </h1>
                <div className="w-full">
                    <Textarea
                        label="Write your feedback here..."
                        value={texts}
                        onChange={(e) => setText(e.target.value)}
                        className="mb-4 border border-gray-300 rounded-lg"
                    />
                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {myreview &&
                    myreview?.map((e, i) => (
                        <div
                            key={i}
                            className="bg-white overflow-y-auto p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                            style={{
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                            }}
                        >
                            <div className="h-52 overflow-y-auto" style={{
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                            }}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        Review #{i + 1}
                                    </h3>
                                    <span className="text-xs text-gray-500">
                                        {new Date(e?.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-base mb-4">
                                    {e?.text}
                                </p>
                            </div>
                            <div className="border-t pt-4 flex justify-between items-center">
                                <Button
                                    onClick={() => handleEdit(e.id)}
                                    size="sm"
                                    color="green"
                                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
                                >
                                    <CiEdit className="text-lg" />
                                </Button>
                                <Button
                                    onClick={() => handleDelete(e.id)}
                                    size="sm"
                                    color="red"
                                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                                >
                                    <MdDelete className="text-lg" />
                                </Button>
                            </div>
                        </div>
                    ))}
            </div>
            <>
                {/* <Button onClick={handleOpen} variant="gradient">
                    Open Modal
                </Button> */}
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Its a simple modal.</DialogHeader>
                    <DialogBody>
                        <Textarea label="Update Text" value={eText} onChange={(e) => setEtext(e.target.value)} />
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleConfirm}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </>
        </div>
    );
};

export default Addreview;
