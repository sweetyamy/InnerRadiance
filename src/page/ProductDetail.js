import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = useCallback(async () => {
    // let url = `http://localhost:4000/products/${id}`;
    let url = `https://my-json-server.typicode.com/sweetyamy/InnerRadiance/products/${id}`;
    let res = await fetch(url);

    let data = await res.json();
    console.log('data', data);
    setProduct(data);
  }, [id]);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <Container className='product-detail'>
      <Row className='flex-column flex-md-row'>
        <Col>
          <img className='product-detail-img' src={product?.img} alt='' />
        </Col>

        <Col className='product-detail-info'>
          <p>{product?.brand}</p>
          <h2>
            <span className='product-tagline'>[{product?.tagline}]</span>{' '}
            {product?.title}
            {product?.sale && <span className='product-sale-badge'>Sale</span>}
          </h2>
          <p className='product-detail-price'>
            {product?.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'CAN'
            })}
          </p>
          <Button className='btn-add'> + Add Product </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
