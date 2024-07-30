import Image from 'next/image';
import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';

interface Props {
    item : {
        itemName: string;
        img: string;
    }
}

const CollectionCard = ({ item }: Props) => {
  return (
    <article className='rounded-lg overflow-hidden shadow-sm break-inside-avoid min-w-[100px] w-fit relative'>

        <Image
            src={`/assets/images/designs/${item.img}`}
            alt={item.itemName}
            width={300}
            height={350}
        />
        <div className='px-4 py-2 flex justify-between mt-2 absolute bottom-0 left-0 w-full text-white bg-gradient-to-t from-black to-transparent'>
            <h3 className='text-sm'>{item.itemName}</h3>
            <div className=' flex items-center gap-1'>
                <FaThumbsUp />
                <p className='text-sm'>{Math.floor(Math.random() * (300 - 50 + 1)) + 50}</p>
            </div>
        </div>
    </article>
  )
}

export default CollectionCard