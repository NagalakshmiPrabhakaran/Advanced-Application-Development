import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
    <>
    <h2></h2>
    <div className="container-login" id="container">
      <div className="form-container-login sign-up-container">
        <form  action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign Up</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your account</span>
          <input type="text" placeholder="Name" />
          <br/>
          <input type="email" placeholder="Email" />
          <br/>
          <input type="password" placeholder="Password" />
          <br/>
          <input type="password" placeholder="Confirm Password" />
          <br/>
          <button><Link to ='/login' className='bollon'>Register</Link></button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">
              
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signUp">
              <Link to='/login' className='bollon'>Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </>
  
    </div>
  )
}

export default Login
