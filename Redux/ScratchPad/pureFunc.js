//Demonstrating core Redux Concepts
import React from 'react';

//Utilizing slice & spread operator instead of splice, to not tamper with the original state
export const removeItemAtIndex = (list, index) => {  
  return [
 ...list.slice(0, index),
 ...list.slice(index + 1)
  ];
};

export const generateUniqueId = (timestamp, random) => {
  return timestamp + random;
};

const App = () => {
  const result = removeItemAtIndex(['a', 'b', 'c', 'd'], 1);
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const uniqueId = generateUniqueId(timestamp, random);
  
  return (
    <div>
      <h1>Remove Item at Index</h1>
      <p>Output: {result.join(', ')}</p>
      <h1>Unique ID:</h1>
      <p>Output: {uniqueId}</p>
    </div>
  );
};

export default App;