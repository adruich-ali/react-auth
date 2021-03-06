import React from 'react'
import google1 from '../assets/google.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'


const Login = () => {
    const google = ()=>{
        window.open("http://localhost:5000/auth/google");
    }
    return (
        <div className="login">
            <h1 className="loginTitle">Chose You Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={google1} alt="google" className="icon"/>
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={facebook} alt="facebook" className="icon"/> 
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={github} alt="github" className="icon"/>
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="UserName" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
