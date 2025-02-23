import { Avatar } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Userdata = ({ username }) => {
    const [userdata, setUserdata] = useState(null);
    useEffect(() => {
        fetch(`https://red-drop-django.vercel.app/authore/user/${username}/`)
            .then(res => res.json())
            .then(data => setUserdata(data))
    }, [])
    return (
        <div>
            {userdata &&
                <div className='flex gap-4 items-center'>

                    <Avatar src={userdata?.image} />
                    <div>
                        <h2>{userdata?.name}</h2>
                        <p>{userdata?.user?.email}</p>

                    </div>
                </div>
            }
        </div>
    );
};

export default Userdata;