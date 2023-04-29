import React, { useState } from 'react';

const Login = ({ checkoutButtonShown, setcheckoutButtonShown, showLoginForm, setShowLoginForm, setLoginData, setShowAddressForm }) => {

  const getLoginData = () => {
    let elementsArray = document.getElementsByClassName('login-input');
    let inputName = [ 'name', elementsArray[0].value ];
    let inputEmail = [ 'email', elementsArray[1].value ];
    let inputPassword = [ 'password', elementsArray[2].value ];

    setLoginData([ inputName, inputEmail, inputPassword ]);
  }

  return (
    <div>
      {checkoutButtonShown && (
          <button type='button' onClick={() => {
            setShowLoginForm(!showLoginForm);
            setcheckoutButtonShown(!checkoutButtonShown);
          }}>Checkout!</button>
      )}
      {showLoginForm && (
        <label>
          Name:
          <input className='login-input' type='text' placeholder='Enter Name'/><br/>
          Email:
          <input className='login-input' type='email' placeholder='Enter Email'/><br/>
          Password:
          <input className='login-input' type='password' placeholder='Enter Password'/><br/>
          <button type='button' onClick={() => {
            getLoginData();
            setShowAddressForm(true);
            setShowLoginForm(!showLoginForm);
            }}>Next</button>
        </label>
      )}
    </div>
  );
};

export default Login;