import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Register() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFirstNameChange = (e) => setFirstName(e.target.value);

    const handleLastNameChange = (e) => setLastName(e.target.value);

    const handleUserNameChange = (e) => setUserName(e.target.value);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
          await createUserWithEmailAndPassword(auth, email, password)
          console.log("User Created");
        }catch(err){
          console.log(err);
        }

        if(password === confirmPassword){
            navigate("/");
        }
        else{
            setError("Passwords do no match");
        };


    }

    // const password = document.getElementById('password');
    // const confirmPassword = document.getElementById('confirm-password');

    // const validatePassword = () =>{
    //     if(password.value !== confirmPassword.value){
    //         confirmPassword.setCustomValidity("Passwords do not match");
    //     }
    //     else{
    //         confirmPassword.setCustomValidity("");
    //         window.location.pathname = "/";
    //     }
    // }
    // password.onchange = validatePassword;
    // confirmPassword.onkeyup = validatePassword;


    

  return (
    <div className='login-form'>
      <form className='register-form' onSubmit={handleSubmit}>

        <label htmlFor="first-name">First Name: </label>
        <input type="text" value={firstname} onChange={handleFirstNameChange} id="first-name" name="first-name" placeholder='Enter your first name' required/>

        <label htmlFor="last-name">Last Name: </label>
        <input type="text" value={lastname} onChange={handleLastNameChange} id="last-name" name="last-name" placeholder='Enter your last name' required/>

        <label htmlFor="user-name">Username: </label>
        <input type="text" value={username} onChange={handleUserNameChange} id="user-name" name="user-name" placeholder='Enter your username' required/>

        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} id="email" name="email" placeholder='Enter your email' required/>

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" placeholder='Enter your password' required/>

        <label htmlFor="confirm-password">Confirm Password: </label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} id="confirm-password" name="confirm-password" placeholder='Confirm your password' required/>
        {error && <p className='error-msg'>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>

  )
}

export default Register
