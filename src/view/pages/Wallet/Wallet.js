import React, { useState, useEffect } from 'react';
import { Divider, Typography, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Layout from '../../element/Layout'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import "./Wallet.scss"
export default function Wallet() {
    const [defaultValue, setDefaultValue] = useState({});
    useEffect(() => {
        getDaynamicPostData('get_user_by_id', {user_id:getUserData().user_id})
            .then(setDefaultValue)
    }, []);


    return (
        <Layout centered >


            <div className="wallet-form-wrapper">
                <div className="wallet-field-form">
                    <Typography variant="h4" >
                        Wallet Balance
                    </Typography>
                    <Typography variant="h5" >
                        {defaultValue?.records?.coin}.00 Rs.
                    </Typography>
                    <Divider />
                    <div className="wallet-field-button">
                        <Button type="button" variant="outlined" color="default">
                            Add Coins
                     </Button>
                    </div>


                </div>
            </div>




        </Layout>

    );
}