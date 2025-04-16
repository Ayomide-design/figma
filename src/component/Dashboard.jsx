import React from "react";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";


const Dashboard = () => {
    return (
        <>
        <div className="flex justify-center w-[100vw] p-3">
            <div className="max-w-[50%] min-w-[50%] flex flex-col space-y-20">
                {/* platform login and setting buttons */}
                <div className="flex justify-end">
                    <div className="space-x-2 flex">
                        <button className="px-3 py-1.5 rounded-lg bg-gray-200 flex items-center">Platform Login <IoLogOutOutline className="ml-2" size={20}/></button>
                        <button className="px-3 py-1.5 rounded-lg bg-gray-200 flex items-center">Settings <IoSettingsOutline className="ml-2" size={20}/></button>                                  
                    </div>
                </div>

                {/* Payout Request */}
                <div className="font-semibold text-xl space-y-4">
                    <h2>Your Payout Resquest</h2>
                    <div className="border rounded-xl p-5 ">
                        <div className="flex justify-between items-start">
                            <h1 className="text-2xl space-x-2 ">
                                <span className="font-bold">500</span>
                                <span className="text-xl">USD</span>
                            </h1>
                            <span className="py-1.5 px-3 bg-gray-200 rounded-full">pending</span>
                        </div>
                        
                        <p>Your split: NaN <span className="text-lg">USD</span></p>
                        <p>Dec 25th 2024</p>
                    </div>
                    <button className="py-2 px-6 bg-blue-700 text-white rounded-2xl font-thin">View all Payouts</button>
                </div>

                {/* Trading */}
                <div className="font-semibold text-xl space-y-4">
                    <h2>Trading</h2>
                    <div className="border rounded-xl p-5 ">
                        <div className="flex items-start space-x-2">
                            <h1 className="text-2xl space-x-2 ">
                                <span className="font-bold">100k EOD Evaluation</span>
                            </h1>
                            <span className="py-1.5 px-3 bg-[#31EC28] rounded-full text-white font-medium">Passed</span>
                        </div>
                        
                        <p className="text-lg text-gray-500">PUR6474 <span className="font-bold text-black">99187.86</span> USD</p>
                        {/* profile target and trading days progress bar */}
                        <div className="border rounded-lg p-3 flex space-x-4">
                            <div className="max-w-[60%] min-w-[60%]">
                                <h3>Profit Target</h3>
                                <div className="min-h-[14px] bg-gray-200 rounded-xl min-w-[100%]"></div>
                                <div className="w-[100%] flex justify-between text-sm text-gray-400">
                                    <p>$0.00</p>
                                    <p>$6,000.00</p>
                                </div>
                            </div>
                            <div className="max-w-[30%]">
                                <h3>Profit Target</h3>
                                <div className="min-h-[14px] bg-gray-200 rounded-xl min-w-[100%]"></div>
                                <div className="w-[100%] flex justify-between text-sm text-gray-400">
                                    <p>1</p>
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="py-2 px-6 bg-blue-700 text-white rounded-2xl font-thin">Start New Account</button>
                </div>

                {/* Note */}
                <div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Dashboard;