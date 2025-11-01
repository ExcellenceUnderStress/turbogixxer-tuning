import React from 'react';
import Link from 'next/link';

export interface ProductCardProps {
  name: string;
  description: string;
  price: string | number;
  image?: string;
  link?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  link = '/merch'
}) => {
  const formattedPrice = typeof price === 'number' ? `$${price}` : price;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-teal-500 transition">
      <div className="aspect-square bg-gray-700 flex items-center justify-center text-gray-500">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          '[Product Photo]'
        )}
      </div>
      <div className="p-6">
        <h3 className="text-white font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-teal-400 font-bold">{formattedPrice}</p>
          {link && (
            <Link
              href={link}
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition"
            >
              Learn More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
