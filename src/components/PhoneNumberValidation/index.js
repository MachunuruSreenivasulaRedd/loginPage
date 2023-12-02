import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './index.css'

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
        <PhoneInput
        country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          placeholder='Enter your phone number'
        />
      {!valid && (
        <p className='span_dooper'>Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;