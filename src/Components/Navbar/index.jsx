import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import { AppContext } from '../../Context';

function Navbar() {
    const { user = true } = useContext( AppContext );
  return (
    <nav className='z-[10] [& *]:outline-none fixed top-0 left-0 select-none flex w-[100%] px-3 h-12 bg-[#22181C] shadow-md justify-between items-center text-[#F7F7F2] [&>ul]:flex [&>ul]:w-1/3 [&>ul]:justify-around [&>ul]:items-center [&>ul>*]:text-md'>
        <ul>
            <NavLink className="text-lg playfair font-medium" to="/">
                Write&nbsp;
                <span className='inline-block bg-[#E4E6C3] p-[2px] rounded-md font-bold text-[#22181C] playfair'>Place</span>
            </NavLink>
            <NavLink to="/latest">Novedades</NavLink>
            <NavLink to="/write">Escribe</NavLink>
        </ul>
        <ul>
            <Search/>
            { !!user &&
            <>
                <NavLink to="/yours">Tus Obras</NavLink>
                <NavLink className="text-2xl" to="/account">🧑🏻‍🦲</NavLink>
            </>
            }
            { !user &&  
            <div className='flex justify-around gap-3'>
                <NavLink className="rounded-md border-[2px] border-[#E4E6C3] p-1" to="/register">Únete</NavLink>
                <NavLink className="rounded-md border bg-[#E4E6C3] text-[#22181C] p-1" to="/login">Ingresa</NavLink>
            </div>
            }

        </ul>
    </nav>
  );
}

export default Navbar;