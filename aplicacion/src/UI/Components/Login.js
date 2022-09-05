import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className='formi'>
          <Form>
            <TextField name="email" type="email"  placeholder="Email"/>
            <TextField name="password" type="password" placeholder="Contraseña"/>
            <button className="boton" type="submit">Login</button>
          </Form>
          
        </div>
      )}
    </Formik>
  )
}