'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import style from './login.module.css';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    dni: '',
    usuario: '',
    clave: '',
    recordar: false,
  });
  const [error, setError] = useState('');

  const router = useRouter();

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
      router.push('/cuenta');
    }
  };

  return (
    <div className={style.body__login}>
      <div className={style.login__container}>
        <div className={style.login__container__bienvenida}>
          <h1 className={style.login__container__bienvenida__h1}>
            ¡Bienvenido!
          </h1>
        </div>
        <div className={style.login__container__fcel}>
          <div className={style.login__container__inses}>
            <h2 className={style.login__container__inses__h2}>Inicia sesión</h2>
          </div>
          <form
            className={style.login__container__form}
            onSubmit={handleSubmit}
          >
            <div className={style.login__container__form__form_group}>
              <label
                className={style.login__container__form__form_group__label}
                htmlFor="dni"
              >
                DNI:
              </label>
              <input
                className={style.login__container__form__form_group__input}
                type="text"
                id="dni"
                name="dni"
                placeholder="Ingresa tu DNI"
                value={formData.dni}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.login__container__form__form_group}>
              <label
                className={style.login__container__form__form_group__label}
                htmlFor="usuario"
              >
                Usuario:
              </label>
              <input
                className={style.login__container__form__form_group__input}
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Ingresa tu usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.login__container__form__form_group}>
              <label
                className={style.login__container__form__form_group__label}
                htmlFor="clave"
              >
                Contraseña:
              </label>
              <input
                className={style.login__container__form__form_group__input}
                type="password"
                id="clave"
                name="clave"
                placeholder="Tu clave"
                value={formData.clave}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.checkbox_group}>
              <input
                className={
                  style.login__container__form__form_group__input__checkbox_group
                }
                type="checkbox"
                id="recordar"
                name="recordar"
                checked={formData.recordar}
                onChange={handleChange}
              />
              <label
                className={
                  style.login__container__form__form_group__label__checkbox_group
                }
                htmlFor="recordar"
              >
                Recordar tus datos
              </label>
            </div>
            {error && <p className={style.error_message}>{error}</p>}
            <button
              className={style.login__container__form__button}
              type="submit"
            >
              Iniciar sesión
            </button>
          </form>
          <div className={style.regis}>
            <p className={style.regis__p}>¿Aún no tienes una cuenta?</p>
            <Link className={style.login__container__form__a} href="/register">
              Regístrate acá
            </Link>
          </div>
          <div className={style.links}>
            <Link className={style.login__container__form__a} href="#">
              Olvidé mi usuario y/o clave
            </Link>
            <br />
            <Link className={style.login__container__form__a} href="#">
              Bloqueé mi usuario
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
