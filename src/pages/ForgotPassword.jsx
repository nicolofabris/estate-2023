import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  function onChange(e) {
    setEmail(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('email was sent')
    } catch (error) {
      toast.error('could not reset password')
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div>
        <div>
          <img src="#" alt="" />
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div>
              
            </div>
            <div>
              <p>Don't have an account? <Link to='/sign-up'>Register!</Link></p>
              <p><Link to='/forgot-password'>Forgot password?</Link></p>
            </div>
            <button type='submit'>Sign In</button>
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

export default ForgotPassword;
