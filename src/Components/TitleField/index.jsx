import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
function TitleField({onChange}) {
  return (
    <span className='relative'>
        <FaPencilAlt className='absolute left-0 top-1 fill-[#22181C]'/>
        <input type="text" onChange={ e => onChange(e.target.value)}
            className='pl-5 outline-none bg-[#E4E6C3] border-b-2 border-[#22181C] placeholder:text-[#22181C] placeholder:opacity-60 font-semibold'
            placeholder='Título'/>
    </span>
  );
}

export default TitleField;