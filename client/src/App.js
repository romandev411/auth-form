import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import FormLayout from './components/FormLayout/FormLayout';
import { AuthContext } from './context/AuthContext';
import { useState, useEffect } from 'react';

function App () {
  const [user, setUser] = useState(null);

  const changeAuth = user => {
    setUser(user);
    authification(user);
  };

  const authification = user => {
    localStorage.setItem('user_token', JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem('user_token');
    setUser(null);
  };

  useEffect(() => {
    const logUser = localStorage.getItem('user_token');

    if (logUser) {
      setUser(JSON.parse(logUser));
    }
  }, []);

  const contextValue = {
    changeAuth,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Router>
        <FormLayout>
          <Routes>
            {user?.email && <Route path='/' element={<Home />}></Route>}
            <Route path='/' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
          </Routes>
        </FormLayout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
