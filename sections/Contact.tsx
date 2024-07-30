import { head3 } from '@/utils/font'
import React from 'react'
import { contactInfo } from '@/utils/data';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className=" py-10 flex flex-col items-center justify-center w-full gap-6" id='Contact'>
      <h2 className={`${head3.className} text-5xl text-center`}>Contact Us</h2>

      <p className='max-w-2xl mx-auto text-sm text-center'>Contact our shop at Chennai.</p>

      <div className='overflow-hidden rounded-lg w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9934237710745!2d80.27945807495819!3d13.099602987227641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5954bed4bb%3A0xc9a17ee26d1ac52b!2sVIVA%20DAWOODSON%20GENTS%20TAILOR!5e0!3m2!1sen!2sin!4v1722255273452!5m2!1sen!2sin" width="100%" height="400"  loading="lazy" ></iframe>
      </div>

      <div className="flex flex-wrap gap-6 text-sm">
        <div className=" flex flex-col gap-4  max-w-96">
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <p >{contactInfo.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary text-xl" />
            <p>{contactInfo.phone}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary text-xl" />
            <p>{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold ">Business Hours</h3>
          <p className=""><strong>Weekdays:</strong> {contactInfo.hours.weekdays}</p>
          <p><strong>Sunday:</strong> {contactInfo.hours.sunday}</p>
        </div>
      </div>

      <div className='pt-10 flex flex-col  justify-center items-center gap-4'>
        <h2 className={`${head3.className} text-4xl`}>Social Media</h2>
        <div className="flex justify-around w-full">
            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-4xl" />
            </a>
            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-4xl" />
            </a>
            <a href={contactInfo.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-400 text-4xl" />
            </a>
        </div>
      </div>


    </section>
  )
}

export default Contact