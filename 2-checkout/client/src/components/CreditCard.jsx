import React from 'react';

const CreditCard = ({ setShowCreditForm, setCreditData, setShowConfirm }) => {
  const getCreditData = () => {
    let elementsArray = document.getElementsByClassName('credit-input');
    let creditNumber = [ 'creditNumber', elementsArray[0].value ];
    let exp = [ 'exp', elementsArray[1].value ];
    let cvv = [ 'cvv', elementsArray[2].value ];
    let billingZipcode = [ 'billingZipcode', elementsArray[3].value ];

    setCreditData([ creditNumber, exp, cvv, billingZipcode ]);
  };

  return(
    <div>
      <label>
        Credit Card Number:
        <input className='credit-input' type='number' placeholder='Enter CreditCard Number'/><br/>
        Expiration:
        <input className='credit-input' type='month'/><br/>
        CVV:
        <input className='credit-input' type='number'/><br/>
        Billing Zipcode:
        <input className='credit-input' type='number'/><br/>
        <button type='button' onClick={() => {
          getCreditData();
          setShowCreditForm(false);
          setShowConfirm(true);
        }}>Next</button>
      </label>
    </div>
  )
};

export default CreditCard;