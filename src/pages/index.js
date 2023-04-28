import Image from 'next/image'
import { Sigmar_One, Roboto } from 'next/font/google'
import Layout from '@/layout/Layout';

const sigmar = Sigmar_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

export default function Home() {
  return (
    <Layout></Layout>
  )
}
