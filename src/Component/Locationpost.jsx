import React from 'react';
import { useParams } from 'react-router-dom';
import Sideber from './Sideber';
import fack from '../fack.json'
import PostCard from './PostCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Locationpost = () => {
    const { location } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        const bUrl = import.meta.env.VITE_BACKEND
        fetch(`${bUrl}/resiver/data/?location=${location}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [location])

    const [value, setValue] = useState('')
    const [fackdata, setfackdata] = useState(fack)

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

            {data && <PostCard data={data} />}
        </div>
    );
};

export default Locationpost;