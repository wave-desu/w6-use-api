import React, { useEffect, useState } from 'react'
import { Card, Image, Row, Col } from 'antd';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, [])
  return (
    <div>
      <h1>API Date</h1>
      <Row getter={[20, 20]}>
        {data.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card key={index} title={item.title}>
                <Image src={item.images[0]} />
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App