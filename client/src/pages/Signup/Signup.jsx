import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import FormSignUp from '../../components/form/FormSignUp/FormSignUp';
import FormContainer from '../../components/FormLayout/FormContainer/FormContainer';
import MainBtn from '../../components/MainBtn/MainBtn';

function Signup () {
  return (
    <div className='Signup'>
      <Header>
        <MainBtn to='/signin' el={Link}>
          SignIn
        </MainBtn>
      </Header>

      <FormContainer>
        <FormSignUp></FormSignUp>
      </FormContainer>
    </div>
  );
}

export default Signup;
