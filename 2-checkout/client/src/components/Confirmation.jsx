import React, { useEffect } from 'react';

const Confirmation = ({ setcheckoutButtonShown, setShowLoginForm, loginData, addressData, creditData, setShowConfirm, setSummaryData, sendForm }) => {

  useEffect(() => {
    setSummaryData([loginData, addressData, creditData]);
  }, []);

  return (
    <div>
      <div>Name: {loginData[0][1]}</div>
      <div>Email: {loginData[1][1]}</div>
      <div>Password: {loginData[2][1]}</div>
      <div>Address: {addressData[0][1]}</div>
      <div>City: {addressData[1][1]}</div>
      <div>State: {addressData[2][1]}</div>
      <div>Zipcode: {addressData[3][1]}</div>
      <div>Phone Number: {addressData[4][1]}</div>
      <div>Credit Card: {creditData[0][1]}</div>
      <div>Exp: {creditData[1][1]}</div>
      <div>CVV: {creditData[2][1]}</div>
      <div>Billing Zipcode: {creditData[3][1]}</div>
      <button type='submit' onClick={() => {
        setShowConfirm(false);
        setcheckoutButtonShown(true);
        // getSummary();
        sendForm();
      }
        }>Purchase!</button>
    </div>
  )
};

export default Confirmation;