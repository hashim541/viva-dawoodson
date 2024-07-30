import React from 'react'
import { head3 } from '@/utils/font'
import { collectionItems } from '@/utils/data'
import CollectionCard from '@/components/CollectionCard'

const Collections = () => {
  return (
    <section className=" py-10 flex flex-col items-center justify-center w-full gap-6" id='Product'>
        <h2 className={`${head3.className} text-5xl text-center`}>Our Designs & Finishing</h2>
        <p className='max-w-2xl mx-auto text-sm text-center'>We expertly craft every garment for top quality and a perfect fit. From suits and tuxedos to shirts, pants, and kurtas, our skilled artisans ensure clean finishes and meticulous attention to detail, enhancing your style with sophistication and comfort.</p>
        <div className="w-full py-10 columns-3 lg:columns-4 gap-1 mx-auto space-y-3">
            {collectionItems.map((item, index) => (
                <CollectionCard key={index} item={item} />
            ))}
        </div>
    </section>
  )
}

export default Collections