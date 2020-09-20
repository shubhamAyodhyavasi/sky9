import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button, Snackbar } from '@material-ui/core';
import Layout from '../../element/Layout'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import "./ChangedPassword.scss"
import { Alert } from '@material-ui/lab';
export default function ChangedPassword() {
    const [open, setOpen] = useState({ action: false, msg: '', type: false });
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        const res = await getDaynamicPostData('change_password', { old_password: data.old_password, new_password: data.new_password, user_id: getUserData().user_id })
        setOpen({ action: true, msg: res?.message, type: res?.status })
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Layout centered >


            <div className="login-form-wrapper">
                <div className="form-field-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" >
                            Update Password
                    </Typography>

                        <div className="form-field-wrapper">
                            <TextField
                                name="old_password"
                                type="password"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter Old Password"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={errors.old_password ? true : false}
                                color="secondary"
                            />

                            <TextField
                                name="new_password"
                                type="password"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter New Password"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={errors.new_password ? true : false}
                                color="secondary"
                            />
                        </div>

                        <Button type="submit" variant="outlined" color="default">
                            Update
                        </Button>

                    </form>
                </div>
            </div>



            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open.action}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                {
                    <Alert onClose={handleClose} severity={open.type ? "success" : "error"}>
                        {open.msg}
                    </Alert>
                }

            </Snackbar>

        </Layout>

    );
}