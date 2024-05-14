import React from "react";

type Props = {};

const GreedySortM3 = (props: Props) => {
  const objects = [
    { value: 4, weight: 14 },
    { value: 7, weight: 10 },
    { value: 8, weight: 5 },
    // Add more objects as needed
  ];

  const capacity = 15;

  function sortAndSelectObjects(array, capacity) {
    // Sort the array of objects by value in descending order
    const sortedArray = array.sort((a, b) => b.value - a.value);

    let totalWeight = 0;
    const selectedObjects = [];

    // Iterate through the sorted array and select objects until capacity is reached
    for (const obj of sortedArray) {
      if (totalWeight + obj.weight <= capacity) {
        selectedObjects.push(obj);
        totalWeight += obj.weight;
      } else {
        // If adding the current object exceeds capacity, break the loop
        break;
      }
    }

    return selectedObjects;
  }

  const selectedObjects = sortAndSelectObjects(objects, capacity);

  return (
    <div>
      <h2>Selected Objects</h2>
      <ul>
        {selectedObjects.map((obj, index) => (
          <li key={index}>{`Value: ${obj.value}, Weight: ${obj.weight}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default GreedySortM3;
