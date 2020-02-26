import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import '../assets/scss/main.scss'
import '../assets/scss/responsive.scss'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
    <div className="container">
        <div className="tab">
            <div className="container">
                <h2>Welcome to Stock Management!</h2>
                <p>Login  to access unlimited features from Stock Web App</p>
            </div>
        </div>
        <div className="login_side">
            <div className="container">
                <h1>Log in</h1>
                 <div className="box-login">
                    <div className="fieldset-body" id="login_form">
                    <form >
                        <p className="field">
                            <label htmlFor="user">E-MAIL</label>
                            <input type="text" id="user" name="user" title="Username" />
                          </p>
                              <p className="field">
                            <label htmlFor="pass">PASSWORD</label>
                            <input type="password" id="pass" name="pass" title="Password" />
                            <span id="valida" className="i i-close"></span>
                          </p>
                  
                            <label className="checkbox">
                              <input type="checkbox" value="TRUE" title="Keep me Signed in" /> Keep me Signed in
                            </label><br/>
                              {/* <input type="submit" className="btn" value="Login" title="Get Started" /> */}
                              <button className="btn"><Link to="/dashboard">Login</Link></button>
                    </form>
                    </div>
                  </div>
            </div>
        </div>    
    </div>   
        )
    }
}

export default Login