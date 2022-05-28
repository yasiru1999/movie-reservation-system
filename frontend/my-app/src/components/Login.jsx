import React, {useState} from "react";
import '../style/Login.scss';
import logo from '../images/logo1.png'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Form, Icon, Input, Button, Typography} from 'antd';
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Login(props) {

    const history = useHistory();

    const [formErrorMessage, setFormErrorMessage] = useState('')

    let initialUname = null;
    return (
        <Formik
            initialValues={{
                CustomerEmail: initialUname,
                CustomerPassword: '',
            }}
            validationSchema={Yup.object().shape({
                CustomerEmail: Yup.string()
                    .required('Email is required'),
                CustomerPassword: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        CustomerEmail: values.CustomerEmail,
                        CustomerPassword: values.CustomerPassword
                    };

                    axios.post('http://localhost:8001/customer/login', dataToSubmit)
                        .then(response => {

                                localStorage.setItem('userid', response.data.user._id);
                                localStorage.setItem('username', response.data.user.username);
                                history.push("/");

                        })
                        .catch(err => {
                            setFormErrorMessage('Check out your Account or Password again')
                            setTimeout(() => {
                                setFormErrorMessage("")
                            }, 3000);
                        });
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;

                return (

                    <div className="login">
                        <div className="upper">
                            <div className="wrapper">
                                <img
                                    className="logo"
                                    src={logo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="container2">
                            <form onSubmit={handleSubmit} style={{width: '550px'}}>

                                <Form.Item required>
                                    <Input
                                        id="CustomerEmail"
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Enter your username"
                                        type="text"
                                        value={values.CustomerEmail}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.CustomerEmail && touched.CustomerEmail ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.CustomerEmail && touched.CustomerEmail && (
                                        <div className="input-feedback">{errors.CustomerEmail}</div>
                                    )}
                                </Form.Item>

                                <Form.Item style={{minWidth: '100%'}}  required>
                                    <Input
                                        id="CustomerPassword"
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Enter your password"
                                        type="password"
                                        value={values.CustomerPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.password && touched.CustomerPassword ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.CustomerPassword && touched.CustomerPassword && (
                                        <div className="input-feedback">{errors.CustomerPassword}</div>
                                    )}
                                </Form.Item>


                                <Form.Item>
                                    <div>
                                        <Button type="primary" htmlType="submit" className="login-form-button"
                                                style={{minWidth: '100%'}} disabled={isSubmitting}
                                                onSubmit={handleSubmit}>
                                            Log in
                                        </Button>
                                    </div>
                                </Form.Item>
                            </form>
                            Or <a href="/register">register now!</a>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
}
