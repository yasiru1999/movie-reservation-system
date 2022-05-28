import React, { useState } from "react";
import {useHistory, withRouter} from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import axios from "axios";

const { Title } = Typography;

function LoginPage(props) {

    const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState('')


  let initialUname = null;

  return (
    <Formik
      initialValues={{
        username: initialUname,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required('Username is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            username: values.username,
            password: values.password
          };
          console.log(dataToSubmit);
          axios.post('http://localhost:8005/admin/login',dataToSubmit)
            .then(response => {
              console.log(response.data.user);
              if (response.data.success) {
                if(response.data.user.isSystemAdmin){
                    localStorage.setItem('userType', "SystemAdmin");
                    history.push("/");
                }
                else if(response.data.user.isMovieAdmin){
                    localStorage.setItem('userType', "MovieAdmin");
                    history.push("/");
                }

              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
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
          <div className="app">

            <Title level={2}>Log In</Title>
            <form onSubmit={handleSubmit} style={{ width: '350px' }}>

              <Form.Item required>
                <Input
                  id="username"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? 'text-input error' : 'text-input'
                  }
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <div>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    Log in
                </Button>
                </div>
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);


