import React, { useState, useEffect } from "react";
import {
  bubbleSort,
  generateRandomArray,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../Utils/Functions";

const Module1: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [runTime, setRunTime] = useState<number | null>(null);
  const [dataset, setdataset] = useState<number>(10);
  const [sortingType, setsortingType] = useState<number>(1);

  useEffect(() => {
    setArray(generateRandomArray(dataset)); // Generate initial random array
  }, []);

  // Function to handle generating a new random array
  const handleGenerateNewArray = (e?) => {
    setArray(generateRandomArray(dataset)); // Generate a new random array with length 10
    setRunTime(null); // Reset run time
  };

  const handleSortingType = async (selectedValue: number) => {
    setsortingType(selectedValue);
  };

  const handleSorting = async () => {
    switch (sortingType) {
      case 1:
        await bubbleSort([...array], setArray, setIsSorting, setRunTime);
        break;

      case 2:
        await quickSort([...array], setArray, setIsSorting, setRunTime);
        break;
      case 3:
        await selectionSort([...array], setArray, setIsSorting, setRunTime);
        break;
      case 4:
        await heapSort([...array], setArray, setIsSorting, setRunTime);
        break;
      case 5:
        await insertionSort([...array], setArray, setIsSorting, setRunTime);
        break;
      case 6:
        await mergeSort([...array], setArray, setIsSorting, setRunTime);
        break;

      default:
        break;
    }
  };

  const handleChange = async (selectedValue: number) => {
    await setdataset(selectedValue);
    const newArray = generateRandomArray(selectedValue);
    setArray(newArray);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-3xl font-bold">Module 1</h1>
      <div className="overflow-x-auto w-full">
        <div
          className="flex items-end border-2 border-gray-300 p-4"
          style={{ height: "550px" }}
        >
          {array.map((value, index) => (
            <div
              key={index}
              className="bar bg-blue-500 mx-0.5 flex justify-center items-end"
              style={{ height: `${value <= 0 ? 2 : value * 5}px` }}
            >
              <span className="text-white text-xs mb-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {runTime !== null && (
        <div className="mt-4 text-gray-700">
          Total Run Time: {(runTime / 1000).toFixed(2)} seconds
        </div>
      )}
      <div className="flex gap-4 pt-4 items-center justify-center">
        {isSorting ? (
          "Sorting..."
        ) : (
          <div className="flex flex-col disabled:opacity-50 mr-4">
            <label htmlFor="">Data Set</label>
            <select
              onChange={(e) => handleChange(Number(e.target.value))}
              disabled={isSorting}
            >
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={1000}>1,000</option>
              <option value={10000}>10,000</option>
              <option value={50000}>50,000</option>
              <option value={100000}>100,000</option>
            </select>
          </div>
        )}
        <div>
          <button
            disabled={isSorting}
            onClick={handleGenerateNewArray}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 mr-4"
          >
            {isSorting ? "Sorting..." : "Generate New Array"}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <select
            disabled={isSorting}
            onChange={(e) => handleSortingType(Number(e.target.value))}
          >
            <option value={1}>Bubble Sort</option>
            <option value={2}>Quick Sort</option>
            <option value={3}>Selection Sort</option>
            <option value={4}>Heap Sort</option>
            <option value={5}>Insert Sort</option>
            <option value={6}>Merge Sort</option>
          </select>
          <button
            onClick={handleSorting}
            disabled={isSorting}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 mr-4"
          >
            {isSorting ? "Sorting..." : "Start Sort"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Module1;
