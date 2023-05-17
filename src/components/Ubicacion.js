import Image from "next/image"

export default function Ubicacion({ datos }) {

    const { direccion, horarios, telefono } = datos;

    return (
        <div className="bg-white w-72 flex flex-col items-center mx-auto gap-5 rounded-md shadow-md mt-20 p-5">
            <Image
                width={100}
                height={100}
                src={'/assets/images/bk-logo.png'}
                alt="logotipo BK"
            />
            <div className="space-y-2">
                <p className="text-grisOscuro font-bold text-sm"><span className="text-amarillo text-base">Dirección:</span>{' '}{direccion}</p>
                <div>
                    <p className="text-amarillo py-3">Horarios:</p>
                    <ul className="ml-5 text-sm space-y-3">
                        {horarios?.map(horario => (
                            <li
                                key={Math.random()}
                            ><p className="font-bold text-grisOscuro inline">{horario.dia}</p>:{' '}<span className="text-gray-400">{horario.nota}</span>
                                <span className="text-gray-400">{horario.inicio}</span> <span className={`text-gray-400 ${horario.nota === '' ? 'before:inline-block before:w-2 before:h-0.5 before:bg-gray-400 before:mb-1 before:mr-1.5' : ''}`}>{horario.fin}</span></li>
                        ))}
                    </ul>
                </div>
                <p className="text-sm pt-3"><span className="text-amarillo text-base">Teléfono:</span>{' '}{telefono}</p>
            </div>
        </div>
    )
}
