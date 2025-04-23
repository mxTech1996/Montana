'use client';
import { footerData } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';

const Footer = () => {
  return (
    <div className='bg-orange-500 text-black'>
      <FooterComponent
        backgroundColor='transparent'
        legal={footerData}
        textColor={'white'}
        onRedirect={(path) => {
          window.open(path, '_blank');
        }}
        visaImage='/images/visaMaster.png'
      />
    </div>
  );
};

export default Footer;
