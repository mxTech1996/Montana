import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = dataSite.products;
export default function ProductsSection() {
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  return (
    <section id='products' className='bg-orange-500 text-white py-16 px-40'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-4xl font-bold'>Latest Courses</h2>
        {/* <a
          href='#'
          className='text-white border-b border-white hover:text-orange-200 transition'
        >
          Discover More →
        </a> */}
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {products.map((product, index) => {
          const isInCart = validateProductInCart(product.id);
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-white text-black rounded shadow-lg overflow-hidden'
            >
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className='w-full h-56 object-cover'
              />
              <div className='p-4'>
                <p className='text-sm text-orange-500 font-medium mb-1'>
                  $ {product.price} MXN
                </p>
                <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
                <p className='text-sm text-gray-600 mb-4'>
                  {product.description}
                </p>
                <button
                  onClick={(e) => {
                    handleAddOrRemoveProduct(product.id);
                  }}
                  className={`${
                    isInCart
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white font-medium px-4 py-2 underline rounded transition`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
