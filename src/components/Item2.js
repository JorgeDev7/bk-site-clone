import Link from 'next/link';
import useBk from '../../hooks/useBk'

export default function Item2() {

    const { bebidas } = useBk();

    return (
        <div className="carousel-item flex gap-8">
            {bebidas?.map(beb => (
                <div
                    key={beb.producto.id}
                    className='flex flex-col justify-center'
                >
                    <Link
                        href={`/producto/${beb.producto.id}`}
                    >
                        <img
                            src={`/assets/images/${beb.producto.categoria}/${beb.producto.imagen}.webp`}
                            className="w-80"
                            alt={`imagen producto ${beb.producto.nombre}`} />
                    </Link>
                    <button
                        type="button"
                        className=" bg-rojo hover:bg-amarillo transition-colors text-white py-2 px-4 w-max mx-auto mt-5 xl:w-auto rounded"
                    ><i className='bx bxs-shopping-bag' ></i> Agregar al carrito</button>
                </div>
            ))}
        </div>
    )

}
