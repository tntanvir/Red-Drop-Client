import React, { useEffect, useState } from 'react';
import Resivercart from './Resivercart';

const Confirmrequest = () => {
    const [data, setData] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null); // Error handling

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        // console.log(username);

        // Check if username exists in session storage
        if (username) {
            fetch(`https://red-drop-django.vercel.app/doner/api/donate/?resiver=${username}`)
                .then((res) => res.json())
                .then((datas) => setData(datas))
                .catch((err) => setError(err.message));
        } else {
            setError("Username not found in session storage.");
        }
    }, []);

    return (
        <div>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                data.length > 0 ? (
                    <Resivercart data={data} />
                ) : (
                    <p>Loading...</p>
                )
            )}
        </div>
    );
};

export default Confirmrequest;
