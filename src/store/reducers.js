// src/store/reducers.js

import { ADD_WIDGET, REMOVE_WIDGET, ADD_CATEGORY, REMOVE_CATEGORY, SEARCH_WIDGETS } from './actions';

const initialState = {
  categories: [
    {
      "id": 1,
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": 1,
          "name": "Widget 1",
          "text": "Random text for Widget 1"
        },
        {
          "id": 2,
          "name": "Widget 2",
          "text": "Random text for Widget 2"
        }
      ]
    },
    {
      "id": 2,
      "name": "CWPP Dashboard",
      "widgets": [
        {
          "id": 1,
          "name": "Widget 1",
          "text": "Random text for Widget 1"
        },
        {
          "id": 2,
          "name": "Widget 2",
          "text": "Random text for Widget 2"
        }
      ]
    },
    {
      "id": 3,
      "name": "Registry Scan",
      "widgets": [
        {
          "id": 1,
          "name": "Widget 1",
          "text": "Random text for Widget 1"
        },
        {
          "id": 2,
          "name": "Widget 2",
          "text": "Random text for Widget 2"
        }
      ]
    }
  ],
  searchQuery: ''
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };

    case SEARCH_WIDGETS:
      return {
        ...state,
        searchQuery: action.payload
      };

    default:
      return state;
  }
};

export default dashboardReducer;
