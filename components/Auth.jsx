import pb from "../lib/pocketbase";
import useLogout from "../utils/useLogout";
import useLogin from "../utils/useLogin";
import "../src/auth.css";




const Auth = () => {
    const { email, setEmail, password, setPassword, login, setLogin, handleSubmit } = useLogin();
    

    const logout = useLogout();

    if(login){
        return (
            <div className="loggedin-div">
                <h1>Logged in: {pb.authStore.model.email}</h1>
                <button 
                className="logout-btn"
                onClick={()=>{
                    logout()
                    setLogin(pb.authStore.isValid)
                    }}>Log Out</button>
            </div>
        )
    }

    return(
        <div className="login-div">
            <h1 className="login">Please Login</h1>
            <div className="logininput-div">
                <form onSubmit={handleSubmit} className="input-form">
                    <label>Email</label>
                    <input 
                    type="text" 
                    className='input-field'
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}></input>

                    <label>Password</label>
                    <input 
                    type="password" 
                    className='input-field'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}></input>

                    <button type="submit" className='login-btn'>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Auth;