'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className='bg-[#013b3d] text-white py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center'>
      <div className='flex flex-col gap-4'>
        {testimonials.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-lg px-6 py-4 flex items-center gap-4 transition-all border w-full text-left ${
              activeIndex === idx
                ? 'bg-[#dd4a22] border-[#dd4a22] text-white'
                : 'border-white/30 hover:bg-white/10'
            }`}
          >
            {item.image ? (
              <Image
                src={item.image}
                width={50}
                height={50}
                className='rounded-full'
                alt={item.name}
              />
            ) : (
              <div className='w-12 h-12 rounded-full bg-white text-[#dd4a22] flex items-center justify-center font-bold text-lg'>
                {item.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}
            <div>
              <p className='font-semibold text-lg'>{item.name}</p>
              <p className='text-sm opacity-80'>{item.role}</p>
            </div>
          </button>
        ))}
      </div>

      <div>
        <h3 className='text-white text-xl font-semibold mb-4'>Testimonials</h3>
        <AnimatePresence mode='wait'>
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className='text-xl font-light'
          >
            “ {active.description} ”
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
