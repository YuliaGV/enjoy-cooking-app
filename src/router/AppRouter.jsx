import React from 'react';
import { Navigation } from '../components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import {FoodDetail} from '../components/FoodDetail';
import {CategoryDetail} from '../components/CategoryDetail';
import {Categories} from '../components/Categories';
import {Places} from '../components/Places';
import {PlaceDetail} from '../components/PlaceDetail';
import {About} from '../components/About';
import {SearchFood } from '../components/SearchFood';

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
            <Route path="/search" element={<SearchFood />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:name" element={<CategoryDetail />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:name" element={<PlaceDetail />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;