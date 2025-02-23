// import React from 'react';

// const Resivercart = ({ data }) => {
//     return (
//         <div className="flex flex-wrap items-center py-6 space-y-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
//             {data.map((item) => (
//                 <div
//                     key={item.id}
//                     className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
//                 >
//                     <div className='p-6'>
//                         <h3 className="text-lg font-semibold text-blue-600">Doner Information</h3>
//                         <div className="p-6 flex items-center space-x-4 border-b border-gray-200">
//                             <img
//                                 src={item.sender?.moreinfo?.image || 'https://via.placeholder.com/150'}
//                                 alt={`${item.sender?.moreinfo?.name || 'Unknown Sender'}'s profile`}
//                                 className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-sm"
//                             />
//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800">{item.sender?.moreinfo?.name || 'No Name'}</h2>
//                                 <p className="text-sm text-gray-500">Blood Group: <span className="font-medium">{item.sender?.moreinfo?.blood_group || 'N/A'}</span></p>
//                                 <p className="text-sm text-gray-500">Location: {item.sender?.moreinfo?.location || 'Unknown'}</p>
//                                 <p className="text-sm text-gray-500">Phone: {item.sender?.moreinfo?.phone || 'No Phone'}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="p-6">
//                         <h3 className="text-lg font-semibold text-blue-600">Receiver Information</h3>
//                         <div className="mt-4 flex items-center space-x-4">
//                             <img
//                                 src={item.resiver?.moreinfo?.image || 'https://via.placeholder.com/150'}
//                                 alt={`${item.resiver?.moreinfo?.name || 'Unknown Receiver'}'s profile`}
//                                 className="w-14 h-14 rounded-full object-cover border-2 border-red-400 shadow-sm"
//                             />
//                             <div>
//                                 <p className="text-lg font-medium text-gray-800">{item.resiver?.moreinfo?.name || 'No Name'}</p>
//                                 <p className="text-sm text-gray-500">Blood Group: <span className="font-medium">{item.resiver?.moreinfo?.blood_group || 'N/A'}</span></p>
//                                 <p className="text-sm text-gray-500">Location: {item.resiver?.moreinfo?.location || 'Unknown'}</p>
//                                 <p className="text-sm text-gray-500">Phone: {item.resiver?.moreinfo?.phone || 'No Phone'}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="p-6 bg-gray-50">
//                         <h3 className="text-lg font-semibold text-green-600">Donation Request Details</h3>
//                         <p className="mt-2 text-sm text-gray-600">Location: <span className="font-medium">{item.post?.location || 'Unknown'}</span></p>
//                         <p className="text-sm text-gray-600">Blood Group Needed: <span className="font-medium">{item.post?.blood_gp || 'N/A'}</span></p>
//                         <p className="text-sm text-gray-600">Date From: <span className="font-medium">{item.post?.date_from || 'N/A'}</span></p>
//                         <p className="text-sm text-gray-600">Date To: <span className="font-medium">{item.post?.date_to || 'N/A'}</span></p>
//                         <p className="text-sm text-gray-600">Additional Info: {item.post?.more || 'No Information'}</p>
//                     </div>

//                     <div className="p-6 bg-blue-50 flex justify-between items-center border-t border-gray-200">
//                         <p className="text-sm font-medium text-blue-700">
//                             Confirmed: {item.post?.resivedBool ? "Yes" : "No"}
//                         </p>
//                         <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm focus:outline-none">
//                             View Details
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Resivercart;

import React from 'react';

const Resivercart = ({ data }) => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-4 border border-gray-300">Donor </th>
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
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={item.sender?.moreinfo?.image || 'https://via.placeholder.com/50'}
                                            alt={item.sender?.moreinfo?.name || 'Unknown Sender'}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                                        />
                                        <div>
                                            <p className="font-medium">{item.sender?.moreinfo?.name || 'No Name'}</p>
                                            <p className="text-xs text-gray-500">{item.sender?.moreinfo?.phone || 'No Phone'}</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex items-center space-x-3">
                                        <img
                                            src={item.resiver?.moreinfo?.image || 'https://via.placeholder.com/50'}
                                            alt={item.resiver?.moreinfo?.name || 'Unknown Receiver'}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-red-400"
                                        />
                                        <div>
                                            <p className="font-medium">{item.resiver?.moreinfo?.name || 'No Name'}</p>
                                            <p className="text-xs text-gray-500">{item.resiver?.moreinfo?.phone || 'No Phone'}</p>
                                        </div>
                                    </div> */}
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

export default Resivercart;
