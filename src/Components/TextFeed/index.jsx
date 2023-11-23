import PropTypes from 'prop-types';
import { AiFillWarning, AiFillStar } from 'react-icons/ai';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { FaTag } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
function TextFeed({ text: { title, about, tags:t, author, nsfw, cover, stars, content, reviews, comments, date, collection, category: {aboutPrefix}} }) {
    const tags = t.map( (t, i) => {
        return <NavLink  className='text-[#22181C] text-xs font-semibold flex p-1 bg-[#E4E6C3] rounded-full items-center' key={i}><FaTag />{ t }</NavLink>;
    } );
  return (
    <li className='bg-[#22181C] transition-all flex flex-col text-[#E4E6C3] px-3 py-2 my-2 rounded-tl-lg rounded-bl-lg rounded-br-lg relative feedtext'>
        {/* Autor */}
        <span className='flex items-center gap-2'>
            <img src={author.img} alt={author.name} className='w-[25px] h-[25px] rounded-full' />
            <h4 className='text-sm w-1/3 truncate'>Por { author.name }</h4>
        </span>
        { collection && <h4 className='text-xs w-1/3 truncate'>De la colección <em className="font-semibold">{ collection.name }</em></h4>}
        {/* Detalles */}
        <figure className='absolute flex flex-col items-end top-2 right-2 text-[10px] font-semibold [&>span]:flex [&>span]:gap-1 [&>span]:items-center [&>span]:text-md'>
            <span className='text-[#E4E6C3]'>
                {comments}
                <BiSolidCommentDetail className='text-base'/>
            </span>
            <span>
                {stars/reviews}
                <AiFillStar className='text-base'/>
            </span>
            {
                nsfw 
                &&
                <span>
                    nsfw
                    <AiFillWarning className='text-base'/>
                </span>
            }
        </figure>
        {/* Nombre y desc */}
        <h2 className='playfair text-2xl mt-2 w-2/3 truncate'>{title}</h2>
        <h4 className='text-xs mt-[-5px] w-2/3 truncate'>{aboutPrefix}{about}</h4>
        <hr/>

        <section className='flex gap-3 mt-1 justify-start items-center'>
            { !!cover && <img src={cover} alt={title} className='h-28 rounded-md pointer-events-none' /> }

            <span className='block text-sm mt-1 max-h-28 pshadow text-ellipsis overflow-hidden flex-grow p-1 select-none'>{content}</span>
        </section>
        <NavLink className="self-end hover:underline-offset-2 transition-all text-sm underline underline-offset-4 mt-1">Continúa leyendo...</NavLink>
        <ul className="mt-1 flex gap-3 w-2/3 truncate">
            { tags }
        </ul>
        <h6 className='text-xs mt-2'>
            {date}
        </h6>
    </li>
  );
}
TextFeed.propTypes = {
    text: PropTypes.object,
  };
export default TextFeed;