import React from 'react';

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <div className="my-component">
      <p className="my-component-text">{text}</p>
    </div>
  );
};

export default MyComponent; 
