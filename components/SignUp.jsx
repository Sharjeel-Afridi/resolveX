import { useState } from 'react';
import useCreateUser from '../utils/useCreateUser';

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
  <h1 className='title'>Sign Up</h1>
  <div className='form-container'>
    <form onSubmit= {handleSignup} className='form'>
      <label className='label'>Email</label>
      <input
        type="email"
        value={email}
        onChange= {(e) => setEmail(e.target.value)}
        required
        className='input'
      />
      <label className='label'>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='input'
      />
      <label className='label'>Confirm Password</label>
      <input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
        className='input'
      />
      <button type="submit" className='submit-btn'>Sign Up</button>
    </form>
  </div>
</div>
 ) 
  );
};

export default Signup;
