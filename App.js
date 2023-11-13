// App.js
import React from 'react';
import './App.css';
import ShoppingList from './ShoppingList';
import TotalItems from './TotalItems';

function App() {
  return (
    <div className="App">
      
      <TotalItems /> {/* Display total items here */}
      <ShoppingList />
    </div>
  );
}

export default App;
