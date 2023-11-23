import React, { useEffect, useState } from 'react';
import TitleField from '../../Components/TitleField';
import CategoryAboutField from '../../Components/CategoryAboutField';
import RichText from '../../Components/RichText';
import TagField from '../../Components/TagField';
import CollectionField from '../../Components/CollectionField';
import AskNsfw from '../../Components/AskNsfw';
import AskPrivate from '../../Components/AskPrivate';
import ImageField from '../../Components/ImageField';




function Write() {
    const [ text, setText ] = useState({
        title: '',
        about: '',
        category: '',
        content: '',
        tags: [],
        collection: {},
        nsfw: false,
        priv: false,
    });
  return (
    <>
        <h2 className='playfair text-2xl'>¡Exprésate!</h2>
        <section className='flex flex-col'>
            <nav className='flex items-center w-full h-12 mt-1 justify-around [&>ul]:flex [&>ul]:gap-3'>
                <ul>
                    <TitleField
                    onChange={( val ) => {
                        text.title = val;
                        setText( text );
                    }}/>
                    <CategoryAboutField
                    onChangeAbout={( val ) => {
                        text.about = val;
                        setText( text );
                    }}
                    onChangeCategory={( val ) => {
                        text.category = val;
                        setText( text );
                    }}/>
                </ul>
                <ul>
                    <ImageField onChange={( val ) => {
                            text.img = val;
                            setText( text );
                        }}/>
                </ul>
            </nav>
            <section className='mt-2'>
                <RichText onChange={( val ) => {
                    text.content = val;
                    setText( text );
                }}/>
                <div className='flex justify-between my-2'>
                    <TagField onChange={( val ) => {
                        text.tags = val;
                        setText( text );
                    }}/>

                    <CollectionField onChange={( val ) => {
                        text.collection = val;
                        setText( text );
                    }}/>
                </div>
            </section>

            <div className='w-[10%] my-5 flex m-auto gap-2'>
                    <AskNsfw onChange={( val ) => {
                        text.nsfw = val;
                        setText( text );
                    }}/>
                    <AskPrivate onChange={( val ) => {
                        text.priv = val;
                        setText( text );
                    }}/>
            </div>

            <button
                className='border-2 rounded-lg border-[#22181C] py-1 px-2 self-end font-semibold text-[#22181C]'
                onClick={ () => {
                    console.table(text);
                }}>
                    Subir
                </button>
        </section>
    </>
  );
}

export default Write;