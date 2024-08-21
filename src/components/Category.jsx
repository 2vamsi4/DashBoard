// src/components/Category.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import Modal from './Modal';  // Import the Modal component
import { addWidget, removeCategory } from '../store/actions';

function Category({ category }) {
  const dispatch = useDispatch();
  const [showAddWidgetForm, setShowAddWidgetForm] = useState(false);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    const newWidget = {
      id: `w${Date.now()}`,
      name: widgetName,
      text: widgetText
    };
    dispatch(addWidget(category.id, newWidget));
    setWidgetName('');
    setWidgetText('');
    setShowAddWidgetForm(false);
  };

  return (
    <>
    <div className="head">
      <h2>{category.name}</h2>
      <button id="remove" onClick={() => dispatch(removeCategory(category.id))}>✖ Remove Category</button>
    </div>
    <div className="category">
      {showAddWidgetForm && (
        <Modal onClose={() => setShowAddWidgetForm(false)}>
          <div className="form">
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Widget Name"
            />
            <input
              type="text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              placeholder="Widget Text"
            />
            <button onClick={handleAddWidget}>Add Widget</button>
            <button onClick={() => setShowAddWidgetForm(false)}>Cancel</button>
          </div>
        </Modal>
      )}
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      <button id="add" onClick={() => setShowAddWidgetForm(true)}>+ Add Widget</button>
    </div>
    </>
  );
}

export default Category;
