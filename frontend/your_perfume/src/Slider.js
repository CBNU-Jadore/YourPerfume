import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 import합니다.
import './Home.css';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 4) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 4 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div className='left-arrow' onClick={prevSlide}>&lt;</div>
      <div className='right-arrow' onClick={nextSlide}>&gt;</div>
      <div className='slide-container' style={{ border: '0px solid black' }}>
        {[...Array(4)].map((_, index) => {
          const adjustedIndex = (current + index) % length;
          return (
            <div className='slide active' key={adjustedIndex}>
              {/* Link 컴포넌트를 사용하여 상품 페이지로 이동하도록 설정합니다. */}
              <Link to="/product">
  <img src={slides[adjustedIndex].image} alt={slides[adjustedIndex].alt} className='image' />
</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;

