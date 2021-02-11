import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button, Snackbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import Layout from '../../element/Layout'
import { GoogleLogin } from 'react-google-login';
import { getDaynamicPostData } from '../../../services/services'
import "./Login.scss"
export default function Login() {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [loginRes, setLoginRes] = useState({})
    const onSubmit = async (data) => {
        const res = await getDaynamicPostData('login', { email: data.email, password: data.password })
        setLoginRes(res)
        setOpen(true);
        if (res?.status) {
            const userData = res?.user_data;
            const newUserInfo = { ...userData, password: 'xxxxxxx', }
            localStorage.setItem("userDetails", JSON.stringify(newUserInfo));
            history.push(`/`)
        }
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
                            Login
                    </Typography>

                        <div className="form-field-wrapper">
                            <TextField
                                name="email"
                                inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
                                label="Enter email"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={errors.email ? true : false}
                                color="secondary"
                            />

                            <TextField
                                name="password"
                                type="password"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter password"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={errors.password ? true : false}
                                color="secondary"
                            />
                        </div>

                        <Button type="submit" variant="outlined" color="default">
                            Login
                        </Button>
                        <div className="login-footer-links">
                            <Button color="primary" disabled>Not A Member Yet ?</Button>
                            <Button color="secondary" onClick={() => { history.push(`/register`) }}> Sign up for FREE</Button>
                        </div>
                        <div style={{display:'none'}}>
                            <GoogleLogin
                                clientId="762245880186-f3pokmtogs0n3f03t72s74bsfgqjigtv.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Login</button>
                                )}
                                buttonText="Login"
                                onSuccess={(e) => { console.log('succ',{e})}}
                                onFailure={(e) => {  console.log('succ',{e})}}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>

                    </form>
                </div>
            </div>



            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={loginRes?.message}
            // action={}
            />


        </Layout>

    );
}