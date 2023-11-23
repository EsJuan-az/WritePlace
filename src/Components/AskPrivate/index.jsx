import React, { useState } from 'react';
import { FaLock, FaLockOpen } from "react-icons/fa";
function AskPrivate({onChange}) {
  const [priv, changePriv] = useState(false);
  const Icon = priv ? FaLock : FaLockOpen;
  return (
    <span className='flex items-center cursor-pointer justify-between p-1 border-2 text-[#E4E6C3] bg-[#22181C] rounded-md border-[#22181C]' onClick={ () => {
      onChange(!priv);
      changePriv(!priv);
    }}>
      <label className='block cursor-pointer select-none font-semibold '>{ priv ? "Private" : "Public" }</label>
      <Icon className='text-2xl'/>
    </span>
  );
}

export default AskPrivate;