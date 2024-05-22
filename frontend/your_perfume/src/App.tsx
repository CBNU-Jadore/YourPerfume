import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import SearchPage from './SearchPage.tsx';
import Product from './Product.tsx'; // Product 컴포넌트를 import합니다.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/Product" element={<Product />} /> {/* Product 경로를 추가합니다 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


