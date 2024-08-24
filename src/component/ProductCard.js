import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div onClick={() => showDetail(item.id)} className='product-card-container'>
      {item?.new === true && <div className='new-badge'>New</div>}
      <img src={item?.img} className='product-img' alt='product images' />
      <div className='product-card-title'>
        {item?.title.length > 14
          ? `${item.title.substring(0, 10)}...`
          : item.title}
      </div>
      <div className='product-card-typography'>
        {item?.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'CAN'
        })}
      </div>
    </div>
  );
};

export default ProductCard;
