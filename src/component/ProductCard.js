import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={showDetail} className='product-card-container'>
      {item?.new === true && <div className='new-badge'>New</div>}
      <img src={item?.img} alt='product images' />
      <div className='product-card-typography'>
        {item?.choice === true ? 'Conscious Choice' : ''}
      </div>
      <div className='product-card-title'>{item?.title}</div>
      <div className='product-card-typography'>{item?.price}</div>
    </div>
  );
};

export default ProductCard;
