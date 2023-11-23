import PropTypes from 'prop-types';
const inputTypes = ["password", "email"];
function TextInput( {onChange, name, displayName} ) {
  return (
    <span className='flex flex-col my-2 w-full'>
        <label htmlFor="name" className='mr-1'>
              { displayName }:
        </label>
        <input onChange={onChange} type={ inputTypes.includes( name ) ? name : "text" } name={name} id={name} placeholder='...'
            className='px-[4px] w-full rounded-sm text-[#22181C] bg-[#E4E6C3] outline-none'/>
    </span>
  );
}
TextInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  displayName: PropTypes.string,
};

export default TextInput;