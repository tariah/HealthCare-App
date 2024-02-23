import React from 'react';
import image from '../img/frame.png';

const ForgotPassword = () => {
  return (
    <section className="container">
      <div id="grid1">
        <div className="text">
          <h2>Forgot Your Password?</h2>
          <p>No worries! Enter your email address, and we'll send you a link to reset your password. Regain access to your account and continue your wellness journey with us.</p>
        </div>
        <div>
          <img className="img" src={image} alt="frame"/>
        </div>
      </div>
      <div id="grid2">
        <h2>Forgot Password</h2>
        <form>
          <div className="input-container">
            <label for="email">Email</label>
            <input className="form-field" type="email"/>
          </div>
          <br/>
          <span className="btn-container">
            <button className="btn">
              CONTINUE
            </button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default ForgotPassword