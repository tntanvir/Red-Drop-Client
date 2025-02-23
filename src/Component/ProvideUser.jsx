import React from 'react';
import { BiSearch, BiSolidDonateBlood } from "react-icons/bi"
import { Link } from 'react-router-dom';

const ProvideUser = () => {
    return (

        <div id='provide' className="flex flex-col md:flex-row items-center justify-center gap-4 p-5 flex-wrap">
            <Link to={'/account/deshboard/request'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit min-h-[18rem]">

                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSolidDonateBlood /> </div>
                    <h1 className='text-2xl font-semibold'>Donat Blood</h1>
                    <p className='text-center'>Blood is irreplaceable, and there is always a constant demand for it in hospitals and medical facilities. By donating blood, you can directly contribute to saving lives in your community and beyond. One pint of blood can save up to three lives.</p>

                </div>
            </Link>
            {/* <Link to={'/resivedfrom'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit min-h-[18rem]">
                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSearch /> </div>
                    <h1 className='text-2xl font-semibold'>Search Blood</h1>
                    <p className='text-center'>Welcome to our platform, where you can quickly and easily find blood donors in your area. We understand that in times of need, every drop of blood counts, and our mission is to connect those in need with willing donors.</p>
                </div>
            </Link> */}
            <Link to={'/resivedPost'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit min-h-[18rem]">
                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSearch /> </div>
                    <h1 className='text-2xl font-semibold'>Resived Post</h1>
                    <p className='text-center'>Welcome to our platform, where you can quickly and easily find blood donors in your area. We understand that in times of need, every drop of blood counts, and our mission is to connect those in need with willing donors.</p>
                </div>
            </Link>
            {/* <Link to={'/resivedfrom'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit min-h-[18rem]">
                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSearch /> </div>
                    <h1 className='text-2xl font-semibold'>Search Blood</h1>
                    <p className='text-center'>Welcome to our platform, where you can quickly and easily find blood donors in your area. We understand that in times of need, every drop of blood counts, and our mission is to connect those in need with willing donors.</p>
                </div>
            </Link> */}
        </div>

    );
};

export default ProvideUser;