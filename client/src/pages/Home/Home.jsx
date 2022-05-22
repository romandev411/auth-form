import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const authValue = useContext(AuthContext);

  return (
    <div>
      <h1>User: {authValue.user.email}</h1>
      <p>
        Logout:{' '}
        <button
          onClick={authValue.logout}
          style={{ border: '1px solid', padding: '10px' }}
        >
          Logout
        </button>
      </p>
    </div>
  );
};

export default Home;
