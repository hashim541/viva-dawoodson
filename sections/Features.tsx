import React from 'react'
import { featureItem } from '@/utils/data'
import FeatureItem from '@/components/FeatureItem'
import { head3 } from '@/utils/font'

const Features = () => {
  return (
    <section className=" py-10 flex flex-col items-center justify-center w-full gap-6" id='Features'>
      <h2 className={`${head3.className} text-5xl text-center`}>Why Us?</h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-6" >
          {
              featureItem.map(item => (
                  <FeatureItem key={item.title} item={item} />
              ))
          }
      </div>
    </section>
  )
}

export default Features