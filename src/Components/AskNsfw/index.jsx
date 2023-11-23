import React, { useState } from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillWarning } from 'react-icons/ai';

function AskNsfw({onChange}) {
  const [nsfw, changeNsfw] = useState(false);
  const Icon = nsfw ? AiFillWarning : MdHealthAndSafety;
  return (
    <span className='flex items-center cursor-pointer justify-between p-1 border-2 text-[#E4E6C3] bg-[#22181C] rounded-md border-[#22181C]' onClick={ () => {
        onChange(!nsfw);
        changeNsfw(!nsfw);
      }}>
      <label className='block cursor-pointer select-none font-semibold'>{ nsfw ? "NSFW" : "SFW" }</label>
      <Icon className='text-2xl'/>
    </span>
  );
}

export default AskNsfw;