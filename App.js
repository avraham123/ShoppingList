import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ShoppingList from './ShoppingList';
import TotalItems from './TotalItems';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingList />
        <TotalItems />
      </div>
    </Provider>
  );
}

export default App;
