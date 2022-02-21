import './style.css';
import Form from './components/Form';
import { useState } from 'react';
import React from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount((count) => count + 1);
  };

  const handleSubClick = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <Form
        handleAddClick={handleAddClick}
        count={count}
        handleSubClick={handleSubClick}
      />
    </div>
  );
};

export default App;
