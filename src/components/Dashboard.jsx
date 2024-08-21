// src/components/Dashboard.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import SearchBar from './SearchBar';
import { addCategory } from '../store/actions';

function Dashboard() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    const categoryName = prompt('Enter category name:');
    const newCategory = {
      id: `c${Date.now()}`,
      name: categoryName,
      widgets: []
    };
    dispatch(addCategory(newCategory));
  };

  return (
    <div className="dashboard">
      <div className='navbar'>
      <h2>My Dashboard</h2>
      <SearchBar />
      <button onClick={handleAddCategory}>+ Add Category</button>
      </div>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Dashboard;
