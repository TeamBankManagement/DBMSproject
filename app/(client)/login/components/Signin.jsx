import React, { useState } from 'react';
import { FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const Signin = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, pass} = formData;
 console.log(pass);
    try {
      const res = await signIn("credentials", {
        email,
        pass,
        redirect: false,
      });

      if (res.error) {
        // setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={formData.pass}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Login" className="btns solid" />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <button  className="social-icon" onClick={() => signIn("google")}>
            <FaMicrosoft />
          </button>

          <a href="#" className="social-icon">
            <FaGoogle />
          </a>
        </div>
      </form>
    </>
  );
};

export default Signin;
