// src/components/Widget.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/actions';

function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <div>
      <h3>{widget.name}</h3>
      <img style={{height:'100px',width:'200px'}}id="image" src="data:image/png;base64,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" alt="image" />
      </div>
      <div>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>✖ Remove</button>
      </div>
    </div>
  );
}

export default Widget;
