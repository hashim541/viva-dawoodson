import React from 'react'
import { font, head3 } from '@/utils/font'
import Image from 'next/image'

const Home = () => {
  return (
    <section className="relative max-w-[1200px] bg-cover bg-center py-10 h-screen flex items-center text-white justify-center  w-full gap-6" id='Home'>

      <div className="relative p-8 flex flex-col gap-3 items-center ">
        <h2 className="text-lg opacity-50">Premier Gents Tailor </h2>
        <h1 className={`${head3.className} text-5xl font-bold mb-4 text-white text-center`}>Viva Dawoodson</h1>
        <p className="max-w-3xl mx-auto text-sm text-center ">
        Experience exceptional men's tailoring with meticulous craftsmanship. Each garment is expertly crafted to offer perfect style, comfort, and sophistication, ensuring a flawless fit and unmatched quality.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-text">
          <a href="#Product" className={`${head3.className} bg-primary text-background  py-3 px-7 rounded-full `}>Our Services</a>
          <a href="#Contact" className="bg-secondary  py-3 px-6  rounded-full">Contact Us</a>
        </div>
      </div>

      {/* <div className='absolute  top-0 w-full hidden lg:block max-h-screen -z-20'>
        <Image
          src={'/assets/images/bg.jpg'}
          alt='bg image'
          width={700}
          height={400}
          className='object-cover w-full h-screen rounded-xl'
        />
      </div>
      <Image
        src={'/assets/images/wavy-steps.png'}
        alt='bg image'
        width={1200}
        height={200}
        className='w-full rounded-md shadow-md object-cover opacity-10 rotate-180 absolute bottom-0 right-0 h-[120px]'
      /> */}

    </section>
  )
}

export default Home