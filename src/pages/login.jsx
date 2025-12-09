import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const {user,login,logout} = useUser();
  const [inputName, setInputName] = useState('');
  const Navigate = useNavigate()
  const handleLogin = ()=>{
    login(inputName);
    Navigate("/dashboard");
  }
  return (
    <div>
      <h1 className="text-3xl mb-6">Welcome</h1>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <label htmlFor="name" className="min-w-[100px]">
            Username
          </label>
          <input
            type="text"
            id="name"
            className="border border-solid border-b-neutral-800 rounded-sm"
            value={inputName}
            onChange={(e)=>setInputName(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <label htmlFor="password" className="min-w-[100px]">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-solid border-b-neutral-800 rounded-sm"
          />
        </div>
        <button onClick={handleLogin} className="bg-blue-400 border border-solid border-blue-800 text-white w-min px-4 py-2 rounded-sm cursor-pointer ml-auto">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
