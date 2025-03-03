// AddToCartButton/AddToCartButton.tsx
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AddToCartButtonProps } from '../../modals/product.model';


const AddToCartButton: React.FC<AddToCartButtonProps> = ({ disabled = false, onClick }) => {
  return (
    <Button
      type="default"
      icon={<ShoppingCartOutlined className="text-white" />} 
      shape="circle"
      size="large"
      disabled={disabled}
      className="bg-green-500 hover:bg-green-600 border-none flex items-center justify-center"
      onClick={onClick}
    />
  );
};

export default AddToCartButton;