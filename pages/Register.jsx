import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
           const res = await axios.post(
            "http://localhost:4000/api/auth/register",
            {
                username,
                email,
                password,
            }
           );

           alert(res.data.message);
           setUsername("");
           setEmail("");
           setPassword("");
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    };

  return (
    <div className='container mt-5'>
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
            <input type="text" className='form-control mb-3' placeholder='Username'
                value={username} onChange={(e) => setUsername(e.target.value)} required />

            <input type="email" className='form-control mb-3' placeholder='Email'
                value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" className='form-control mb-3' placeholder='password'
                value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button className='btn btn-success w-100' type='submit'>
                Register
            </button>
        </form>

        <p className='mt-3 text-center'>
            Forgot Password?
            <Link to="/forgot">Click Here</Link>
        </p>
    </div>
  );
}

export default Register