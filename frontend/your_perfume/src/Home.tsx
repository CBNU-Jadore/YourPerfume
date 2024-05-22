import React, { useState } from 'react';
import './Home.css';
import Slider from './Slider'; // Slider 컴포넌트를 import합니다.
import { useNavigate } from "react-router-dom";

function Home() {
  const [slides] = useState([
    { image: "/images/diol.jpeg", alt: "사진1 설명" },
    { image: "/images/blanche.jpeg", alt: "사진2 설명" },
    { image: "/images/chanel.jpeg", alt: "사진3 설명" },
    { image: "/images/forment.jpeg", alt: "사진4 설명" },
    { image: "/images/YSL.jpeg", alt: "사진5 설명" },
    { image: "/images/gucci.jpeg", alt: "사진6 설명" },
    { image: "/images/versace.jpeg", alt: "사진7 설명" },
    { image: "/images/maison.jpeg", alt: "사진8 설명" }
  ]);

  const navigate = useNavigate();

  function goToSearchPage() {
    navigate('/SearchPage');
  }

  return (
    <div className="container">
      <div className="rectangle">
        <div className="text7">미스 디올 블루밍 부케</div>
        <div className="text8">당신의 봄을 위하여</div>
      </div>
      <div className="text1">Your Perfume</div>
      <div className="text2">마이페이지</div>
      <div className="text3">Unique</div>
      <div className="text4" onClick={goToSearchPage}>검색</div>
      <div className="text5">메뉴</div>
      <div className="text6">홈</div>
      <div className="text9">상품</div>
      {/* Slider 컴포넌트를 사용합니다. */}
      <Slider slides={slides} />
      {/* diol 이미지를 클릭하면 Product 페이지로 이동하는 Link를 추가합니다. */}
      
    </div>
  );
}

export default Home;
