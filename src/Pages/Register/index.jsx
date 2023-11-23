import { useState } from 'react';

import UserForm from '../../Components/UserForm';

function Register() {
  const [userData, setUserData] = useState( {
    name: '',
    nickname: '',
    email: '',
    password: '',
    gender: '',
  } );
  return (
    <>
      <h2 className='playfair text-2xl'>Únete a escribir</h2>
      <UserForm firstTime user={ userData } setUser={ setUserData } onSubmit={ () => console.log(userData) }/>
    </>
  );
}

export default Register;