import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../Component/TextField';
import Superiorlogin from './Assets/Superiorlogin.png';
import linea1 from '../Assets/linea1.png';
import linea2 from '../Assets/linea2.png';
import google from '../Assets/google.png';
import facebook from '../Assets/facebook.png';
import tw from '../Assets/tw.png';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  
    /*/Login con Google:*/
    const respuestaGoogle = (respuesta) => {
        console.log(respuesta)
      };

    /*
  const validate = Yup.object({
    email: Yup.string()
      .email('El email es invalido')
      .required('Email requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres.')
      .required('Contraseña requerida'),
  })*/
  return (
    <Formik>
      initialValues={{

        email: '',
        password: '',
      }
      }
    
      {formik => (
        <div>
          <h1 className="titulo">Ingresar</h1>
          <Form>
            <TextField name="email" type="email" placeholder="Email" />
            <TextField name="password" type="password" placeholder="Contraseña" />
            <button id='submit' className="boton" type="submit">Login</button>
          </Form>
        </div>
      )}
      <div className="App">
        <div className="Container">
          <img className='' src={Superiorlogin} alt="" />
            <img className='linea1' src={linea1} alt="" />
          <img className='lineaa1' src={linea1} alt="" />
__  
          <GoogleLogin
            clientId="379496142178-b617hq8v4dkbf0agnin7mi86kk3hbr8h.apps.googleusercontent.com"
            render={renderProps => (
              <img className='google' src={google} onClick={renderProps.onClick} disabled={renderProps.disabled}></img>
            )}
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={'single_host_origin'}
          />,
  
          
          <img className='facebook' src={facebook} alt=""></img>
  
          <img className='tw' src={tw} alt="" />
  
          <a className='contraseñaolvidada' href="contraseñaolvidada">¿Te olvidaste tu contraseña?</a>
          <a className='registrarse' href="registrarse">Registrarse</a>
          <p className='copyright'>© 2022 L.A.N. All Rights Reserved.</p>
          
        </div>
      </div>
      </Formik>
    )  
  }