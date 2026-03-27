import { useState } from "react";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful ✅");
      
    } catch (err) {
      console.log(err);
      alert("Login failed ❌");
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">

    <div className="bg-white p-8 rounded-xl shadow w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>

  </div>
);
}

export default Login;