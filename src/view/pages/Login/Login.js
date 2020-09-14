import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button } from '@material-ui/core';
import { useHistory} from 'react-router-dom'
import Layout from '../../element/Layout'
import { getDaynamicPostData } from '../../../services/services'
import "./Login.scss"
export default function Login() {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [loginRes, setLoginRes]  = useState({})
    const onSubmit = async (data) => {
        const res = await getDaynamicPostData('login', { email: data.email, password: data.password })
        setLoginRes(res)
        if(res?.status){
            const userData=res?.user_data;
            const newUserInfo={...userData,password:'xxxxxxx',}
            localStorage.setItem("userDetails", JSON.stringify(newUserInfo));
            history.push(`/`)
         }
    };
    
    return (
        <Layout >
            

            <div className="login-form-wrapper">
                <div className="form-field-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" >
                            Login
                    </Typography>
                    {
                loginRes?.status === false && <Typography variant="body1" color="secondary"  >
                    {loginRes?.message}
     </Typography>
            }
            {
                loginRes?.status && <Typography variant="body1" color="primary"  >
                    {loginRes?.message}
     </Typography>
            }
                        <div className="form-field-wrapper">
                            <TextField
                                name="email"
                                inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
                                label="Enter email"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={errors.email ? true : false}
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
                            />
                        </div>

                        <Button type="submit" variant="outlined" color="primary">
                            Login
                    </Button>
                    </form>
                </div>
            </div>



            {/* <input type="text" placeholder="First name" name="First name" ref={register({ required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" name="Last name" ref={register({ required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({ required: true, minLength: 6, maxLength: 12 })} /> */}


        </Layout>

    );
}