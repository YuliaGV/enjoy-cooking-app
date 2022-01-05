import React from 'react';
import { Navigation } from '../components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import {FoodDetail} from '../components/FoodDetail';
import {CategoryDetail} from '../components/CategoryDetail';
import {Categories} from '../components/Categories';
import {About} from '../components/About';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:name" element={<CategoryDetail />} />



          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;