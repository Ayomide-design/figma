import React from "react";


const LoginPage = () => {
    return (
        <>
            <div>

                <div>
                    <h1>Welcome back to PurdiaCapital</h1>
                    <h3>Login</h3>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type=" email" id=" email" />
                </div>
                <div>
                    <label for="Password">Password</label>
                    <input type=" password" id=" Password" />
                </div>
                <div>
                    <p>Forgotten Password</p>
                </div>
                <div>
                    <button>Login </button>
                </div>

            </div>
        </>
    )
}

export default LoginPage;