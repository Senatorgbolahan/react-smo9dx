import React from 'react';

const Form = ({ handleAddClick, handleSubClick, count }) => {
  return (
    <section>
      <h1 className="mainCircle"> {count}</h1>
      <button onClick={handleAddClick} className="buttonClick">
        +
      </button>
      <button onClick={handleSubClick} className="buttonClick">
        -
      </button>
    </section>
  );
};

export default Form;
