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

  function sortAndSelectObjects(array: any[], capacity: number) {
    const sortedArray = array.sort((a, b) => b.value - a.value);
    let totalWeight = 0;
    const selectedObjects = [];
    const process = [];

    for (const obj of sortedArray) {
      if (totalWeight + obj.weight <= capacity) {
        selectedObjects.push(obj);
        totalWeight += obj.weight;
        process.push({
          selectedObject: obj,
          totalWeight: totalWeight,
        });
      } else {
        break;
      }
    }

    return { selectedObjects, process };
  }

  const { selectedObjects, process } = sortAndSelectObjects(objects, capacity);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Selected Objects</h2>
      <div className="flex mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Table</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Value</th>
                <th className="border border-gray-400 px-4 py-2">Weight</th>
              </tr>
            </thead>
            <tbody>
              {selectedObjects.map((obj, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {obj.value}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {obj.weight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1 ml-4">
          <h3 className="text-lg font-semibold">Process</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Step</th>
                <th className="border border-gray-400 px-4 py-2">
                  Selected Object
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Total Weight
                </th>
              </tr>
            </thead>
            <tbody>
              {process.map((step, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{`Value: ${step.selectedObject.value}, Weight: ${step.selectedObject.weight}`}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    {step.totalWeight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GreedySortM3;
