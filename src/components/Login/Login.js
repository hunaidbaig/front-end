import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate ,Link } from "react-router-dom";
import styles from './style.module.css'
import GoogleButton from "react-google-button";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {signIn , googleSignIn} = useUserAuth()
  const [error, setError] = useState("")


  useEffect(()=>{
    let userToken = localStorage.getItem('user');
    if(userToken) navigate('/');

  },[])

  const handleSubmit =async (e) => {
      e.preventDefault();
  
      try{
        const { user } = await signIn(email,password)
        
        console.log(user.accessToken)
        navigate("/")
        localStorage.setItem('user', user?.accessToken)
        setError("")
        console.log(email)
      }catch(err){
        setError(err.message)
      }   
  };

  const handleGoogleSignIn = async (e)=>{
    e.preventDefault()
    try{
        const {user} = await googleSignIn()
        localStorage.setItem('user', user?.accessToken)
        console.log("done", user)
        navigate("/chat")
    }catch(err){
        setError(err.message)
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
      <h1>Log In</h1>
      {error && <p className={styles.error}>{error}</p>}
      <label htmlFor="email">Email:</label>
        <input
          name='email'
          placeholder='Email'
          type='email'
          id="email"
          value={email}
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
        <button type="submit">Log in</button>
        <GoogleButton class="googleBtn" onClick={handleGoogleSignIn} className={styles.googleBtn} style={{ width: "96%" , borderRadius: "5px"}}/>
        <p>Don't have an account? <Link to="/signup">sign up</Link></p>
      </form>
    </div>
  );
}

export default Login;
