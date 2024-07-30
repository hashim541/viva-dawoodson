import React from 'react'
import { shirtItems } from '@/utils/data'
import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa'

const Shirts = () => {
  return (
    <section className="w-full py-10 columns-3 lg:columns-4 gap-3 mx-auto space-y-3" id='Shirts'>
        {shirtItems.map(item => (
            <div
                key={item}
                className="break-inside-avoid min-w-[100px] relative"
            >
                <div className='absolute top-3 right-3 text-red-500'>
                    <FaRegHeart />
                </div>
                <Image
                    src={`/assets/images/designs/shirt${item}`}
                    alt='shirts'
                    width={Math.floor(Math.random() * (300 - 150 + 1)) + 150}
                    height={100}
                    className='w-full h-fit object-cover rounded-lg shadow-sm hover:scale-[1.01]'
                />
            </div>
        ))}
    </section>
  )
}

export default Shirts