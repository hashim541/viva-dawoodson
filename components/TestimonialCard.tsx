import React from 'react'
import { FaStar } from 'react-icons/fa';

interface Props {
    item: {
        name: string;
        role: string;
        rating: number;
        content: string;
    }
}

const TestimonialCard = ({ item }: Props) => {

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
        ));
      };

  return (
    <article className='max-w-96 flex flex-col gap-3 items-center p-5 border-2 border-borderColor rounded-lg bg-gradient-to-br from-borderColor to-background'>
        <div className="flex flex-col items-center mb-2">
            <div className="text-lg font-semibold mr-2 text-center">{item.name}</div>
            <div className="text-sm text-text">- {item.role}</div>
        </div>
        <div className="flex mb-2">
            {renderStars(item.rating)}
        </div>
        <p className="text-text text-center text-sm">{item.content}</p>
    </article>
  )
}

export default TestimonialCard