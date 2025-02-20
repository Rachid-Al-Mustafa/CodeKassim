// NewProductsPage/NewProductsPage.tsx
import React from 'react';
import { BannerSlider, SquareProductPost } from '../../generalComponents';
import { BannerSlide } from '../../modals/banner.moder';
import { ProductData } from '../../modals/product.model';

const categories = ['Electronics', 'Books', 'Clothing', 'Home', 'Toys', 'Accessories', 'Sports'];
const randomImages = [
  'https://source.unsplash.com/featured/?technology',
  'https://source.unsplash.com/featured/?fashion',
  'https://source.unsplash.com/featured/?home',
  'https://source.unsplash.com/featured/?toys',
  'https://source.unsplash.com/featured/?gadgets',
  'https://source.unsplash.com/featured/?sports',
];

const generateRandomProduct = (): ProductData => {
  const randomPrice = parseFloat((Math.random() * 500 + 10).toFixed(2));
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
  const isAvailable = Math.random() > 0.2;

  return {
    name: `Product ${Math.floor(Math.random() * 1000)}`,
    description: 'Experience the quality and design of our latest product range.',
    price: randomPrice,
    currency: '$',
    category: randomCategory,
    imageUrl: randomImage,
    isAvailable,
  };
};

const slides: BannerSlide[] = [
  { imageUrl: 'https://source.unsplash.com/featured/?sale', title: 'Big Sale - Up to 50% Off!', alt: 'Sale Banner' },
  { imageUrl: 'https://source.unsplash.com/featured/?new', title: 'New Arrivals This Season', alt: 'New Arrivals' },
  { imageUrl: 'https://source.unsplash.com/featured/?fashion', title: 'Trendy Fashion Items', alt: 'Fashion Banner' },
  { imageUrl: 'https://source.unsplash.com/featured/?electronics', title: 'Latest Electronics Deals', alt: 'Electronics Banner' },
];

const NewProductsPage: React.FC = () => {
  const products = Array.from({ length: 8 }, generateRandomProduct);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Banner Slider */}
      <BannerSlider slides={slides} />

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">New Products</h1>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product, index) => (
          <SquareProductPost
            key={index}
            {...product}
            onAddToCart={() => alert(`Added ${product.name} to cart!`)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProductsPage;
