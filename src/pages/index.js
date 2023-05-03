import Image from 'next/image'
import { Roboto, Satisfy } from 'next/font/google'
import Layout from '@/layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '500'
})

const dancingScript = Satisfy({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: '400'
})

export default function Home() {

  return (
    <Layout
      pagina="Home"
    >
      <h1 className={`text-amarillo font-black text-4xl md:text-6xl lg:text-7xl uppercase text-end mt-5 md:mt-10 lg:mr-28`}>Es hora del <span className='text-rojo block text-3xl md:text-5xl lg:text-6xl'>desayuno</span></h1>
      <Image
        width={750}
        height={850}
        src="/assets/images/bk-desayuno.png"
        alt="logo BK"
        className='mx-auto -mt-5 lg:-mt-20'
        priority={true}
      />

      <div className='border-y-2 border-y-grisOscuro border-dashed px-10 py-5 w-max md:w-[550px] mx-auto text-center'>
        <h2 className={`${dancingScript.variable} font-dancing font-black text-grisOscuro text-3xl mb-4`}>Ordena a domicilio de</h2>
        <p className={`text-grisOscuro ${roboto.variable} font-roboto font-medium text-xl`}>7:00 am a 22:00 pm</p>
      </div>

      <div className="carousel carousel-center p-4 space-x-4 rounded-box mx-auto mt-10">
        <div className="carousel-item">
          <Image
            height={700}
            width={700}
            alt='plato con croassint tortilla, frijoles, platano frito, huevos con salsa y jamon'
            src="/assets/images/lo-nuevo/bk-chapin-jamon.jpg"
            className="rounded-box mx-auto max-md:w-full h-full object-cover"
            loading='eager'
          />
        </div>
        <div className="carousel-item">
          <Image
            height={700}
            width={700}
            alt='porcion de panqueques con salchica'
            src="/assets/images/lo-nuevo/panqueques-salchicha.jpg"
            className="rounded-box mx-auto max-md:w-full h-full object-cover"
            loading='eager'
          />
        </div>
        <div className="carousel-item">
          <Image
            height={700}
            width={700}
            alt='hershey pie'
            src="/assets/images/lo-nuevo/hersheys-pie.jpg"
            className="rounded-box mx-auto max-md:w-full h-full object-cover"
            loading='eager'
          />
        </div>
        <div className="carousel-item">
          <Image
            height={700}
            width={700}
            alt='porcion tostadas a la francesa'
            src="/assets/images/lo-nuevo/tostadas-francesas.jpg"
            className="rounded-box mx-auto max-md:w-full h-full object-cover"
            loading='eager'
          />
        </div>
        <div className="carousel-item">
          <Image
            height={700}
            width={700}
            alt='shake oreo'
            src="/assets/images/lo-nuevo/shake-oreo.jpg"
            className="rounded-box mx-auto max-md:w-full h-full object-cover"
            loading='eager'
          />
        </div>
      </div>

    </Layout>
  )
}
