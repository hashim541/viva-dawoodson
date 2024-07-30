import Image from 'next/image';
import React from 'react'
import { head3 } from '@/utils/font';

interface Props {
    item: {
        title: string;
        desc: string;
        icon: JSX.Element;
    }
}

const FeatureItem = ({ item }: Props) => {
  return (
    <article className="max-w-96 relative overflow-hidden flex gap-5 items-start text-sm bg-gradient-to-br from-borderColor to-background px-6 py-5 h-full rounded-md">
        <div className="text-primary text-2xl">
            {item.icon}
        </div>
        <div className="flex flex-col gap-2">
            <h2 className={`${head3.className} text-xl`}>{item.title}</h2>
            <p className="text-left">{item.desc}</p>
        </div>
        <div className="text-primary text-7xl absolute -bottom-4 -right-3 opacity-20">
            {item.icon}
        </div>
    </article>

  )
}

export default FeatureItem