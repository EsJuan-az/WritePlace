import { useState } from 'react';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { FaHelicopter } from 'react-icons/fa';
const genders = Object.entries({
    male: BiMaleSign,
    female: BiFemaleSign,
    other: FaHelicopter,
});
function AskGender({ onChange }) {
    const [ active, setActive ] = useState( null );

    const selects = genders.map( ([key, Tag], i) => {
        const first = i == 0 && 'rounded-tl-sm rounded-bl-sm';
        const last = i == genders.length - 1 && 'rounded-tr-sm rounded-br-sm';
        return (
        <button key={key} className={`p-1 ${active == key && 'bg-[#E4E6C3] text-[#22181C]' } ${first} ${last} `}
                type='button' onClick={ () => {
                    setActive( key );
                    onChange( key );
                }}>
            <Tag/>
        </button>
        );
    });
  return (
    <span className='text-lg flex w-full justify-around mt-1 [&>button]:w-1/3 [&>button]:flex [&>button]:justify-center'>
        {selects}
    </span>
  );
}

export default AskGender;