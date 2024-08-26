import React from "react";
import { NavLink } from "react-router-dom";




export default function Signin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value; 
        const password = document.getElementById("password").value;

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="container" style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#FFF', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                    <div className="border rounded-full w-[200px] h-[200px] border-black"></div>
                </div>
                <h2 style={{ marginBottom: '20px', textAlign: 'left' }} className="font-bold"></h2>
                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input className="bg-gray-200" type="email" id="email" name="Email" placeholder=" Alex Smith" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                </div>
                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input className="bg-gray-200" type="password" id="password" name="Password" placeholder="*******" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                </div>
               <NavLink to="/"> <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#74512D', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>Sign In</button></NavLink>
            </form>
            <div className="flex justify-between" style={{ backgroundColor: 'transparent', marginTop: '10px' }}>
                <button style={{ textAlign: 'left', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'black' }}>Forgot password</button>
                <NavLink to="/SignUpPage">
                    <button style={{ textAlign: 'right', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'blue' }}>Sign Up</button>
                </NavLink>
            </div>
        </div>
    );
}
