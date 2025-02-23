

import React from 'react';

const Donationcart = ({ data }) => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-4 border border-gray-300">Resiver </th>
                            <th className="p-4 border border-gray-300">Location</th>
                            <th className="p-4 border border-gray-300">Blood Group</th>
                            <th className="p-4 border border-gray-300">Date From</th>
                            <th className="p-4 border border-gray-300">Date To</th>
                            <th className="p-4 border border-gray-300">Confirmed</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border border-gray-300">
                                <td className="p-4 flex items-center space-x-6 border border-gray-300">
                                    {/* <div className="flex items-center space-x-3">
                                        <img
                                            src={item.sender?.moreinfo?.image || 'https://via.placeholder.com/50'}
                                            alt={item.sender?.moreinfo?.name || 'Unknown Sender'}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                                        />
                                        <div>
                                            <p className="font-medium">{item.sender?.moreinfo?.name || 'No Name'}</p>
                                            <p className="text-xs text-gray-500">{item.sender?.moreinfo?.phone || 'No Phone'}</p>
                                        </div>
                                    </div> */}
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={item.resiver?.moreinfo?.image || 'https://via.placeholder.com/50'}
                                            alt={item.resiver?.moreinfo?.name || 'Unknown Receiver'}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-red-400"
                                        />
                                        <div>
                                            <p className="font-medium">{item.resiver?.moreinfo?.name || 'No Name'}</p>
                                            <p className="text-xs text-gray-500">{item.resiver?.moreinfo?.phone || 'No Phone'}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300">{item.post?.location || 'Unknown'}</td>
                                <td className="p-4 border border-gray-300">{item.post?.blood_gp || 'N/A'}</td>
                                <td className="p-4 border border-gray-300">{item.post?.date_from || 'N/A'}</td>
                                <td className="p-4 border border-gray-300">{item.post?.date_to || 'N/A'}</td>
                                <td className="p-4 border border-gray-300 font-medium text-blue-700">{item.post?.resivedBool ? "Yes" : "No"}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Donationcart;
