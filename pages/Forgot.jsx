import React, { useState } from 'react'
import axios from 'axios';

function Forgot() {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
    try {
        const res = await axios.post(
            "http://localhost:4000/api/auth/forgot-password",
            { email }
        );

        alert(res.data.message);
        setEmail("");
    } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
    }
};

  return (
    <div className='container mt-5'>
        <h2>Forgot Password</h2>
        <input type="email" className='form-control' placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)} />
            <button className='btn btn-primary mt-3' onClick={handleSubmit}>
                Submit
            </button>
    </div>
  );
}

export default Forgot;