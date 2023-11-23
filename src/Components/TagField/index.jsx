import React, { useEffect, useState } from 'react';
import { FaTag } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const suggestions = [
    {
        name: "carbohidrato",
        timesUsed: 10,
    },
    {
        name: "calculadora",
        timesUsed: 87,
    },
    {
        name: "control",
        timesUsed: 23,
    },
    {
        name: "salchicha",
        timesUsed: 10,
    },
    {
        name: "perro",
        timesUsed: 20,
    },
    {
        name: "matriz",
        timesUsed: 4,
    },
];
function TagField({onChange}) {
    //Obtener sugerencias de etiquetas.
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const [selected, setSelected] = useState(-1);
    const [showMatches, setShowMatches] = useState(false);
    //Cada vez que cambien las tags, serán enviadas al objeto principal.
    useEffect( () => {
        onChange(tags);
    }, [tags]);
    //Cada vez que cambien las tag input, no habrá selecciones
    useEffect( () => {
       setSelected(-1); 
    }, [tag]);
    const matches = suggestions.filter( s => s.name.includes(tag) && s.name != tag.toLocaleLowerCase().trim() );

    const selectedTag = matches[selected]?.name;
    //Coincidencias con los objetos tag
    const MatchesTags = matches.slice(0, 4).map( ({name, timesUsed}, i) => {
        return (
        <li key={i}
            onClick={() => setTag(name)}
            onMouseOver={() => setSelected(i)}
            className={`flex justify-between border-b border-[#22181C] cursor-pointer px-1 py-2
            ${ selected == i ? 'text-[#E4E6C3] bg-[#22181C]' : 'bg-[#E4E6C3] text-[#22181C]' }`}>
                <h2 className='font-semibold'>{name}</h2>
                <h4 className='text-[9px] self-end mb-[-5px]'>usado {timesUsed} veces</h4>
            </li>);
    } );
    //Las tags que ya se han añadido
    const Dtags = tags.map((t, i) => {
        return (
        <li className='group text-[#E4E6C3] select-none bg-[#22181C] hover:bg-[#E4E6C3] cursor-pointer hover:drop-shadow-xl hover:text-[#22181C] text-xs font-semibold px-2 rounded-full items-center flex gap-1'
            key={i}
            onClick={() => {
                const newTags = [...tags];
                newTags.splice(i, 1);
                setTags(newTags);
            }}
            >
            <FaTag className='text-md block group-hover:hidden'/>
            <RxCross2 className='text-md hidden group-hover:block'/>
            { t }
        </li>
        );
    } );
    return (
        <section className='mt-2'>
            <form className='relative' 
                onBlur={ () => {
                    setTimeout( setShowMatches, 100, false );
                }}
                onFocus={ () => {
                    setShowMatches(true);
                }}
            onKeyDown={ e => {
                const keyValues = {
                    "ArrowUp": -1,
                    "ArrowDown": 1,
                };
                const inc = keyValues[e.key];
                if( inc ){
                    e.preventDefault();
                    let newSelected = (selected + inc) % matches.length;
                    newSelected +=  newSelected < 0 ? matches.length : 0;
                    setSelected( newSelected );
                }
            }}
            onSubmit={e => {
                e.preventDefault();
                let newTag = selectedTag || tag;
                newTag = newTag.toLocaleLowerCase().trim();
                if(newTag != '' &&  !tags.includes( newTag ) && tags.length < 6) {
                    setTags([...tags, newTag ]);
                }
                setTag('');
            }}>
                <FaTag className='absolute left-0 top-1 fill-[#22181C]'/>
                <input type="text" value={tag}
                    className='pl-5 outline-none bg-[#E4E6C3] border-b-2 border-[#22181C] placeholder:text-[#22181C] placeholder:opacity-60 font-semibold'
                    placeholder='Etiquetas (Máximo 6)'
                    onChange={ e => {
                        setTag(e.target.value);
                    }}/>
                {
                    matches.length > 0 && tag.trim() != '' 
                    &&
                    <ul className={`${showMatches ? 'opacity-90' : 'opacity-0 z-[-20]'} absolute w-48 bg-[#F7F7F2] border-b border-l border-r border-[#22181C] transition-all`}>{MatchesTags}</ul>
                }
            <span className='flex gap-1 flex-wrap mt-2 h-6'>{ Dtags }</span>
            </form>
        </section>

    );
}

export default TagField;