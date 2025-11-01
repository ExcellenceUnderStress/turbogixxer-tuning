import React from 'react';
import Link from 'next/link';
import ProductCard, { ProductCardProps } from './ProductCard';

export interface MerchSectionProps {
  title?: string;
  subtitle?: string;
  products: ProductCardProps[];
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const MerchSection: React.FC<MerchSectionProps> = ({
  title = 'Built. Tested. Represented.',
  subtitle = 'Turbogixxer gear reflects the same standard as the cars that wear the sticker—clean, functional, and earned.',
  products,
  showButton = true,
  buttonText = 'Shop Turbogixxer Gear',
  buttonLink = '/merch',
  className = ''
}) => {
  return (
    <section className={`py-24 bg-[#101518] ${className}`}>
      <div className="container mx-auto px-8 max-w-[1280px]">
        <h2 className="text-white text-4xl font-semibold mb-4 text-center">{title}</h2>
        <p className="text-gray-400 text-xl text-center mb-12">{subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
        
        {showButton && (
          <div className="text-center">
            <Link 
              href={buttonLink} 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition inline-block"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MerchSection;
