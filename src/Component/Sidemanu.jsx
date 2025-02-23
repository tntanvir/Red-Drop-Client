
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { BsPostcardFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { GiLoveMystery } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
const Sidemanu = () => {
    const navigate = useNavigate()
    const [userdata, setUserdata] = useState()

    useEffect(() => {
        const user = sessionStorage.getItem('username');
        fetch(`https://red-drop-django.vercel.app/authore/user/${user}/`)
            .then(res => res.json())
            .then(data => setUserdata(data))
            .catch(err => console.error('Error:', err));
    }, []);


    const handleLogout = () => {
        fetch('https://red-drop-django.vercel.app/authore/logout/', {
            method: 'POST',  // Use POST instead of GET
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json().then(data => ({ status: res.status, body: data }))) // Parse JSON
            .then(({ status, body }) => {
                if (status === 200) {
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("username");
                    navigate("/singin");
                } else {
                    console.error('Logout failed:', body.error || 'Unknown error');
                }
            })
            .catch(err => console.error('Logout error:', err));
    };





    return (
        <div className="w-1/4 min-h-screen bg-gray-100 p-4">

            <aside className="">
                {userdata && <div className="mb-8 text-center">
                    <img
                        src={userdata?.image}
                        alt="User Avatar"
                        className="rounded-full w-32 h-32 mx-auto"
                    />
                    <h2 className="text-xl font-semibold mt-4">{userdata?.name}</h2>
                    <p className="text-gray-600">{userdata?.blood_group}</p>
                    <p className="text-gray-600">{userdata?.user.username}</p>
                </div>
                }

                <nav>
                    <ul>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <CgProfile className='text-2xl' /> Profile
                            </NavLink>
                        </li>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="request" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <VscGitPullRequestCreate className='text-2xl' /> Create Post
                            </NavLink>
                        </li>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="mypost" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <BsPostcardFill className='text-2xl' />  My Post
                            </NavLink>
                        </li>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="requestconfirm" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <GiConfirmed className='text-2xl' /> Request Confirm
                            </NavLink>
                        </li>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="mydonation" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <GiLoveMystery className='text-2xl' />  My Donation
                            </NavLink>
                        </li>
                        <li className="p-3 bg-gray-300 text-black rounded-lg mt-2 ">
                            <NavLink to="addreview" activeClassName="font-bold" className="flex justify-center items-center gap-2">
                                <MdOutlineRateReview className='text-2xl' />  Add Review
                            </NavLink>
                        </li>
                        <li onClick={handleLogout} className='p-3 bg-gray-300 text-black rounded-lg mt-2 cursor-pointer'>
                            <p className='flex justify-center items-center gap-2'>
                                <IoIosLogOut className='text-2xl' /> logout</p>
                        </li>






                    </ul>
                </nav>
            </aside>
        </div >
    );
};

export default Sidemanu;