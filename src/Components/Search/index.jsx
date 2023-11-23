import { BsSearch } from 'react-icons/bs';
function Search() {
  return (
    <form className="flex text-[#22181C] text-sm">
        <input className="bg-[#E4E6C3] outline-none rounded-tl-md rounded-bl-md p-1" type="text"/>
        <button className='p-1 bg-[#E4E6C3] rounded-tr-md rounded-br-md'><BsSearch/></button>
    </form>
  );
}

export default Search;