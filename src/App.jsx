// App.js

import React, { useState } from 'react';
import Home from './Component/Home';
import Quiz from './Component/Quiz';
import Result from './Component/Result';

const App = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const components = [<Home />, <Quiz />, <Result />];

  const toggleComponent = () => {
    setComponentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>
      {components[componentIndex]}
    </div>
  );
}

export default App;
