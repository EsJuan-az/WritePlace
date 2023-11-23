import React, { useEffect } from "react";
const categories = [
    {
        id: "iasdmisifa", 
        name: "Reseña Libro",
        aboutPrefix: "Reseña del libro: ",
    },
    {
        id: "fty45hu7sa", 
        name: "Ensayo",
        aboutPrefix: "Ensayo sobre ",
    },
    {
        id: "ia7thtrggrfa", 
        name: "Capítulo",
        aboutPrefix: "Capítulo",
    },
    {
        id: "iajsa", 
        name: "Cuento",
        aboutPrefix: "Cuento",
    },

];
function CategoryAboutField({onChangeCategory, onChangeAbout}) {
    //Obtener categories del server.
    const options = categories.map( (c, i) => <option key={i} value={c.id}>{c.aboutPrefix}</option> );
    useEffect( () => {
        onChangeCategory(categories[0].id);
    }, []);
  return (
    <span className="flex">
        <select className="bg-[#E4E6C3] outline-none  border-b-2 border-b-[#22181C] text-center"
        onChange={ e => onChangeCategory(e.target.value)}>
            {options}
        </select>
        <input type="text" onChange={ e => onChangeAbout(e.target.value)}
            className='pl-1 outline-none bg-[#E4E6C3] border-b-2 border-[#22181C] placeholder:text-[#22181C] placeholder:opacity-60 font-semibold'
            placeholder='Complete'/>
    </span>
  );
}

export default CategoryAboutField;
