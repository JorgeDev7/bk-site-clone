import Image from "next/image"

export default function Preview({ titulo, texto }) {
    return (
        <div className="flex flex-col items-center gap-5 mt-32 bg-white mx-auto w-[500px] rounded-sm">
            <div className="bg-white border-8 border-fondo rounded-full -mt-20">
                <Image
                    width={140}
                    height={140}
                    src='/assets/images/bk-logo.png'
                    alt="BK logo"
                    className="p-5 object-cover"
                />
            </div>
            <h2 className="text-amarillo text-3xl uppercase">{titulo}</h2>
            <p className="text-grisOscuro text-lg">{texto}</p>

            <button
                type="button"
                className="bg-amarillo w-full py-5 text-white uppercase hover:bg-amber-500 transition-colors rounded-b-sm"
            >Ingresar</button>
        </div>
    )
}
