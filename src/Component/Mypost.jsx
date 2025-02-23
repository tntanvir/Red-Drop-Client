import React from 'react';
import { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Mypost = () => {
    const [mydata, setMydata] = useState(null)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/resiver/data/?username=${sessionStorage.getItem('username')}`)
            .then(res => res.json())
            .then(data => setMydata(data.reverse()));
    }, [load]);
    return (
        <div>

            <div>
                {
                    mydata && <PostCard data={mydata} show={true} load={load} setLoad={setLoad} />
                }
            </div>
        </div>
    );
};

export default Mypost;