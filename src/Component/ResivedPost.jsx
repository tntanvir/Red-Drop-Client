
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sideber from './Sideber';
import fack from '../fack.json'
import PostCard from './PostCard';


const ResivedPost = () => {
    const [data, setData] = useState(null)
    const [fackdata, setfackdata] = useState(fack)
    useEffect(() => {
        const bUrl = import.meta.env.VITE_BACKEND
        fetch(`${bUrl}/resiver/data/`)
            .then(res => res.json())
            .then(data => {
                setData(data.reverse())
            })
    }, [])

    const [value, setValue] = useState('')
    const serchFill = (e) => {
        const search = e.target.value;
        setValue(search);
        const fillter = fack.filter((pro) => pro.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        console.log(fillter);
        setfackdata(fillter);

    }
    return (
        <div className='min-h-screen flex'>
            {fack && <Sideber data={fackdata} show={true} value={value} serchFill={serchFill} />}
            {data && <PostCard data={data} show={false} />}
        </div>
    );
};

export default ResivedPost;