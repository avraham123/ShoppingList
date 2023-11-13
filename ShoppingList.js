import React, { useState } from 'react';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([
    'Fruit and Vegetables',
    'Cleaning Products',
    'Pastries',
    'Cheese',
    'Meat and Fish',
  ]);

  const handleAddItem = () => {
    if (newItemName && selectedCategory) {
      const newItem = { name: newItemName, category: selectedCategory };
      setItems((prevItems) => [...prevItems, newItem]);

      if (!categories.includes(selectedCategory)) {
        setCategories((prevCategories) => [...prevCategories, selectedCategory]);
      }

      setNewItemName('');
    }
  };

  const getItemCount = (category, itemName) => {
    return items.filter((item) => item.category === category && item.name === itemName).length;
  };

  const handleRemoveItem = (category, itemName) => {
    const indexToRemove = items.findIndex(
      (item) => item.category === category && item.name === itemName
    );

    if (indexToRemove !== -1) {
      items.splice(indexToRemove, 1);
      setItems([...items]);
    }
  };

  const getTotalItemCount = () => {
    return items.length;
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <p>Total Items: {getTotalItemCount()}</p>
      <div>
        <label>
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Fruit and Vegetables">Fruit and Vegetables</option>
            <option value="Cleaning Products">Cleaning Products</option>
            <option value="Pastries">Pastries</option>
            <option value="Cheese">Cheese</option>
            <option value="Meat and Fish">Meat and Fish</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Item:
          <input
            type="text"
            placeholder="Type your item here"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </label>
      </div>
      <button className='additem' onClick={handleAddItem}>Add Item</button>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category}</h3>
            <ul>
              {items
                .filter((item) => item.category === category)
                .map((item) => item.name)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((itemName) => (
                  <li key={itemName}>
                    {itemName} ({getItemCount(category, itemName)})
                    <button onClick={() => handleRemoveItem(category, itemName)}>Remove</button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
