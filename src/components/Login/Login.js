'use client';  

import React, { useState } from 'react';  
import Link from 'next/link';  
import './login.module.css';  

const LoginForm = () => {  
    const [formData, setFormData] = useState({  
      dni: '',  
      usuario: '',  
      clave: '',  
      recordar: false,  
    });  
    const [error, setError] = useState('');  
  
    const handleChange = (e) => {  
      const { name, value, type, checked } = e.target;  
      setFormData({  
        ...formData,  
        [name]: type === 'checkbox' ? checked : value,  
      });  
    };  
  
    const validateForm = () => {  
      const { dni, usuario, clave } = formData;  
      if (!dni || !usuario || !clave) {  
        setError('Todos los campos son obligatorios');  
        return false;  
      }  
      setError('');  
      return true;  
    };  
  
    const handleSubmit = (e) => {  
      e.preventDefault();  
      if (validateForm()) {  
        console.log('Form Data:', formData);   
      }  
    };  
  
    return (  
      <div className="body__login">  
        <div className="login__container">  
          <div className="login__container__bienvenida">  
            <h1 className="login__container__bienvenida--h1">¡Bienvenido!</h1>  
          </div>  
          <div className="login__container__fcel">  
            <div className="login__container__inses">  
              <h2 className="login__container__inses--h2">Inicia sesión</h2>  
            </div>  
            <form className="login__container__form" onSubmit={handleSubmit}>  
              <div className="login__container__form__form-group">  
                <label className="login__container__form__form-group--label" htmlFor="dni">DNI:</label>  
                <input  
                  className="login__container__form__form-group--input"  
                  type="text"  
                  id="dni"  
                  name="dni"  
                  placeholder="Ingresa tu DNI"  
                  value={formData.dni}  
                  onChange={handleChange}  
                  required  
                />  
              </div>  
              <div className="login__container__form__form-group">  
                <label className="login__container__form__form-group--label" htmlFor="usuario">Usuario:</label>  
                <input  
                  className="login__container__form__form-group--input"  
                  type="text"  
                  id="usuario"  
                  name="usuario"  
                  placeholder="Ingresa tu usuario"  
                  value={formData.usuario}  
                  onChange={handleChange}  
                  required  
                />  
              </div>  
              <div className="login__container__form__form-group">  
                <label className="login__container__form__form-group--label" htmlFor="clave">Contraseña:</label>  
                <input  
                  className="login__container__form__form-group--input"  
                  type="password"  
                  id="clave"  
                  name="clave"  
                  placeholder="Tu clave"  
                  value={formData.clave}  
                  onChange={handleChange}  
                  required  
                />  
              </div>  
              <div className="checkbox-group">  
                <input  
                  className="login__container__form__form-group--input__checkbox-group"  
                  type="checkbox"  
                  id="recordar"  
                  name="recordar"  
                  checked={formData.recordar}  
                  onChange={handleChange}  
                />  
                <label className="login__container__form__form-group--label__checkbox-group" htmlFor="recordar">Recordar tus datos</label>  
              </div>  
              {error && <p className="error-message">{error}</p>}  
              <button className="login__container__form--button" type="submit">Iniciar sesión</button>  
            </form>  
            <div className="regis">  
              <p className="regis__p">¿Aún no tienes una cuenta?</p>  
              <Link className="login__container__form--a" href="/register">Regístrate acá</Link>  
            </div>  
            <div className="links">  
              <Link className="login__container__form--a" href="#">Olvidé mi usuario y/o clave</Link>  
              <br />  
              <Link className="login__container__form--a" href="#">Bloqueé mi usuario</Link>  
            </div>  
          </div>  
        </div>  
      </div>  
    );  
};  

export default LoginForm;  
