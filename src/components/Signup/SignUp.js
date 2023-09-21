import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'
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
     navigate("/signin")
     console.log(email)
    }catch(err){
      setError(err.message)
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
      </form>
    </div>
  );
}

export default SignUp;
