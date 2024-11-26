import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
  };
  return (
    <div className="flex text-white mx-52 gap-40">
      <div className="w-[46%]">
        <img
          src="../../public/images/register.png"
          alt="a girl using a phone"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold my-4">Registration Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* this name attribute in the input tag should have the
           value same as it has been written in the model file
            .... I wonder why .... */}
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              className="text-black"
              name="username"
              value={input.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="text-black"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              className="text-black"
              name="phone"
              value={input.phone}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="text-black"
              name="password"
              value={input.password}
              onChange={handleInput}
            />
          </div>
          <input
            className="bg-white text-black cursor-pointer w-[20%] rounded-lg"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
