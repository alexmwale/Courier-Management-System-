import React from 'react';
import FormField from './FormField';
import CheckBox from './CheckBox';
import Button from './Button';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="image-circle"></div>
        <h2>Create Your Account</h2>
        <form>
          <FormField label="Full Name" type="text" placeholder="Full Name" />
          <FormField label="Email Address" type="email" placeholder="Email Address" />
          <FormField label="Password" type="password" placeholder="Password" />
          <CheckBox label="I agree to the terms and conditions and the privacy policy" />
          <Button text="Sign Up" />
        </form>
        <p>
          I'm already an existing member! <NavLink to="/Sign.In.LogInPage"><a href="/signin">Sign In</a></NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
