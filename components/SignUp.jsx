import { useState } from 'react';
import useCreateUser from '../utils/useCreateUser';
import { Link } from 'react-router-dom';
import "../src/auth.css"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userCreated, setUserCreated] = useState(false);
  const createUser = useCreateUser();

  const handleSignup = async (e) => {
    e.preventDefault();
    if(password === passwordConfirm){
        try {
      
            createUser(email,password,passwordConfirm)
            console.log('User created successfully');
            setUserCreated(true);
            
            
          } catch (error) {
            console.error('Signup error:', error.message);
          }
    }
    else{
        alert("Password did not match")
    }
    
  };

  return ( userCreated ? (
    
    <h1 className='text-white font bold'>User Created</h1>
    
  ) : (
    <div className='container'>
      
      <div className='form-container'>
        <h1 className='title'>resolveX</h1>
        <h3 className='sub-title'>Register</h3>
        <form onSubmit= {handleSignup} className='form'>
          <input
            type="email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
            className='input'
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
            className='input'
          />
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            placeholder='Confirm Password'
            className='input'
          />
          <button type="submit" className='submit-btn'>Sign up</button>
        </form>
        <p>Already have an account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    </div>
 ) 
  );
};

export default Signup;
