import AskGender from '../AskGender';
import TextInput from '../TextInput';
import PropTypes from 'prop-types';
function UserForm({ firstTime=false, setUser, user, onSubmit }) {

  return (
    <form onSubmit={e => {
        e.preventDefault();
        onSubmit( e );
      }}
      className='flex items-center flex-col w-1/3 m-auto pr-3 bg-[#22181C] text-[#F7F7F2] p-2 rounded-md'>
        <TextInput
          displayName="Email"
          name="email"
          onChange={ e => {
            const newUser = user;
            newUser.email = e.target.value;
            setUser(newUser);
        }}/>
        <TextInput
          displayName="Contraseña"
          name="password"
          onChange={ e => {
            const newUser = user;
            newUser.password = e.target.value;
            setUser(newUser);
        }}/>
        { 
          firstTime
          && 
          <>
          <AskGender onChange={ v => {
              const newUser = user;
              newUser.gender = v;
              setUser(newUser);
          }}/>
          <TextInput
            name="name"
            displayName="Nombre"
            onChange={ e => {
              const newUser = user;
              newUser.name = e.target.value;
              setUser(newUser);
          }}/>
          <TextInput
            name="nickname"
            displayName="Nombre de Usuario"
            onChange={ e => {
              const newUser = user;
              newUser.nickname = e.target.value;
              setUser(newUser);
          }}/>
          </>
        }
        <input type="submit" value={ firstTime ? "Crear cuenta" : "Ingresar" }
          className='cursor-pointer bg-[#E4E6C3] text-[#22181C] p-1 rounded-sm w-4/5 mt-2'/>
    </form>
  );
}
UserForm.propTypes = {
  firstTime: PropTypes.bool,
  setUser: PropTypes.func,
  user: PropTypes.object,
  onSubmit: PropTypes.func,
};
export default UserForm;