import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    // let url = `http://localhost:4000/products/${id}`;
    let url = `https://my-json-server.typicode.com/sweetyamy/InnerRadiance.git/products/${id}`;
    let res = await fetch(url);

    let data = await res.json();
    console.log('data', data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);
  return (
    <Container className='product-detail'>
      <Row>
        <Col>
          <img src={product?.img} alt='' />
        </Col>

        <Col>
          <p>{product?.brand}</p>
          <h2>
            <span className='product-tagline'>[{product?.tagline}]</span>{' '}
            {product?.title}
            {product?.sale && <span className='product-sale-badge'>Sale</span>}
          </h2>
          <div>
            {product?.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'CAN'
            })}
          </div>
          <Button>Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
