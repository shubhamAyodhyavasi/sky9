import React, { useState, useEffect } from 'react';
import { Divider, Typography, Button, Snackbar } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Layout from '../../element/Layout'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import PayByRazorPay from '../../element/PayByRazorPay'
import "./Wallet.scss"
export default function Wallet() {
    const [defaultValue, setDefaultValue] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false)
    useEffect(() => {
        getDaynamicPostData('get_user_by_id', { user_id: getUserData().user_id })
            .then(setDefaultValue)
    }, [dialogOpen]);
    const handleClose = () => {
        setDialogOpen(false)
    }

    return (
        <Layout centered >


            <div className="wallet-form-wrapper">
                <div className="wallet-field-form">
                    <Typography variant="h4" >
                        Wallet Balance
                    </Typography>
                    <Typography variant="h4" >
                        {defaultValue?.records?.coin}.00 Rs.
                    </Typography>
                    <Divider />
                    <div className="wallet-field-button">
                        <Button type="button" onClick={()=>{setDialogOpen(true)}} variant="outlined" color="default">
                            Add Coins
                     </Button>
                    </div>


                </div>
            </div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
               <PayByRazorPay />
            </Dialog>



        </Layout>

    );
}