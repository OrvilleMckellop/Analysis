import React, { useEffect, useState } from "react";

interface Props {
  values: number[];
  weights: number[];
  capacity: number;
  onSortAndSelect: (sortAndSelect: () => void) => void;
}

interface Object {
  value: number;
  weight: number;
}

interface ProcessStep {
  selectedObject: Object;
  totalWeight: number;
}

const GreedySortM3: React.FC<Props> = ({
  values,
  weights,
  capacity,
  onSortAndSelect,
}) => {
  const [selectedObjects, setSelectedObjects] = useState<Object[]>([]);
  const [process, setProcess] = useState<ProcessStep[]>([]);

  const objects: Object[] = values.map((value, index) => ({
    value,
    weight: weights[index],
  }));

  function sortAndSelectObjects() {
    const sortedArray = objects.sort((a, b) => b.value - a.value);
    let totalWeight = 0;
    const selectedObjects: Object[] = [];
    const process: ProcessStep[] = [];

    for (const obj of sortedArray) {
      if (totalWeight + obj.weight <= capacity) {
        selectedObjects.push(obj);
        totalWeight += obj.weight;
        process.push({
          selectedObject: obj,
          totalWeight,
        });
      } else {
        break;
      }
    }

    setSelectedObjects(selectedObjects);
    setProcess(process);
  }

  useEffect(() => {
    if (onSortAndSelect) {
      onSortAndSelect(sortAndSelectObjects);
    }
  }, [onSortAndSelect]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Greedy Alogrithmn</h2>
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
