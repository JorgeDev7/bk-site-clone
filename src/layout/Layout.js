import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { Poppins, Montserrat } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
    weight: '400',
    variable: '--font-pop',
    subsets: ['latin']
})

const montserrat = Montserrat({
    weight: ['400', '900'],
    variable: '--font-mont',
    subsets: ['latin']
})

export default function Layout({ children, pagina }) {

    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleActive = () => {
        setActive(!active);
    }

    // Date
    const year = new Date();

    return (
        <>
            <Head>
                <meta name="application-name" content="Burger King" />
                <meta name="theme-color" content="#fff" />
                <title>Burger King - {pagina}</title>
                <link rel="icon" type="image/png" href="/assets/images/bk-logo.png" />
            </Head>

            <header className={`bg-white shadow-sm py-5 lg:py-2.5 ${active ? 'h-[542px]' : 'h-[105px]'} transition-[height] duration-500 lg:h-auto ${montserrat.variable} font-sans`}>
                <div className="container px-5 mx-auto lg:flex justify-around gap-5 items-center">
                    <div
                        className="flex justify-between items-center"
                        onClick={() => router.push('/')}
                    >
                        <Image
                            width={65}
                            height={65}
                            src="/assets/images/bk-logo.png"
                            alt="logo BK"
                            className="cursor-pointer"
                            priority={true}
                        />

                        <i
                            className='bx bx-menu-alt-right text-4xl cursor-pointer text-grisOscuro lg:hidden'
                            onClick={handleActive}
                        ></i>
                    </div>

                    <nav className={`mt-10 lg:mt-0 ${active ? 'opacity-100 pointer-events-auto delay-200' : 'opacity-0 pointer-events-none'} transition-opacity lg:opacity-100 lg:pointer-events-auto`}>
                        <ul className="space-y-3 lg:space-y-0 lg:flex items-center gap-6">
                            <li className="border-b pb-2 lg:pb-0 lg:border-0">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins.variable} font-poppins font-black text-lg uppercase`}
                                    href="/menu"
                                >Menú</a>
                            </li>
                            <li className="border-b pb-2 lg:pb-0 lg:border-0">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins.variable} font-poppins font-black text-lg uppercase`}
                                    href="/ubicaciones"
                                >Ubicaciones</a>
                            </li>
                            <li className="border-b pb-2 lg:pb-0 lg:border-0">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins.variable} font-poppins font-black text-lg uppercase`}
                                    href="/nuevo"
                                >Lo nuevo</a>
                            </li>
                            <li className="border-b pb-2 lg:pb-0 lg:border-0">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins.variable} font-poppins font-black text-lg uppercase`}
                                    href="/ordenes"
                                >Mis Órdenes</a>
                            </li>
                            <li className="border-b pb-2 lg:pb-0 lg:border-0">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins.variable} font-poppins font-black text-lg uppercase`}
                                    href="/direcciones"
                                >Mis direcciones</a>
                            </li>

                            <li className="border-b lg:border-0">
                                <i className='bx bx-search-alt text-3xl text-amarillo hover:text-rojo transition-colors cursor-pointer lg:border-l-2 lg:pl-4' ></i>
                            </li>
                        </ul>
                    </nav>

                    <div className={`mt-10 lg:mt-0 ${active ? 'opacity-100 pointer-events-auto delay-200' : 'opacity-0 pointer-events-none'} transition-opacity lg:opacity-100 lg:text-center lg:pointer-events-auto`}>
                        <p className="text-amarillo hover:underline cursor-pointer pb-5 lg:pb-2">Ingresar/Registro</p>
                        <div className="bg-[#f9f9f9] rounded-full border border-[#ececec] max-lg:relative py-1 lg:py-0 lg:flex lg:gap-3">
                            <div className="flex items-center pl-3 space-x-2">
                                <p className={`text-[#595f65] text-sm ${montserrat} font-medium hover:underline hover:text-rojo transition-colors cursor-pointer`}>0 artículos</p>
                                <p className={`text-[#595f65] text-sm border-s pl-2 ${montserrat} font-medium hover:underline hover:text-rojo transition-colors cursor-pointer`}>Q0.00</p>
                            </div>
                            <div className="max-lg:absolute -top-1 right-0 bg-amarillo rounded-full p-2.5 flex items-center justify-center cursor-pointer">
                                <i className='bx bxs-shopping-bag text-white' ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <main className={`container px-5 mx-auto ${montserrat.variable} font-sans`}>
                {children}
            </main>

            <footer className={`container px-5 mx-auto mt-16 text-center ${montserrat.variable} font-sans pb-10`}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 md:gap-0">
                    <div className="mb-5 lg:flex items-center gap-5">
                        <Image
                            width={65}
                            height={65}
                            src="/assets/images/bk-logo.png"
                            alt="logo BK"
                            className="cursor-pointer mx-auto"
                            priority={true}
                        />
                    </div>
                    <p className="text-grisOscuro">© Burger King Guatemala {year.getFullYear()}</p>
                </div>

                <div className="my-5">
                    <ul className="space-y-2 lg:flex lg:items-center lg:justify-center lg:gap-5 lg:space-y-0">
                        <li>
                            <p className="text-rojo hover:underline cursor-pointer">Celebra con nosotros</p>
                        </li>
                        <li>
                            <p className="text-rojo hover:underline cursor-pointer lg:border-l-2 lg:border-rojo lg:pl-4">Únete a nuestro equipo</p>
                        </li>
                    </ul>
                </div>

                <p className="text-grisOscuro">El uso de ésta página está sujeta a nuestros <span className="text-rojo hover:underline cursor-pointer">Términos y Condiciones</span> y <span className="text-rojo hover:underline cursor-pointer"> Políticas de Privacidad</span></p>
            </footer>
        </>
    )
}