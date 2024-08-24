import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // UI에 보여주는것은 useState에 저장
  const [productsList, setProductsList] = useState([]);
  // search keyword
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      let keyword = query.get('q') || '';
      console.log('keyword', keyword);
      let url = `http://localhost:4000/products?q=${keyword}`;
      // let url = `https://my-json-server.typicode.com/sweetyamy/InnerRadiance.git/products?q=${searchQuery}`;
      let res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      let data = await res.json();
      console.log('data', data);

      setProductsList(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }; // Wrap in useCallback and include query as dependency

  useEffect(() => {
    getProducts();
  }, [query]); // Now it will not change on every render

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
