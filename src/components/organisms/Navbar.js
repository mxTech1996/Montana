'use client';

import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';

const Navbar = () => {
  const { products } = useCart();
  return (
    <nav className='flex justify-between items-center px-6 md:px-12 py-4 bg-transparent z-50 relative'>
      <div className='text-lg font-bold'>Montana</div>
      <ul className='hidden md:flex gap-6 text-sm'>
        <li>
          <a href='/#products' className='hover:text-orange-400'>
            Products
          </a>
        </li>
        <li>
          <a href='/#consulting' className='hover:text-orange-400'>
            Consulting
          </a>
        </li>
        <li>
          <a href='/#about' className='hover:text-orange-400'>
            About
          </a>
        </li>
        <li>
          <a href='/more-information' className='hover:text-orange-400'>
            Contact
          </a>
        </li>
      </ul>
      <Link href='/my-cart'>
        <button className='text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold'>
          My Cart
          <span className='ml-2 text-white'>{products.length} </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
