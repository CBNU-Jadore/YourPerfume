// Product.tsx

import React from 'react';
import './topbar.css';
import './Product.css';
import { useNavigate } from 'react-router-dom';


function Product() {

  const navigate = useNavigate();

  function goToHomePage() {
    navigate('/'); // '/' 경로로 이동합니다.
  }
  return (
    <div className="container1">
      <div className="text1">Your Perfume</div>
      <div className="text2">마이페이지</div>
      <div className="text3">Unique</div>
      <div className="text4">검색</div>
      <div className="text5">메뉴</div>
      <div className="text6" onClick={goToHomePage}>홈</div>

      <div className="product-top-container">
        <div className="product-top-container_left-container">
          <img
            src="https://shop.dior.co.kr/cdn/shop/products/3348901571432_0.jpg?crop=center&height=1000&v=1663826265&width=1500"
            alt="Dior Perfume"
            className="product-image1"
          />
        </div>
        <div className="product-top-container_right-container">
        <div className="product-perfume-name1">미스 디올 오 드 퍼퓸</div>
          <div className="product-perfume-name2">Miss Diol EAU DE</div>
        <div className="product-perfume_description-container">
          <div className="product-perfume-description1">Discription</div>
          <div className="product-perfume-description2">1947년, 미스 디올은 매혹적인 삶과 눈부시게 빛나는 다채로운 사랑에 눈을 뜨고자 하는 여성을 위해 탄생했습니다.암울한 시기를 겪으며, 크리스챤 디올에게 이 향수는 행복과 서정적인 조화를 상징하는 또 다른 표현이었습니다.</div>
          <div className="product-perfume-note1">Note</div>
          <div className="product-perfume-note2">플로럴 부케, 센티폴리아 로즈, 부드러운 우드</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="product-bottom-container">
      <div className="product-bottom-container_name">'미스 디올 오 드 퍼퓸'과 비슷한 향수</div>
      <div className="product-bottom-container_perfume-image">
          <img
            src="/images/chanel.jpeg"
            alt="Chanel Perfume"
            className="product-image2"
          />
    </div>
    <div className="product-bottom-container_perfume-name1">샤넬 넘버5</div>
    <div className="product-bottom-container_perfume-name2">CHANEL</div>
    </div>
    </div>
  );
}

export default Product;
