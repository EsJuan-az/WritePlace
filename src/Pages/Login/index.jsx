import { useState } from 'react';

import UserForm from '../../Components/UserForm';

function Login() {
  const [userData, setUserData] = useState( {
    email: '',
    password: '',
  } );
  return (
    <>
      <h2 className='playfair text-2xl'>Ingresa</h2>
      <UserForm user={ userData } setUser={ setUserData } onSubmit={ () => console.log(userData) }/>
    </>
  );
}

export default Login;