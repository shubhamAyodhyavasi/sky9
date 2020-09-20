import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button,Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Layout from '../../element/Layout'
import { getDaynamicPostData ,getUserData} from '../../../services/services'
import "./Profile.scss"
export default function Profile() {
    const [open, setOpen] = useState({ action: false, msg: '', type: false });
    const [defaultValue, setDefaultValue] = useState({});
    const { register, handleSubmit, errors } = useForm();
    useEffect(()=>{
        setDefaultValue(getUserData())
    },[])
    const onSubmit = async (data) => {
        const formData={
            email: data.email,
            password: data.password ,
            name:data.name,
            mobile:data.mobile,
            user_id:defaultValue.user_id
        }
        const res = await getDaynamicPostData('updateProfileWithoutPassword', formData)
        setOpen({ action: true, msg: res?.message, type: res?.status })
        if(res?.status){
            const userData=res?.user_data;
            const newUserInfo={...userData,password:'xxxxxxx',}
            localStorage.setItem("userDetails", JSON.stringify(newUserInfo));
            
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
            

            <div className="profile-form-wrapper">
                <div className="profile-field-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" >
                        Update Your Profile
                    </Typography>
                   {
                       defaultValue?.name &&
                   
                        <div className="profile-field-wrapper">
                          <TextField
                                name="name"
                                inputRef={register({ required: true, maxLength: 80 })}
                                label="Enter Full Name"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                error={errors.name ? true : false}
                                defaultValue={defaultValue?.name}
                            />
                            <TextField
                                name="email"
                                inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
                                label="Enter email"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                error={errors.email ? true : false}
                                defaultValue={defaultValue?.email}
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
                                defaultValue={defaultValue?.mobile}
                            />
                            

                            
                        </div>
                    }
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