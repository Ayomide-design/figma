import React from "react";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";


const Dashboard = () => {
    return (
        <>
        <div className="flex justify-center w-[100vw] p-3">
            <div className="max-w-[50%] min-w-[50%] flex flex-col">
                {/* platform login and setting buttons */}
                <div className="flex justify-end">
                    <div className="space-x-2 flex">
                        <button className="px-3 py-1.5 rounded-lg bg-gray-200 flex items-center">Platform Login <IoLogOutOutline className="ml-2" size={20}/></button>
                        <button className="px-3 py-1.5 rounded-lg bg-gray-200 flex items-center">Settings <IoSettingsOutline className="ml-2" size={20}/></button>                                  
                    </div>
                </div>

                {/* Payout Request */}
                <div>
                </div>

                {/* Trading */}
                <div>
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