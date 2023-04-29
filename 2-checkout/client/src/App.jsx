import React, { useState } from 'react';
import axios from 'axios';
import Login from './components/Login.jsx';
import Address from './components/Address.jsx';
import CreditCard from './components/CreditCard.jsx';
import Confirmation from './components/Confirmation.jsx';

const App = () => {
  /* Login Form State */
  const [ checkoutButtonShown, setcheckoutButtonShown ] = useState(true);
  const [ showLoginForm, setShowLoginForm ] = useState(false);
  const [ loginData, setLoginData ] = useState([]);
  /* Address Form State */
  const [ showAddressForm, setShowAddressForm ] = useState(false);
  const [ addressData, setAddressData ] = useState([]);
  /* Credit Form State */
  const [ showCreditForm, setShowCreditForm ] = useState(false);
  const [ creditData, setCreditData ] = useState([]);
  /* Confirmation Form State */
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ summaryData, setSummaryData ] = useState([]);

  const sendForm = () => {
    let request ={
      summaryData
    }

    axios.post('/checkout', request)
      .then((resData) => {
        alert('Purchase Submitted!');
        console.log('this is response from server', resData.data);
      })
      .catch((err) => {
        console.log('error requesting response from server!: ', err);
      })
  };

  const reloadPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <h1 onClick={ () => reloadPage() }>Multistep Checkout</h1>
      <Login checkoutButtonShown={checkoutButtonShown} setcheckoutButtonShown={setcheckoutButtonShown} showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} setLoginData={setLoginData} setShowAddressForm={setShowAddressForm}/>
      {showAddressForm && (<Address setShowAddressForm={setShowAddressForm} setAddressData={setAddressData} setShowCreditForm={setShowCreditForm}/>)}
      {showCreditForm && (<CreditCard setShowCreditForm={setShowCreditForm} setCreditData={setCreditData} setShowConfirm={setShowConfirm}/>)}
      {showConfirm && (<Confirmation setcheckoutButtonShown={setcheckoutButtonShown} loginData={loginData} addressData={addressData} creditData={creditData} setShowConfirm={setShowConfirm} setSummaryData={setSummaryData} sendForm={sendForm}/>)}
      <p>
        <code>Page Cookie: { JSON.stringify(document.cookie, undefined, "\t") }</code>
      </p>
    </div>
  )
}

export default App;