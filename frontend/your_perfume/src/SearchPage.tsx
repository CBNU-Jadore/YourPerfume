import React, { useState } from 'react';
import './topbar.css';
import './SearchPage.css';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  function goToHomePage() {
    navigate('/');
  }

  function handleSearchChange(event: { target: { value: React.SetStateAction<string> } }) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const imagePath = getSearchResultImagePath();
    setSearchResult(imagePath);
  }

  function getSearchResultImagePath() {
    if (searchTerm.toLowerCase() === '샤넬') {
      return '/images/chanel.jpeg';
    }
    if (searchTerm.toLowerCase() === '디올') {
      return '/images/diol.jpeg';
    }
    return '/images/default.jpeg';
  }

  // Handle image click to navigate to product page
  function handleImageClick() {
    if (searchResult === '/images/diol.jpeg') {
      navigate('/product');
    }
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
      <div className="text4">검색</div>
      <div className="text5">메뉴</div>
      <div className="text6" onClick={goToHomePage}>홈</div>
      
      {/* 검색 창과 검색 버튼 */}
      <form onSubmit={handleSearchSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어 입력"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ fontWeight: 'normal', fontSize: '20px' }} 
          />
          <button type="submit" className="search-button"></button>
        </div>
      </form>

      {/* 검색 결과 이미지 */}
      {searchResult && (
        <div className="search-result" onClick={handleImageClick}>
          <img src={searchResult} alt="검색 결과 이미지" />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
