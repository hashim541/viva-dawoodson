
import Navbar from '@/components/Navbar';
import AboutUs from '@/sections/Aboutus';
import Collections from '@/sections/Collections';
import Contact from '@/sections/Contact';
import Features from '@/sections/Features';
import Footer from '@/sections/Footer';
import Home from '@/sections/Home';
import Shirts from '@/sections/Shirts';
import Testimonals from '@/sections/Testimonals';
import Image from 'next/image';

const page = () => {


  return (
    <main className='w-full flex flex-col items-center min-h-screen px-4'>

      <section className='w-full max-w-[1200px] flex flex-col items-center fixed z-20 '>
        <Navbar/>
      </section>
 
      <section className='w-full flex flex-col items-center '>
        <div className='bg-black absolute inset-0 -z-20'></div>
        <Home/>
        <Image
          src={'/assets/images/bg5.jpg'}
          alt='bg image'
          width={1200}
          height={600}
          className='w-full shadow-md object-cover h-screen opacity-70  absolute -z-10 '
        />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <AboutUs />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Collections />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Features />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Shirts />
      </section>


      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Testimonals />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Contact />
      </section>

      <section className='w-full max-w-[1200px] flex flex-col items-center'>
        <Footer />
      </section>

    </main>
  );
}

export default page