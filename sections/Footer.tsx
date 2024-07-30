import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '@/utils/data';

const Footer = () => {
  return (
    <footer className="w-full bg-borderColor text-text py-8 px-10 mb-10 rounded-xl">

      <div className=" mx-auto flex flex-col gap-8 md:flex-row md:justify-between">

        <div className="flex flex-col items-center gap-5 md:items-start">
            <Image
                src="/assets/images/logo.png"
                alt="Viva Dawoodson Logo"
                width={120}
                height={60}
                className="mb-4"
            />
            <p className="text-sm">
                © {new Date().getFullYear()} Viva Dawoodson. All rights reserved.
            </p>
            <div className=" flex flex-col gap-4 text-sm  max-w-96">
                <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary text-2xl" />
                    <p >{contactInfo.address}</p>
                </div>
                <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-primary text-xl" />
                    <p>{contactInfo.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary text-xl" />
                    <p>{contactInfo.email}</p>
                </div>
            </div>
            <p className="text-sm mt-2">
                <span className="block">Weekdays: {contactInfo.hours.weekdays}</span>
                <span className="block">Sunday: {contactInfo.hours.sunday}</span>
            </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#Home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#Product" className="hover:text-gray-400">Services</a></li>
            <li><a href="#About" className="hover:text-gray-400">About</a></li>
            <li><a href="#Contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href={contactInfo.social.facebook} aria-label="Facebook" className="text-secondary hover:text-primary">
              <FaFacebookF size={20} />
            </a>
            <a href={contactInfo.social.instagram} aria-label="Instagram" className="text-secondary hover:text-primary">
              <FaInstagram size={20} />
            </a>
            <a href={contactInfo.social.whatsapp} aria-label="WhatsApp" className="text-secondary hover:text-primary">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
