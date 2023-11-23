import React, { useEffect, useState } from 'react';

import { FaBook } from "react-icons/fa";

const suggestions = [
    {
        name: "Cien años de soledad",
        type: "Novela",
        id: "aoskjais",
    },
    {
        name: "Inventario 1994-2002",
        type: "Poemario",
        id: "aisaisams",
    },
    {
        name: "El Aleph",
        type: "Antología",
        id: "192881jindu",
    },
];


function CollectionField({onChange}) {
    //Obtener sugerencias de colecciones.
    const [col, setCol] = useState({
        name: '',
    });
    const [selected, setSelected] = useState(-1);
    const [showMatches, setShowMatches] = useState(false);
    //Cada vez que cambien la colección, será enviada al objeto principal.
    useEffect( () => {
        onChange(col.id);
    }, [col]);
    //Cada vez que cambien la colección, no habrá selecciones nuevamente.
    useEffect( () => {
       setSelected(-1); 
    }, [col]);
    const matches = suggestions.filter( s => {
        const name = s.name.trim().toLocaleLowerCase();
        return name.includes(col.name) && name != col.name.trim().toLocaleLowerCase();
    });

    const selectedCol = matches[selected];
    //Coincidencias con las colecciones
    const MatchedCols = matches.slice(0, 4).map( (col, i) => {
        return (
        <li key={i}
            onMouseOver={() => setSelected(i)}
            className={`flex justify-between border-b border-[#22181C] cursor-pointer px-1 py-2
            ${ selected == i ? 'text-[#E4E6C3] bg-[#22181C]' : 'bg-[#E4E6C3] text-[#22181C]' }`}
            onClick={() => setCol( col ) }
            >
            <h2 className='font-semibold'>{col.name}</h2>
            <h4 className='text-[9px] self-end mb-[-5px]'>{col.type}</h4>
        </li>);
    } );

    

    return (
        <section className="flex gap-3 items-center mb-6">
            <section className='mt-2'>
                <form className='relative' 
                onBlur={ () => setTimeout(setShowMatches, 100, false) }
                onFocus={ () => setShowMatches(true) }
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
                    let newCol = selectedCol || col;
                    if(newCol.name != '') {
                        setCol(newCol);
                    }
                }}>
                    <FaBook className='absolute left-0 top-1 fill-[#22181C]'/>
                    <input type="text" value={col.name}
                        className='pl-5 outline-none bg-[#E4E6C3] border-b-2 border-[#22181C] placeholder:text-[#22181C] placeholder:opacity-60 font-semibold'
                        placeholder='Colección (opcional)'
                        onChange={ e => {
                            setCol({ name:e.target.value });
                        }}/>
                    {
                        matches.length > 0 && col.name.trim() != '' 
                        &&
                        <ul className={`${showMatches ? 'opacity-90' : 'opacity-0 z-[-20]'} absolute w-48 bg-[#F7F7F2] border-b border-l border-r border-[#22181C] transition-opacity`}>{MatchedCols}</ul>
                    }
                    {
                        !col.id && !!col.name 
                        &&
                        <h4 className='font-semibold text-[#22181C] mt-1'>¡Esta colección no existe!</h4>

                    }
                </form>

        </section>
        </section>

    );
}


export default CollectionField;