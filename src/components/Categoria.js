export default function Categoria({ nombre }) {

    const { categoria, url } = nombre;

    return (
        <li className="border-b last-of-type:border-b-0 pb-2 last-of-type:pb-0 pt-2.5 lg:pl-5 lg:pr-10 lg:py-2">
            <a
                className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors font-poppins font-black text-lg uppercase`}
                href={`/categoria/${url}`}
            >{categoria}</a>
        </li>
    )
}
