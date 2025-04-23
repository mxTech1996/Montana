import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatWeOffer() {
  return (
    <section
      id='about'
      className='py-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'
    >
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='lg:w-1/2'
      >
        <p className='text-gray-400 text-sm mb-2'>About us / Who we are</p>
        <h2 className='text-4xl font-bold text-[#0a1b3e] mb-6'>
          What We Offer
        </h2>
        <p className='text-gray-500 text-lg mb-8'>
          We offer training and consulting services focused on material handling
          equipment rentals for lifting, moving, and placing heavy loads. Our
          goal is to help companies improve operational safety, reduce downtime,
          and choose the right machinery for each job.
        </p>
        {/* <button className='border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transition'>
          Learn More →
        </button> */}
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='relative lg:w-1/2'
      >
        <div className='absolute top-5 left-5 w-full h-full bg-orange-600 rounded-xl -z-10' />
        <Image
          src={dataSite.image_hero2}
          alt='Equipment training'
          width={600}
          height={400}
          className='rounded-xl shadow-lg'
        />
      </motion.div>
    </section>
  );
}
