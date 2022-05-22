import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import FormSignIn from '../../components/form/FormSignIn/FormSignIn';
import FormContainer from '../../components/FormLayout/FormContainer/FormContainer';
import MainBtn from '../../components/MainBtn/MainBtn';

function Signin () {
  return (
    <div className='Signin'>
      <Header>
        <MainBtn to='/signup' el={Link}>
          SignUp
        </MainBtn>
      </Header>

      <FormContainer>
        <FormSignIn></FormSignIn>
      </FormContainer>
    </div>
  );
}

export default Signin;
