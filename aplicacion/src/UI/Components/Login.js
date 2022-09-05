import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('El email es invalido')
      .required('Email requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres.')
      .required('Contraseña requerida'),
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
        <div>
          <h1 className="titulo">Ingresar</h1>
          <Form>
            <TextField name="email" type="email" placeholder="Email" />
            <TextField name="password" type="password" placeholder="Contraseña" />
            <button className="boton" type="submit">Login</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}