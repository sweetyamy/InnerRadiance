import React from 'react';

function ProductCard({ item }) {
  return (
    <div>
      <img src={item?.img} alt='product images' />
      <div>{item?.choice === true ? 'Conscious Choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? 'New' : ''}</div>
    </div>
  );
}

export default ProductCard;
