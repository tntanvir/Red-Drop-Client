import React from 'react';
import { Option, Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';

import { useState } from 'react';
import axios from 'axios';
import { Select } from '@material-tailwind/react';
import { toast, Bounce } from 'react-toastify';


import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ContextApi } from '../App';
import { Link } from 'react-router-dom';

import blood from '../blood.json'

const Register = () => {

    // const [pageLoad, setPageLoad] = useContext(ContextApi);

    //Rgister
    const [image, setImage] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState("");


    const navigate = useNavigate()

    const updateImgtoUrl = async (e) => {
        console.log('object');
        try {
            const formData = new FormData();
            formData.append('image', e);

            const res = await axios.post('https://api.imgbb.com/1/upload?key=526182029130a23070675bf11635fe8f', formData);

            if (res.data.data.url) {
                setImage(res.data.data.url)

            }
        }
        catch (err) {
            console.log(err);
        }
    }


    const SingUp = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', image)
        formData.append('username', username)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('location', location)
        formData.append('blood_group', type)
        formData.append('password', password)
        formData.append('password2', confirmPassword)
        fetch('https://red-drop-django.vercel.app/authore/register/', {
            method: 'POST',
            body: formData,

        }).then(res => res.json()).then(data => {
            if (data.errors) {
                toast.error(data.errors, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            }
            else {
                setImage(null);
                setUsername('');
                setname('');
                setEmail('');
                setPhone('');
                setLocation('');
                setType('');
                setPassword('');
                setConfirmPassword('');
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }

        })

    }

    //login
    const [logusername, setLogusername] = useState('')
    const [logpassword, setLogpassword] = useState('')

    const Singin = (e) => {
        e.preventDefault()
        fetch('https://red-drop-django.vercel.app/authore/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: logusername,
                password: logpassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.token) {
                    sessionStorage.setItem('token', data.token)
                    sessionStorage.setItem('id', data.id)
                    sessionStorage.setItem('username', data.username)
                    // setPageLoad(!pageLoad)
                    toast.success(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        onClose: () => navigate('/profile'),
                    });
                }
                else {
                    toast.error("Invalid credentials", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                    // alert('"Invalid credentials"')
                }
            })

    }
    return (
        <div>
            <Card color="transparent" className='w-full p-3'>
                <h1 className='text-center text-3xl font-bold text-black'>Sing up</h1>
                <form className="mt-8 mb-2 w-full " onSubmit={SingUp}>
                    <div className='mb-3'>
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Image
                        </Typography>
                        <Input
                            size="lg"
                            type='file'
                            placeholder="image file"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}

                            onChange={(e) => updateImgtoUrl(e.target.files[0])}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <div className="mb-1 flex flex-col gap-6 w-1/2">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                User Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                First Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setname(e.target.value)}
                            />


                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Phone
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-1 flex flex-col gap-6 w-1/2">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Location
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setLocation(e.target.value)}
                            /><Typography variant="h6" color="blue-gray" className="-mb-3">
                                Blood Group
                            </Typography>

                            <Select label="Blood Group" value={type}
                                onChange={(val) => setType(val)}>
                                {/* <Option value='buyer'>Buyer</Option>
                                <Option value='seller'>Seller</Option> */}
                                {
                                    blood?.map((e) => (<Option key={e.id} value={`${e.bdGroup}`}>{e.bdGroup}</Option>))
                                }
                            </Select>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Confirm  Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}

                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-9/12 '>
                            <Button className="mt-6" fullWidth type='submit'>
                                sign up
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <Link to={'/singin'} className="font-medium text-gray-900">
                                    Sign in
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Register;