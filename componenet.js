import React from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <div>
      <ParentComponent title="My Parent Component" message="Hello from Child Component!" />
    </div>
  );
};

export default App;
