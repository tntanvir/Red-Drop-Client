import React from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";

const Counter = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center  py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl w-full">
                {/* User Reviews Counter */}
                <div className="flex flex-col items-center justify-center bg-[#fff7f0] h-60 rounded-3xl  p-6 transform transition-transform hover:scale-105">
                    <div className="text-5xl font-bold text-[#f2ba2a] mb-2 flex justify-center items-center gap-1 border-b-[1px] border-[#34405426] w-full pb-3">
                        <CountUp start={0} end={1000} duration={5} /> <FaPlus className="text-2xl" />
                    </div>
                    <h3 className="text-lg  text-black pt-3">User Reviews</h3>
                </div>

                {/* Posts Counter */}
                <div className="flex flex-col items-center justify-center bg-[#e8fcf6] h-60 rounded-3xl  p-6 transform transition-transform hover:scale-105">
                    <div className="text-5xl font-bold text-[#32af8b] mb-2 flex justify-center items-center gap-1 border-b-[1px] border-[#34405426] w-full pb-3">
                        <CountUp start={0} end={6000} duration={5} /> <FaPlus className="text-2xl" />
                    </div>
                    <h3 className="text-lg  text-black pt-3">Total Posts</h3>
                </div>

                {/* Users Counter */}
                <div className="flex flex-col items-center justify-center bg-[#fff2f0] h-60 rounded-3xl  p-6 transform transition-transform hover:scale-105">
                    <div className="text-5xl font-bold text-[#ca563f] mb-2 flex justify-center items-center gap-1 border-b-[1px] border-[#34405426] w-full pb-3">
                        <CountUp start={0} end={7000} duration={5} /> <FaPlus className="text-2xl" />
                    </div>
                    <h3 className="text-lg  text-black pt-3">Total Happy Users</h3>
                </div>
            </div>
        </div>
    );
};

export default Counter;
