import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div>
        <div>
          <img src="#" alt="" />
        </div>
        <div>
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              type="text"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div>
              <p>Have an account? <Link to='/sign-in'>Sign In!</Link></p>
              <p><Link to='/forgot-password'>Forgot password?</Link></p>
            </div>
            <button type='submit'>Sign Up</button>
          <div>
            <p>OR</p>
          </div>
          <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
