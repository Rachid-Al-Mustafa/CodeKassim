// ProductPost/ProductPost.tsx
import React from 'react';
import { Card, Tag } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { ProductPostProps } from '../../modals/product.model';


const ProductPost: React.FC<ProductPostProps> = ({
  name = 'Unnamed Product',
  description = 'No description available.',
  price = 0,
  currency = '$',
  category = 'General',
  imageUrl = '',
  isAvailable = true,
  onAddToCart = () => {},
}) => {
  return (
    <Card
      className="w-full rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 overflow-hidden"
      cover={
        imageUrl ? (
          <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
            <img
              alt={name}
              src={imageUrl}
              className="w-full h-full object-cover object-center rounded-t-3xl"
            />
          </div>
        ) : (
          <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-3xl">
            <PictureOutlined className="text-6xl text-gray-400" />
          </div>
        )
      }
    >
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug truncate">{name}</h2>
        <Tag color="geekblue" className="text-xs sm:text-sm font-medium px-2 py-1 rounded-lg w-fit">{category}</Tag>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg sm:text-xl font-bold text-green-600">
            {currency}{price ? price.toFixed(2) : '0.00'}
          </span>
          <AddToCartButton disabled={!isAvailable} onClick={onAddToCart} />
        </div>
      </div>
    </Card>
  );
};

export default ProductPost;