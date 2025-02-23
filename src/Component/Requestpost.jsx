




import { useState } from 'react';
import { Button, Input, Textarea, Select as MaterialSelect, Option } from '@material-tailwind/react';
import Select from 'react-select';
import { useEffect } from 'react';
import blood from '../blood.json';
import locations from '../fack.json';
import Datepick from './Datepick';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Requestpost = () => {
    const navigate = useNavigate();

    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const [bdgroup, setBdgroup] = useState('');



    const [sdate, setSdate] = useState()
    const [edate, setEdate] = useState()



    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('number', number);
        formData.append('location', location);
        formData.append('blood_gp', bdgroup);
        formData.append('date_from', sdate ? sdate.toISOString().split('T')[0] : '');
        formData.append('date_to', edate ? edate.toISOString().split('T')[0] : '');
        formData.append('more', description);

        const userId = sessionStorage.getItem('id');
        if (userId) {
            console.log(userId);
            formData.append('user', userId);
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/resiver/data/', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem('token')}`,
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Post created successfully:", data);
                navigate('/account/deshboard/mypost');
            } else {
                console.error("Failed to create post:", response.statusText);
            }

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };





    return (
        <div className="min-h-screen flex justify-center py-5">
            <div className="w-full  p-5 shadow-lg bg-white rounded-md">
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                    <Input
                        type="text"
                        label="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    {/* <Input
                        type="text"
                        label="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    /> */}


                    {
                        locations &&
                        <MaterialSelect label="Location" value={location} onChange={(e) => setLocation(e)}>
                            {locations?.map((e, i) => (

                                <Option key={i} value={e.name}>{e.name}</Option>
                            )
                            )}
                        </MaterialSelect>
                    }
                    {
                        blood &&
                        <MaterialSelect label="Blood Group" value={bdgroup} onChange={(e) => setBdgroup(e)}>
                            {blood?.map((e, i) => (

                                <Option key={i} value={e.bdGroup}>{e.bdGroup}</Option>
                            )
                            )}
                        </MaterialSelect>
                    }

                    <div className='flex gap-3 w-full '>
                        <Datepick date={sdate} setDate={setSdate} />
                        <Datepick date={edate} setDate={setEdate} />
                    </div>
                    <Textarea
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <Button type="submit" className="mt-5" fullWidth>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Requestpost;
