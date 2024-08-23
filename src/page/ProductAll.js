import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // UI에 보여주는것은 useState에 저장
  const [productsList, setProductsList] = useState([]);
  // search keyword
  const [query] = useSearchParams();

  const getProducts = async () => {
    // q로 시작되는 아이템을 searchQuery에 저장
    let searchQuery = query.get('q') || '';
    console.log('searchQuery', searchQuery);

    // let url = `http://localhost:4000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/sweetyamy/InnerRadiance.git/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log('data', data);

    setProductsList(data);
  };
  // useEffect for data
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
