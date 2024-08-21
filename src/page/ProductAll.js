import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  // UI에 보여주는것은 useState에 저장
  const [productsList, setProductsList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    let res = await fetch(url);
    let data = await res.json();
    console.log('data', data);

    setProductsList(data);
  };
  // useEffect for data
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
