import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button,Snackbar } from '@material-ui/core';
import { useHistory} from 'react-router-dom'
import Layout from '../../element/Layout'
import { getDaynamicPostData } from '../../../services/services'
import "./Reg.scss"
export default function Reg() {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [regRes, setRegRes]  = useState({})
    const onSubmit = async (data) => {
        const formData={
            email: data.email,
            password: data.password ,
            name:data.name,
            mobile:data.mobile
        }
        const res = await getDaynamicPostData('signup_now', formData)
        setRegRes(res)
        setOpen(true);
        if(res?.status){
            const userData=res?.user_data;
            const newUserInfo={...userData,password:'xxxxxxx',}
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
                        Sign up for FREE
                    </Typography>
                   
                        <div className="form-field-wrapper">
                          <TextField
                                name="name"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter Full Name"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                error={errors.name ? true : false}
                            />
                            <TextField
                                name="email"
                                inputRef={register({ pattern: /^\S+@\S+$/i })}
                                label="Enter email"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                error={errors.email ? true : false}
                            />
                            <TextField
                                name="mobile"
                                inputRef={register({ required: true, minLength: 10, maxLength: 10 })}
                                label="Enter Mobile Number"
                                type="tel"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                color="secondary"
                                error={errors.mobile ? true : false}
                            />

                            <TextField
                                name="password"
                                type="password"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter password"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                color="secondary"
                                error={errors.password ? true : false}
                            />
                        </div>

                        <Button type="submit" variant="outlined" color="default">
                            Save
                    </Button>
                    <div className="reg-footer-links">
                        <Button color="primary" disabled>Already have an account?</Button>
                        <Button color="secondary" onClick={()=> { history.push(`/login`)}}> Login</Button>
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
                message={regRes?.message}
               // action={}
            />

        </Layout>

    );
}