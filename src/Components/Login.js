import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      toast("Welcome!!!");
      await signInWithEmailAndPassword(auth,email,password)
      
    }catch(err){
      toast(err.message);
    }
  }


  return (
    <div className='login-form'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input id='email' type="text" value={email} onChange={handleEmail} className='email' placeholder="Enter your email"/>
            <br />
            <label htmlFor="password">Password: </label>
            <input id='password' type="password" value={password} onChange={handlePassword} className='password' placeholder="Enter your password" required/>
            
            <div>
            <button className='login-btn'>Login</button>
            <br />
            <Link to="/register" className='register-link'>Don't have an account? <span className='login-span'>Register here</span></Link>

            </div>
            <ToastContainer />
        </form>
    </div>
  )
}

export default Login
