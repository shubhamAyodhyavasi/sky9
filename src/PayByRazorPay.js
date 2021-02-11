import React, { useEffect, useState } from 'react';
import { TextField, Typography, Button, Snackbar } from '@material-ui/core';

import { useForm } from 'react-hook-form';
const PayByRazorPay = () => {
    const { register, handleSubmit, errors } = useForm();
    const [coinQty, setCoinQty] = useState(10)
    const options = {
        key: 'rzp_live_IEAOXKcFEPGIP6',
        amount: coinQty * 100 , //  = INR 1
        name: 'Sky9media',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function (response) {
            // alert(response.razorpay_payment_id);
            // console.log('xxx',response)
            // code for call order success apis

        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
    const ammountQtyHandler = (e) => {
        console.log(e.target.value)
        const { value } = e.target
        setCoinQty(value)
    }
    return (
        <div className="form-coin-form">
            <div className="form-coin-wrapper">
                <TextField
                    name="name"
                    label="Enter Ammount"
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    type="number"
                    onChange={ammountQtyHandler}
                    value={coinQty}
                />
            </div>
            <div className="form-coin-button-wrapper">
                <Button onClick={openPayModal} variant="contained" color="secondary">Pay with Razorpay</Button>
            </div>

        </div>
    );
};

export default PayByRazorPay;