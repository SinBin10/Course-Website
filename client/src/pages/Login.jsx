import { useState } from "react";

const Login = () => {
  const [loginInput, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    setInputLogin({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(loginInput);
  };
  return (
    <div className="flex text-white mx-52 gap-40">
      <div className="w-[46%]">
        <img src="../../public/images/login.png" alt="A guy using a laptop" />
      </div>
      <div>
        <h1 className="text-5xl font-bold my-4">Login Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="email">Email: </label>
            <input
              className="text-black"
              type="email"
              name="email"
              value={loginInput.email}
              onChange={handleLogin}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              className="text-black"
              type="password"
              name="password"
              value={loginInput.password}
              onChange={handleLogin}
            />
          </div>
          <input
            className="bg-white text-black cursor-pointer w-[25%] rounded-lg px-2"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
