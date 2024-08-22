import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log('data', data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt='' />
        </Col>

        <Col>
          <h1>{product?.title}</h1>
          <div>
            {product?.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'CAN'
            })}
          </div>
          <div>
            <label for='size'>Size:</label>
            <select id='size' name='size'>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </div>
          <Button>Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
