'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';
const services = [
  {
    category: 'Heavy Equipment',
    title: 'Crane Operation Training',
    description:
      'Master safe crane handling practices, load balancing, and equipment checks to ensure accident-free operations.',
  },
  {
    category: 'Logistics Planning',
    title: 'Forklift Certification',
    description:
      'Get certified in forklift operations and comply with national safety standards for industrial environments.',
  },
  {
    category: 'Maintenance',
    title: 'Hoist & Lift Systems Consulting',
    description:
      'Receive expert advice on maintaining and troubleshooting mechanical hoist systems used in construction and forestry.',
  },
  {
    category: 'Project Support',
    title: 'Material Handling Optimization',
    description:
      'Learn how to maximize efficiency in moving and organizing construction materials on site.',
  },
  {
    category: 'Safety Training',
    title: 'Excavator Operation Course',
    description:
      'Detailed instructions on using excavators in mining, forestry, and urban work environments with a safety-first focus.',
  },
  {
    category: 'Field Strategy',
    title: 'Equipment Rental Planning',
    description:
      'Learn how to choose, lease, and manage heavy lifting equipment for short or long-term projects.',
  },
];
const ServicesSection = () => {
  return (
    <>
      <section
        id='consulting'
        className='bg-white text-black py-16 px-6 md:px-20'
      >
        <div className='grid md:grid-cols-2 gap-6'>
          {dataSite.info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white border border-gray-200 rounded-lg shadow-md p-6'
            >
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className='bg-[#f9f9f9] py-20 px-6 text-center'>
        <p className='text-sm text-gray-500 mb-2'>Services</p>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
          How We Can Help
        </h2>
        <p className='text-gray-600 max-w-xl mx-auto mb-12'>
          We offer a comprehensive range of training and consulting services
          tailored for professionals in the heavy equipment rental sector.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className='bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm rounded-xl p-6 text-left'
            >
              <p className='border border-orange-500 text-orange-600 hover:text-white hover:border-white rounded-full text-sm font-medium px-3 py-1 inline-block mb-4'>
                {item.category}
              </p>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm leading-relaxed'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
