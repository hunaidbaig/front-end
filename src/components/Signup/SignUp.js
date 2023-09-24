import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './style.module.css'
import logo from "../../Chatge-logo.png";
import { useUserAuth } from "../../context/UserAuthContext";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const {signUp} = useUserAuth()
  const navigate = useNavigate();

  useEffect(()=>{
    let userToken = localStorage.getItem('user');
    if(userToken) navigate('/chat');

  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();


    try{
     await signUp(email,password)
     setError("")
     navigate("/login")
    //  console.log(email)
    }catch(err){
      setError(err.message)
    }
  };

  return (
    <>
    <img src={logo} width="200px" alt="log" />
    <div className={styles.container}>
    <h3>
          <span> Join ChatGE today </span>and unlock a world of contract management efficiency. Sign up now to access our cutting-edge AI-powered solution and take control of your diverse contracts..
        </h3>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      {error && <p className={styles.error}>{error}</p>}
      <label htmlFor="email">Email:</label>
        <input
          name='email'
          placeholder='Email'
          type='email'
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>I have already an account. <Link className={styles.loginBtn} to="/login">Login</Link></p>
      </form>
    </div>
    </>
  );
}

export default SignUp;
