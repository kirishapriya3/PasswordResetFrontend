import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Reset() {
    const {token} = useParams();
    const [password, setPassword] = useState("");

    const handleReset = async () => {
    try {
        const res = await axios.post(
            `http://localhost:4000/api/auth/reset-password/${token}`,
            { password }
        );

        alert(res.data.message);
        setPassword("");
    } catch (error) {
        alert(error.response?.data?.message || "Error resetting password");
    }
};

  return (
    <div className="container mt-5">
        <h2>Reset Password</h2>
        <input type="password" className="form-control"  placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}/>
        <button className="btn btn-success mt-3" onClick={handleReset}>
            Reset
        </button>
    </div>
  );
}

export default Reset;