import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { signInFetch } from "../../api/user";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: '',
      }

      const onSubmit = async (values) => {
        const res = await signInFetch(values)
        if(res.ok) {
            const responce = await res.json()
            localStorage.setItem('token', responce.token)
            return navigate('/catalog')
        }
     }

     const SignupSchema = Yup.object().shape({
        password: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    return (
        <>
        <h1>Авторизация</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SignupSchema}
        >
          <Form>
          <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
            />

            <label htmlFor="password">Пароль</label>
            <Field 
                id="password" 
                name="password" 
                type="password"/>

            <button type="submit">Submit</button>
          </Form>
        </Formik></>
    )
}