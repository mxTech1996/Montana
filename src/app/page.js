'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialSelector from '@/components/organisms/Testimonials';
import WhatWeOffer from '@/components/organisms/WhatWeOffer';
import { dataSite } from '@/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#FCFCFCFF',
      }}
    >
      <Navbar />
      {/* Navbar */}

      {/* Hero */}
      <section
        className='relative h-[90vh] flex flex-col justify-center items-start px-6 md:px-20 bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${dataSite.image_hero})` }}
      >
        <div className='max-w-xl z-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Learn to Operate <br /> and Manage Material Handling Equipment
          </h1>
          <p className='text-gray-300 mb-6'>
            We provide top-tier consulting and specialized training for handling
            cranes, hoists, forklifts, and more.
          </p>
          <div className='flex gap-4'>
            <Link href='#about'>
              <button className='bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200 text-sm'>
                About Us
              </button>
            </Link>
            <Link href='/more-information'>
              <button className='bg-orange-500 text-white font-medium px-4 py-2 rounded hover:bg-orange-600 text-sm'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className='absolute inset-0 bg-black/50 z-0' />
      </section>

      <ServicesSection />
      <ProductsSection />
      {/* CTA */}
      <TestimonialSelector />
      <WhatWeOffer />

      {/* CTA Section */}
      <section className='bg-orange-500 text-white py-16 px-6 md:px-20 rounded-t-[50px]'>
        <div className='max-w-3xl'>
          <h4 className='text-sm uppercase tracking-wide font-medium mb-2'>
            How We Help
          </h4>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {dataSite.subtitle}
          </h2>
          <p className='mb-6 text-sm md:text-base'>{dataSite.description}</p>

          <Link href='/more-information'>
            <button className='bg-white text-orange-500 px-5 py-2 rounded font-semibold text-sm'>
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
