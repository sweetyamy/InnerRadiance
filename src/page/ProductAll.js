import React, { useEffect, useState, useCallback } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // UI에 보여주는것은 useState에 저장
  const [productsList, setProductsList] = useState([]);
  // search keyword
  const [query] = useSearchParams();

  // Wrap in useCallback and include query as dependency
  const getProducts = useCallback(async () => {
    try {
      let keyword = query.get('q') || '';
      console.log('keyword', keyword);
      // let url = `http://localhost:4000/products?q=${keyword}`;
      let url = `https://my-json-server.typicode.com/sweetyamy/InnerRadiance.git/products?q=${keyword}`;
      let res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      let data = await res.json();
      console.log('data', data);

      // 서버측 쿼리문 미작동으로 프론트 단에서 쿼리 기능 구현
      const filteredData = keyword
        ? data.filter((item) => item.title.includes(keyword))
        : data;
      console.log('Filtered:', filteredData);

      if (filteredData.length === 0) {
        alert('검색결과가 없습니다.\n메인페이지로 돌아갑니다.');
        return;
      }

      setProductsList(filteredData);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }, [query]); // Now it will not change on every render

  useEffect(() => {
    getProducts();
  }, [getProducts]); // Now it will not change on every render

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
