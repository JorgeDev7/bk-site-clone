import useBk from '../../hooks/useBk'

export default function Item() {

    const { extras } = useBk();

    return (
        <div className="carousel-item flex items-center gap-8">
            {extras?.map(extra => (
                <div
                    key={extra.producto.id}
                    className='flex flex-col justify-center'
                >
                    <img
                        src={`/assets/images/${extra.producto.categoria}/${extra.producto.imagen}.webp`}
                        className="w-80"
                        alt={`imagen producto ${extra.producto.nombre}`} />
                    <button
                        type="button"
                        className=" bg-rojo hover:bg-amarillo transition-colors text-white py-2 px-4 w-max mx-auto mt-5 xl:w-auto rounded"
                    ><i className='bx bxs-shopping-bag' ></i> Agregar al carrito</button>
                </div>
            ))}
        </div>
    )
}
