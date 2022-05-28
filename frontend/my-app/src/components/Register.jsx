import React, {useRef, useState} from "react";
import '../style/Register.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {Form,Input,Button,} from 'antd';
import {useHistory} from "react-router-dom";

export default function Register(props) {

    const history = useHistory();

    return(
        <Formik
            initialValues={{
                CustomerName:'',
                CustomerNumber:'',
                CustomerEmail:'',
                CustomerPassword:''
            }}

            validationSchema={Yup.object().shape({
                CustomerName: Yup.string()
                    .required('Name is required'),
                CustomerNumber: Yup.string()
                    .required('Number is required'),
                CustomerEmail: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                CustomerPassword: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {
                        CustomerName: values.CustomerName,
                        CustomerNumber: values.CustomerNumber,
                        CustomerEmail: values.CustomerEmail,
                        CustomerPassword: values.CustomerPassword,
                        isAdmin: false
                    };

                    console.log(dataToSubmit);

                    axios.post('http://localhost:8001/cus/register', dataToSubmit)
                        .then(response =>
                        {
                            console.log(response.data);
                            if( response.data.success){
                                alert('success');
                                history.push("/login");
                            }else{
                                alert("Error while registering user");
                            }
                        }).
                    catch(err => {
                        console.log(err);
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
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div>
                        <div>
                            <h1 style={{color:"white"}}>Book Your Sheet, From Your Home...</h1>
                            <p>
                                Ready to Book ?
                            </p>
                            <br/><br/>
                            <div style={{backgroundColor:"red"}}>
                                <div>
                                    <Form style={{minWidth:'375px'}} onSubmit={handleSubmit} >

                                        <Form.Item style={{color:"white"}} required>
                                            <Input
                                                id="CustomerName"
                                                placeholder="Enter your name"
                                                type="text"
                                                value={values.CustomerName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.CustomerName && touched.CustomerName ? 'text-input error' : 'text-input'
                                                }
                                            />
                                            {errors.CustomerName && touched.CustomerName && (
                                                <div className="input-feedback">{errors.CustomerName}</div>
                                            )}
                                        </Form.Item>
                                        <br/><br/>
                                        <Form.Item required>
                                            <Input
                                                id="CustomerNumber"
                                                placeholder="Enter your number"
                                                type="text"
                                                value={values.CustomerNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.CustomerNumber && touched.CustomerNumber ? 'text-input error' : 'text-input'
                                                }
                                            />
                                            {errors.CustomerNumber && touched.CustomerNumber && (
                                                <div className="input-feedback">{errors.CustomerNumber}</div>
                                            )}
                                        </Form.Item>
                                        <br/><br/>
                                        <Form.Item required>
                                            <Input
                                                id="CustomerEmail"
                                                placeholder="Enter your email"
                                                type="email"
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
                                        <br/><br/>
                                        <Form.Item required>
                                            <Input
                                                id="CustomerPassword"
                                                placeholder="Enter your password"
                                                type="text"
                                                value={values.CustomerPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.CustomerPassword && touched.CustomerPassword ? 'text-input error' : 'text-input'
                                                }
                                            />
                                            {errors.CustomerPassword && touched.CustomerPassword && (
                                                <div className="input-feedback">{errors.CustomerPassword}</div>
                                            )}
                                        </Form.Item>
                                        <br/><br/>
                                        <Form.Item>
                                            <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }}
        </Formik>
    )
}
