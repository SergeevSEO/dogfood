import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { signUpFetch } from "../../api/user";
import "../SignIn/signIn.css"

export const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    const initialValues = {
        email: '',
        password: '',
        group: 'group-11',
      }

      const onSubmit = async (values) => {
        setError(false)
        const res = await signUpFetch(values)
        if(!res.ok) {
          const responce = await res.json()
          return setError(responce.message)
        }
        return navigate("/signin")
     }

     const SignupSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Не меньше 8 символов').required('Обязательное поле'),
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
      });

    return (
        <>
        <h1>Регистрация</h1>
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
            <label htmlFor="group" className="auth__label">Группа</label>
            <Field 
                className="auth__field auth__field_disabled"
                id="group" 
                name="group"
                value="group-11"
                disabled/>
            <ErrorMessage component="span" name="group" className="auth__error"/>
            <p className="auth__error">{error && error}</p>
            <p className="auth__reg">Уже есть аккаунт? <Link to='/signin'>Войти</Link></p>
            <button type="submit" className="btn auth__btn">Регистрация</button>
          </Form>
        </Formik>
        
        </>
    )
}