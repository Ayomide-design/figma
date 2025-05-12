import React from "react";


const LoginPage = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome back to <span class="text-blue-600 font-bold">Haptle</span></h2>
                    <p className="text-center text-gray-500 text-lg mt-1">Log in</p>
                    <div className="mt-6">
                        <label classname="text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 bg-blue-100 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mt-4 relative">
                        <label class="text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-blue-100 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div className="mt-2 text-right">
                        <p className="text-sm text-gray-500">Forgot Password ?</p>
                    </div>


                    <button
                        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Login
                    </button>
                </div>
            </div>

        </>
    )
}

export default LoginPage;