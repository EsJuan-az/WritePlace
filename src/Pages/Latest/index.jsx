import { useState } from "react";
import TextFeed from "../../Components/TextFeed";

const cases = [
    {
        title: "Sobre la lectura",
        category: {
            name: "Ensayo",
            aboutPrefix: "Ensayo sobre ",
        },
        about: "la lectura",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo eget neque scelerisque lobortis ac eu turpis. Aenean varius eu magna vitae eleifend. Phasellus non bibendum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ultricies quam tortor, at molestie sapien finibus sit amet. Curabitur interdum molestie eros, in rhoncus metus eleifend ac. Maecenas malesuada bibendum eros, sed varius nisl molestie id.",
        tags: ["lectura", "pensamiento crítico", "filosofía", "xx", "x"],
        author: {
            name: "Estanislao Zuleta",
            img: "https://alponiente.com/wp-content/uploads/2021/02/if8wj6gT_400x400.jpg",
        },
        nsfw: false,
        cover: "https://m.media-amazon.com/images/I/41uFBncjxLS.jpg",
        stars: 5,
        reviews: 10, 
        comments: 10,
        date: '17/11/2023 20:28',
    },
    {
        title: "La utilidad de lo inútil",
        category:     {
            name: "Ensayo",
            aboutPrefix: "Ensayo sobre ",
        },
        about: "la lectura",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo eget neque scelerisque lobortis ac eu turpis. Aenean varius eu magna vitae eleifend. Phasellus non bibendum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ultricies quam tortor, at molestie sapien finibus sit amet. Curabitur interdum molestie eros, in rhoncus metus eleifend ac. Maecenas malesuada bibendum eros, sed varius nisl molestie id.",
        tags: ["literatura", "educación", "pensamiento crítico"],
        author: {
            name: "Nuccio Ordineeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/04/16832162292663.jpg",
        },
        nsfw: false,
        stars: 5,
        reviews: 10, 
        comments: 10,
        date: '17/11/2023 20:28',
    },
    {
        title: "Sodoma y Gomorra",
        category: {
            name: "Cuento",
            aboutPrefix: "Cuento",
        },
        about: " sobre la hermandad",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo eget neque scelerisque lobortis ac eu turpis. Aenean varius eu magna vitae eleifend. Phasellus non bibendum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ultricies quam tortor, at molestie sapien finibus sit amet. Curabitur interdum molestie eros, in rhoncus metus eleifend ac. Maecenas malesuada bibendum eros, sed varius nisl molestie id.",
        tags: ["crimen", "gore", "distopía", "crimen", "gore", "distopía", "crimen", "gore", "distopía", "crimen", "gore", "distopía"],
        author: {
            name: "Juan Esteban Arango",
            img: "https://preview.redd.it/pwpks2a80bj31.gif?width=800&auto=webp&s=48bfc3ad55d7d05c07ff193152deac92c9bb090e",
        },
        nsfw: true,
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_Martin_-_Sodom_and_Gomorrah.jpg/330px-John_Martin_-_Sodom_and_Gomorrah.jpg",
        stars: 5,
        reviews: 10, 
        comments: 10,
        date: '17/11/2023 20:28',
        collection: {
            name: "Cuentos cortos",
            content: [

            ],
        },

    },
];

function Latest() {
    const [page, setPage] = useState(0);

    const texts = cases.map( (c, i) => <TextFeed key={i} text={c}/> );
  return (
    <>
        <h2 className='playfair text-2xl'>Últimos escritos de la comunidad</h2>
        <ul className="w-5/6 m-auto" >
            {texts}
        </ul>
        <section className="w-1/5 mt-4 m-auto flex justify-around">
            <button
                disabled={page == 0}
                className="disabled:bg-[#3E2B33] disabled:border-[#3E2B33] transition-all rounded-full border-[#22181C] bg-[#22181C] border-[3px] px-3 py-1 font-semibold text-[#E4E6C3]"
                onClick={() => setPage( page - 1 )}>
                Previous
            </button>
            <button
                className="rounded-full border-[#22181C] border-[3px] px-3 py-1 font-semibold text-[#22181C]"
                onClick={() => setPage(page + 1)}>
                Next
            </button>
        </section>
    </>
  );
}

export default Latest;