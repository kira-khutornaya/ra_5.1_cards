import React from 'react';
import Card from './Card';
import Title from './Title';

function Cards() {
  return (
    <div className="App">
      <Card image="https://forloveyou.ru/wp-content/uploads/2021/04/react-1536x864.png">
        <Title link="#0">Card title</Title>

        <p className="Card__text">Some quick example text to build on the card title and make up the bulk of the content.</p>
        <a href="#0" className="btn btn__primary">Go somewhere</a>
      </Card>
      <Card>
        <Title link="#0">Special title treatment</Title>

        <div className="Card-text__container">
          <p className="Card__text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <p className="Card__text">With supporting text below as a natural lead-in to additional content.</p>
        </div>

        <a href="#0" className="Card__link">Link</a>
        <a href="#0" className="Card__link">Second link with long text</a>
      </Card>
    </div>
  );
}

export default Cards;
