

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
// import { useContext } from 'react';
// import { contextAPI } from '../App';
import { Link } from 'react-router-dom';



const Singin = () => {


    // const [pageLoad, setPageLoad] = useContext(contextAPI);




    const navigate = useNavigate()






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
                        onClose: () => navigate('/account/deshboard'),
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
        <div className='min-h-screen flex items-center justify-center'>
            <Card color="transparent" className=''>
                <h1 className='text-center text-3xl font-bold text-black'>Sing in</h1>
                <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96 p-3 " onSubmit={Singin}>
                    <div className="mb-1 flex flex-col gap-6">
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
                            value={logusername}
                            onChange={(e) => setLogusername(e.target.value)}
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
                            value={logpassword}
                            onChange={(e) => setLogpassword(e.target.value)}
                        />
                    </div>

                    <Button className="mt-6" fullWidth type='submit'>
                        sign in
                    </Button>

                </form>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to={'/singup'} className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </Card>
        </div>
    );
};

export default Singin;