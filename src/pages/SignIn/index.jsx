import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { signInFetch } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../utils/consts";
import { useEffect, useState } from "react";
import './signIn.css';

export const SignIn = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const token = localStorage.getItem(AUTH_TOKEN)

    useEffect(() => {
        if (token) navigate('/')
    }, [navigate, token])

    const initialValues = {
        email: '',
        password: '',
      }

      const onSubmit = async (values) => {
        setError(false)
        const res = await signInFetch(values)
        if(!res.ok) {
          const responce = await res.json()
          return setError(responce.message)
        }
        const responce = await res.json()
        localStorage.setItem(AUTH_TOKEN, responce.token)
        return navigate('/catalog')
     }

     const SignupSchema = Yup.object().shape({
        password: Yup.string().required('Обязательное поле'),
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
      });

    return (
        <>
        <h1>Авторизация</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SignupSchema}
        >
          <Form className="auth__form">
            <label htmlFor="email" className="auth__label">Email</label>
            <Field
              className="auth__field"
              id="email"
              name="email"
              type="email"
            />
            <ErrorMessage component="span" name="email" className="auth__error"/>
            <label htmlFor="password" className="auth__label">Пароль</label>
            <Field 
                className="auth__field"
                id="password" 
                name="password" 
                type="password"/>
            <ErrorMessage component="span" name="password" className="auth__error"/>
            <p className="auth__error">{error && error}</p>
            <p className="auth__reg">Еще нет аккаунта? <Link to='/signup'>Зарегистрируйтесь</Link></p>
            <button type="submit" className="btn auth__btn">Войти</button>
          </Form>
        </Formik>
        
        </>
    )
}