import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input/Input';
import Chackbox from '../Chackbox/Chackbox';
import style from './FormSignIn.module.scss';
import FormButton from '../FormButton/FormButton';
import { getUser } from '../../../api';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const initialVal = {
  login: '',
  password: '',
  rememberMe: false,
};

function FormSignIn () {
  const authValue = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const getResponseUser = async values => {
    const data = await getUser(values);

    if (data.error) {
      setEmailError(data.error);
    }

    if (data.user) {
      authValue.changeAuth(data.user);
      navigate('/');
    }
  };

  const formikSubmit = (values, formikBag) => {
    getResponseUser(values);
  };

  return (
    <Formik
      initialValues={initialVal}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={formikSubmit}
    >
      <Form className={style['form-sign-in']}>
        <h1 className={style['form-sign-in__title']}>LOGIN TO YOUR ACCOUNT</h1>

        <fieldset className={style['form-sign-in__fields']}>
          {emailError}
          <p className={style['form-sign-in__item']}>
            <Input name='login' placeholder='Email'></Input>
          </p>

          <p className={style['form-sign-in__item']}>
            <Input
              name='password'
              placeholder='Password'
              type='password'
            ></Input>
          </p>

          <p>
            <Chackbox name='rememberMe'>Remember Me</Chackbox>
          </p>
        </fieldset>

        <FormButton type='submit'>Login</FormButton>
      </Form>
    </Formik>
  );
}

export default FormSignIn;
