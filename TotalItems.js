// totalitems.js
import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {
  const totalItems = useSelector((state) => state.shoppingList.totalItems);

  
};

export default TotalItems;
