import React from 'react';
import { useSelector } from 'react-redux';

function TotalItems() {
  const totalItems = useSelector((state) => state.shoppingList.items.length);

  return (
    <div>
      <h2>Total Items</h2>
      <p>Total items in the shopping list: {totalItems}</p>
    </div>
  );
}

export default TotalItems;
