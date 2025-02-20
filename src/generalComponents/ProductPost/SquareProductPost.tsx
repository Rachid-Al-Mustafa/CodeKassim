// SqaureProductPost/SqaureProductPost.tsx
import React from 'react';
import { Card, Tag } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { ProductPostProps } from '../../modals/product.model';

const SqaureProductPost: React.FC<ProductPostProps> = ({
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
      className="w-full aspect-square rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 overflow-hidden"
      cover={
        imageUrl ? (
          <div className="w-full aspect-square overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center rounded-t-2xl"
            />
          </div>
        ) : (
          <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-t-2xl">
            <PictureOutlined className="text-6xl text-gray-400" />
          </div>
        )
      }
    >
      <div className="flex flex-col gap-3 p-3">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight truncate">{name}</h2>
        <Tag color="blue" className="text-sm font-medium w-fit">{category}</Tag>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-green-600">
            {currency}{price ? price.toFixed(2) : '0.00'}
          </span>
          <AddToCartButton disabled={!isAvailable} onClick={onAddToCart} />
        </div>
      </div>
    </Card>
  );
};

export default SqaureProductPost;