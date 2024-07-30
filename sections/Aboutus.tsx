import { head3 } from '@/utils/font';
import React from 'react';
import { ourClients } from '@/utils/data';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-10 text-sm text-center flex flex-col justify-center items-center gap-4" id='About'>
      <h2 className={`${head3.className} text-6xl font-bold`}>About Us</h2>
      <p className="max-w-2xl mx-auto">
        Since 2000, Viva Dawoodson has been delivering top-notch tailoring services in Chennai. Our expert artisans craft tailored suits, tuxedos, shirts, pants, and kurtas with a focus on exceptional quality and fit.
      </p>
      <p className="max-w-2xl mx-auto">
        We pride ourselves on meticulous craftsmanship and clean finishing, ensuring every garment enhances your style with sophistication and comfort.
      </p>
      <div className='w-full text-center flex flex-col justify-center items-center gap-3 mt-6'>
        <h3 className={`${head3.className} text-3xl font-semibold `}>Our Clients</h3>
        <p className="text-base">
          We have had the privilege of working with esteemed clients, including
        </p>
        <div className='w-full flex flex-wrap items-center justify-center gap-6 mt-4'>
            {
                ourClients.map(item => (
                    <Image
                        key={item}
                        src={'/assets/images/'+item}
                        alt={item}
                        width={200}
                        height={100}
                        className='h-[100px] object-fit rounded-md'
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
