import React, { useState, useRef } from 'react';
import './Home.css';
import Slider from './Slider';
import { useNavigate } from "react-router-dom";

const brands = [
  "디올", "샤넬", "메종", "구찌", "포맨트"
];

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

  const [showBrands, setShowBrands] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  function goToSearchPage() {
    navigate('/SearchPage');
  }

  function goToBrandPage() {
    navigate('/Brand');
  }

  const handleMouseEnter = () => {
    timerRef.current = window.setTimeout(() => {
      setShowBrands(true);
    }, 200); // 0.2초 후에 브랜드 목록 표시
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowBrands(false);
  };

  const handleBrandChange = (brand: string) => {
    if (brand === '디올') {
      goToBrandPage();
    } else {
      setSelectedBrands(prevState =>
        prevState.includes(brand)
          ? prevState.filter(b => b !== brand)
          : [...prevState, brand]
      );
    }
  };  
  

  return (
    <div className="container1">
      <div className="rectangle">
        <div className="text7">미스 디올 블루밍 부케</div>
        <div className="text8">당신의 봄을 위하여</div>
      </div>
      <div className="text1">Your Perfume</div>
      <div className="text2">마이페이지</div>
      <div className="text3">Unique</div>
      <div className="text4" onClick={goToSearchPage}>검색</div>
      <div className="text5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      브랜드
        {showBrands && (
          <div className="brand-dropdown">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={`brand-${index}`}>{brand}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text6">홈</div>
      <div className="text9">상품</div>
      <Slider slides={slides} />
    </div>
  );
}

export default Home;


