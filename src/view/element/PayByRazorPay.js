import React, { useEffect, useState } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { getDaynamicPostData, getUserData } from '../../services/services'
const PayByRazorPay = () => {
    const [coinQty, setCoinQty] = useState(10)
    const [open, setOpen] = useState(false);
    const {user_id,email,mobile,name} = getUserData()
    const options = {
        key: 'rzp_live_IEAOXKcFEPGIP6',
        amount: coinQty * 100 , //  = INR 1
        name: 'Sky9media',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function (response) {
             //add_ticket_after_payment_success
             const param = {
                user_id: user_id,
                order_ammount_type:2,
                transaction_id:response.razorpay_payment_id,
                ammount:coinQty,
                orderStatus:'success'
            }
        getDaynamicPostData('add_ticket_after_payment_success', param)
        setOpen(true);
        
        },
        prefill: {
            name: name,
            contact: mobile,
            email: email
        },
        notes: {
            address: ''
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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
        <div className="form-coin">
            <h4>Add Coin on Wallet</h4>
            <p className="colorRed">(Note:- Only support UPI scan )</p>
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
                <Button onClick={openPayModal} variant="contained" color="secondary">Pay</Button>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Coin added in your account"
               // action={}
            />
        </div>
        </div>
        
    );
};

export default PayByRazorPay;