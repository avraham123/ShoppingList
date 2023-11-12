import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './redux/shoppingListSlice';

function ShoppingList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.shoppingList.items);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      dispatch(addItem({ id: Date.now(), name: newItem }));
      setNewItem('');
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <div>
        <input
          type="text"
          placeholder="Add item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
