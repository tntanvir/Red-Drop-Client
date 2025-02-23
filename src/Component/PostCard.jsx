



import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Option } from "@material-tailwind/react";
import { FaHeartbeat, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaInfoCircle } from 'react-icons/fa';
import Userdata from './Userdata';
import { Select } from '@material-tailwind/react';
import locations from '../fack.json';

const PostCard = ({ data, show, load, setLoad }) => {
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const handleOpen = () => setOpen(!open);
    const handleLocationChange = (value) => {
        setEditData((prevData) => ({ ...prevData, location: value }));
    };

    const editDataFetch = (id) => {
        fetch(`http://127.0.0.1:8000/resiver/data/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditData(data);
                handleOpen();
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        const token = sessionStorage.getItem('token');

        fetch(`http://127.0.0.1:8000/resiver/data/${editData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(editData),
        })
            .then(res => res.json())
            .then(updatedData => {
                console.log("Data updated successfully:", updatedData);
                setLoad(!load);
                handleOpen();
            })
            .catch(error => console.error('Error updating data:', error));
    };

    const handleDelete = (id) => {
        const token = sessionStorage.getItem('token');

        fetch(`http://127.0.0.1:8000/resiver/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
            .then(() => setLoad(!load))
            .catch(error => console.error('Error deleting data:', error));
    };



    const handleConfirm = async (resiverId, postId) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/doner/api/donate/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${sessionStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    resiver: resiverId,
                    post: postId,
                    confirm: true
                })
            });

            if (response.ok) {
                const data = await response.json();
                alert('Donation request confirmed successfully');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || 'Failed to confirm request'}`);
            }
        } catch (error) {
            console.error('Error confirming donation:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-wrap w-full gap-6 justify-center items-center py-10">
            {data?.map((e) => (
                <Card key={e.id} className="w-96 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-300">
                    <CardBody className="p-6 space-y-4">
                        <Userdata username={e.username} />
                        <Typography className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                            <FaHeartbeat className="text-red-500" /> {e.blood_gp}
                        </Typography>
                        <Typography className="text-gray-600 flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400" /> <span className="font-medium">Available:</span> {e.date_from} - {e.date_to}
                        </Typography>
                        {e.location && (
                            <Typography className="text-gray-600 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-gray-400" /> <span className="font-medium">Location:</span> {e.location}
                            </Typography>
                        )}
                        {e.number && (
                            <Typography className="text-gray-600 flex items-center gap-2">
                                <FaPhoneAlt className="text-gray-400" /> <span className="font-medium">Contact:</span> {e.number}
                            </Typography>
                        )}
                        <Typography className="text-gray-600 flex items-center gap-2">
                            <FaInfoCircle className="text-gray-400" /> <span className="font-medium">Details:</span> {e.more}
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between px-5 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                        {show ? (
                            <>
                                <Button onClick={() => editDataFetch(e.id)} >Edit</Button>
                                <Button onClick={() => handleDelete(e.id)} color="red" className="text-white shadow-sm hover:bg-red-600 transition-colors">Delete</Button>
                            </>
                        ) : (
                            <>
                                <Button color="blue-gray" className="text-white shadow-sm hover:bg-blue-800 transition-colors">Details</Button>
                                <Button color="teal" className="text-white shadow-sm hover:bg-teal-700 transition-colors"
                                    onClick={() => handleConfirm(e.user, e.id)}>Confirm</Button>
                            </>
                        )}
                    </CardFooter>
                </Card>
            ))}

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="text-gray-800 font-semibold">Edit Post</DialogHeader>
                <DialogBody className="flex flex-col gap-3">
                    <Input label="Number" name="number" value={editData?.number || ''} onChange={handleInputChange} />
                    {/* <Input label="Location" name="location" value={editData?.location || ''} onChange={handleInputChange} /> */}
                    {
                        locations &&
                        <Select
                            label="Location"
                            name="location"
                            value={editData?.location || ''}
                            onChange={(value) => handleLocationChange(value)}
                        >
                            {locations.map((e, i) => (
                                <Option key={i} value={e.name}>{e.name}</Option>
                            ))}
                        </Select>
                    }
                    <Input label="Blood Group" name="blood_gp" value={editData?.blood_gp || ''} onChange={handleInputChange} />
                    <Input label="Date From" name="date_from" type="date" value={editData?.date_from || ''} onChange={handleInputChange} />
                    <Input label="Date To" name="date_to" type="date" value={editData?.date_to || ''} onChange={handleInputChange} />
                    <Textarea label="Description" name="more" value={editData?.more || ''} onChange={handleInputChange} />
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="gray" onClick={handleOpen} className="mr-1">Cancel</Button>
                    <Button variant="gradient" color="teal" onClick={handleSubmit}>Save Changes</Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default PostCard;
