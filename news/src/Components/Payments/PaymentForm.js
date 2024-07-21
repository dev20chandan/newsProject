// src/PaymentForm.js
import React, { useEffect, useState } from 'react';
import "./Payment.css"
// import logoimg from '../../../public/image.png'

const PaymentForm = () => {

  const [formData, setFormData] = useState({ currency: "", amount: "" })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  useEffect(() => {
    console.log(formData, '===')
  }, [formData])

  const paymentHandler = async (e) => {
    e.preventDefault()
    const { amount, currency } = formData
    if (!currency) return alert("Please selet currency")
    if (!amount) return alert("Please selet amount")
    console.log(formData, "sdkajskdjformData")

    const response = await fetch("http://localhost:4000/api/order", {
      method: "POST",
      body: JSON.stringify({
        ...formData
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order, '=======oirder');

    // var options = {
    //   key: "rzp_test_QypuRVCy3b0nhq", // Enter the Key ID generated from the Dashboard
    //   amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   currency,
    //   name: "Acme Corp", //your business name
    //   description: "Test Transaction",
    //   image: "https://example.com/your_logo",
    //   order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //  "handler": function (response){
    //     console.log(response,'====response')
    //     alert(response.razorpay_payment_id);
    //     alert(response.razorpay_order_id);
    //     alert(response.razorpay_signature)
    // },
    //   prefill: {
    //     //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    //     name: "Web Dev Matrix", //your customer's name
    //     email: "webdevmatrix@example.com",
    //     contact: "9000000000", //Provide the customer's phone number for better conversion rates
    //   },
    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };


    //     razorpay_order_id
    // : 
    // "order_ObEMdKvA4qIx2v"
    // razorpay_payment_id
    // : 
    // "pay_ObEMxdVqYZH3Zm"
    // razorpay_signature
    // : 
    // "361add62d53da2b201261dbc9e911070bae866aadd6eeba15bb6e9cff680e6b9"



    var options = {
      "key": "rzp_test_QypuRVCy3b0nhq", // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": currency,
      "name": "NSO 360", //your business name
      "description": "Test Transaction",
      "image": window.location.origin + '/image.png',
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response) {
        console.log(response, '=====response')
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:4000/api/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes, '====hereee');

      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": formData?.name, //your customer's name
        "email": formData?.email,
        "contact": formData.phone  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert("Please enter valid details");
    });
    rzp1.open();
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <form onSubmit={paymentHandler}>
        <img src={window.location.origin + '/image.png'} width={"70px"}  style={{display:"flux",margin:"20px"}}></img>
        <input type='text' name='name' onChange={handleChange} placeholder='Enter The Name' />
        <input type='email' name='email' onChange={handleChange} placeholder='Enter The Email' />
        <input type='number' name='phone' onChange={handleChange} placeholder='Enter The Phone' />
        <input type='number' name='amount' onChange={handleChange} placeholder='Enter The Amount' />
        <select name='currency' onChange={handleChange} placeholder='Select Currency'>
          <option>Select Option</option>
          <option value="INR" defaultChecked>INR</option>
          <option value="USD">USD</option>
        </select>
        {/* <text type='text'></text> */}
        
        <button >Pay</button>
      </form>
    </>
  );
};

export default PaymentForm;
