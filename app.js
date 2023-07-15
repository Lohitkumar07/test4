import React from 'react';

const ParentComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ChildComponent message={props.message} />
    </div>
  );
};

const ChildComponent = (props) => {
  return (
    <p>{props.message}</p>
  );
};

export default ParentComponent;
