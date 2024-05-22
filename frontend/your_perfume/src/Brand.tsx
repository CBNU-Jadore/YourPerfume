import React, { useRef, useState } from 'react';
import './Brand.css';
import { Link, useNavigate } from 'react-router-dom';

const brands = [
    "디올", "샤넬", "메종", "구찌", "포맨트"
  ];

const Brand = () => {
    
    const [showBrands, setShowBrands] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  function goToSearchPage() {
    navigate('/SearchPage');
  }

  function goToHomePage() {
    navigate('/'); // '/' 경로로 이동합니다.
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
      <div className="rectangle2">
      </div>
      <div className="text1">Your Perfume</div>
      <div className="text2">마이페이지</div>
      <div className="text3">Unique</div>
      <div className="text4" onClick={goToSearchPage}>검색</div>
      <div className="text5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        메뉴
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
      <div className="text6" onClick={goToHomePage}>홈</div>
      <div className="text9">대표 상품</div>
      <div className="brand_image-container1">
        <div className="brand-product_image1">
        <Link to="/product">
            <img src="https://shop.dior.co.kr/cdn/shop/products/3348901571432_0.jpg?crop=center&height=1000&v=1663826265&width=1500" alt="디올 오 드 퍼퓸" />
          </Link>
          </div>
        <div className="brand-product_image2">
        <img src="https://shop.dior.co.kr/cdn/shop/products/3348901664653_0.jpg?v=1689732806&width=2250" alt="쟈도르 로르" />    </div>
        <div className="brand-product_image3">
        <img src="https://shop.dior.co.kr/cdn/shop/products/3348900417878_0.jpg?v=1666143588&width=2250" alt="쟈도르 오 드 퍼퓸" /></div>       
      </div>
      <div className="brand-product_name-container1">
        <div className="brand-product_name2-1">디올 오 드 퍼퓸</div>
        <div className="brand-product_name2-2">쟈도르 로르</div>
        <div className="brand-product_name2-3">쟈도르 오 드 퍼퓸</div>
      </div>
      </div>
    
    
      );
}

export default Brand;
