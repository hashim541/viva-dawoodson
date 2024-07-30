import TestimonialCard from '@/components/TestimonialCard'
import { testimonialItems } from '@/utils/data'
import { head3 } from '@/utils/font'
import React from 'react'

const Testimonals = () => {
  return (
    <section className=" py-10 flex flex-col items-center justify-center w-full gap-6" id='Testimonials'>
      <h2 className={`${head3.className} text-5xl text-center`}>Testimonials</h2>
      <p className='max-w-2xl mx-auto text-sm text-center'>What our customers have to say about the finishing.</p>
      <div className="flex flex-wrap items-center justify-center w-full gap-6 mt-3" >
          {
              testimonialItems.map(item => (
                <TestimonialCard key={item.name} item={item} />
              ))
          }
      </div>
    </section>
  )
}

export default Testimonals