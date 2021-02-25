import React from 'react'
import './style.css'
import ButtonOne from './../components/button/index'

function LogInPage(){
    return(
        <div className="loginContentPage">
            <div class="card white-panel">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                            <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <ButtonOne text="Log In!" to="/dashboard"/>
                    </form>
                </div>
            </div>
            <div class="card register-info-box">
                <div class="card-body">
                    <h5 class="card-title">Don't have an account?</h5>
                    <p class="card-text">Contact your schools to get access.</p>
                </div>
            </div>
        </div>
    )
}

export default LogInPage