import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import SearchPage from './SearchPage.tsx';
import Product from './Product.tsx'; // Product 컴포넌트를 import합니다.
import Brand from './Brand.tsx';
import SurveyPreferScent from './SurveyPreferScent.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/Product" element={<Product />} /> {/* Product 경로를 추가합니다 */}
          <Route path="/Brand" element={<Brand />} />
          <Route path="/Survey/PreferScent" element={<SurveyPreferScent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


