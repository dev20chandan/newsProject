// src/PaymentForm.js
import React, { useEffect, useState } from 'react';
import './Payment.css'; // Import the CSS file
import { API_URL } from '../../Services/URLS';
import toast, { Toaster } from 'react-hot-toast';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    currency: 'INR',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData, '===');
  }, [formData]);

  const paymentHandler = async (e) => {
    e.preventDefault();
    const { amount, currency } = formData;

    if (!currency) return alert('Please select currency');
    if (!amount) return alert('Please enter amount');

    console.log(formData, 'sdkajskdjformData');

    const response = await fetch(`${API_URL}/api/order`, {
      method: 'POST',
      body: JSON.stringify({ ...formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const order = await response.json();

    const options = {
      key: 'rzp_test_QypuRVCy3b0nhq', // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: 'NSO 360', // Your business name
      description: 'Test Transaction',
      image: window.location.origin + '/image.png',
      order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        console.log(response, '=====response');
        const body = { ...response };

        const validateRes = await fetch(`${API_URL}/api/validate`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const jsonRes = await validateRes.json();
        // console.log(jsonRes, '====hereee');
        setFormData({ currency: 'INR'})
        toast.success("Thank you for payment fees")
        // alert('Thank you for payment fees');
      },
      prefill: {
        name: formData.name, // Your customer's name
        email: formData.email,
        contact: formData.phone, // Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Please enter valid details');
    });
    rzp1.open();
  };

  return (
    <div className="form-container">
       <Toaster
       position="top-center"
       reverseOrder={false}
      />
      <form onSubmit={paymentHandler} className="payment-form">
        <img src={window.location.origin + '/image.png'} alt="Logo" className="logo" />
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter The Name'
          className="input-field"
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter The Email'
          className="input-field"
          required
        />
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter The Phone'
          className="input-field"
          required
        />
        <input
          type='number'
          name='amount'
          value={formData.amount}
          onChange={handleChange}
          placeholder='Enter The Amount'
          className="input-field"
          required
        />
        <select
          name='currency'
          value={formData.currency}
          onChange={handleChange}
          className="select-field"
          required
        >
          <option value="" disabled>Select Currency</option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
        <button type="submit" className="submit-button">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
