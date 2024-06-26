import React, { useRef, useState } from "react";
import GreedySortM3 from "../components/GreedySortM3.tsx";

interface Vehicle {
  value: number;
  weight: number;
}

const Module3 = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [capacityC, setCapacityC] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [newVehicleValue, setNewVehicleValue] = useState<number>(0);
  const [newVehicleWeight, setNewVehicleWeight] = useState<number>(0);

  const triggerSortAndSelect = useRef<() => void>(() => {});

  const handleChangeCapacityC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapacityC(parseInt(e.target.value));
  };

  const handleAddVehicle = () => {
    if (newVehicleValue !== 0 && newVehicleWeight !== 0) {
      setVehicles([
        ...vehicles,
        { value: newVehicleValue, weight: newVehicleWeight },
      ]);
      setNewVehicleValue(0);
      setNewVehicleWeight(0);
    }
  };

  const handleSortAndSelectSetup = (sortAndSelect: () => void) => {
    triggerSortAndSelect.current = sortAndSelect;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerSortAndSelect.current(); // Call the sort and select function
    const weights: number[] = vehicles.map((vehicle) => vehicle.weight);
    const values: number[] = vehicles.map((vehicle) => vehicle.value);
    const capacity: number = capacityC !== null ? capacityC : 0;
    setResult(valueBasedTraffic(weights, values, capacity));
  };

  const valueBasedTraffic = (
    weights: number[],
    values: number[],
    capacity: number
  ): number => {
    const n = weights.length;
    let totalValue = 0;
    let totalWeight = 0;

    for (let i = 0; i < n; i++) {
      if (totalWeight + weights[i] <= capacity) {
        totalValue += values[i];
        totalWeight += weights[i];
      } else {
        break;
      }
    }

    return totalValue;
  };

  return (
    <div className="grid grid-cols-2">
      <section className="border-r-slate-500 border-r-4 col-span-2 flex justify-center">
        <section className="block max-w-sm p-6 bg-green-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vehicular Traffic Optimization
          </h5>

          <form
            onSubmit={handleSubmit}
            className="flex gap-4 font-normal text-gray-700 dark:text-gray-400"
          >
            <label>
              Capacity of Road weight:
              <input
                type="number"
                value={capacityC}
                onChange={handleChangeCapacityC}
              />
            </label>
            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg p-2"
            >
              Optimize Traffic
            </button>
          </form>
        </section>
        <section className="block max-w-sm p-6 bg-green-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Add Vehicle
          </h5>

          <div className="grid grid-cols-2 gap-2 ">
            <label>Value:</label>
            <input
              className=" col-span-2"
              type="number"
              value={newVehicleValue}
              onChange={(e) => setNewVehicleValue(parseInt(e.target.value))}
            />
            <label>Weight:</label>
            <input
              type="number"
              value={newVehicleWeight}
              onChange={(e) => setNewVehicleWeight(parseInt(e.target.value))}
              className=" col-span-2"
            />
            <button
              onClick={handleAddVehicle}
              className=" col-span-2 bg-green-600 text-white"
            >
              Add Vehicle
            </button>
          </div>
        </section>

        <section className="block max-w-sm p-6 bg-green-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-4">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vehicles
          </h2>
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {vehicles.map((vehicle, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <strong>Vehicle {index + 1}</strong>
                <span>
                  Value: {vehicle.value}, Weight: {vehicle.weight}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className=" border-r-slate-500 border-r-4">
        <h2 className="m-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Knapsack Algorithm
        </h2>

        {result !== null && (
          <div className="m-4">
            <p>
              Maximum traffic flow for road weight is <strong>{result}</strong>
            </p>
            <KnapsackGrid
              weights={vehicles.map((vehicle) => vehicle.weight)}
              values={vehicles.map((vehicle) => vehicle.value)}
              capacity={capacityC}
            />
          </div>
        )}
      </section>

      <section>
        <GreedySortM3
          values={vehicles.map((vehicle) => vehicle.value)}
          weights={vehicles.map((vehicle) => vehicle.weight)}
          capacity={capacityC}
          onSortAndSelect={handleSortAndSelectSetup}
        />
      </section>
    </div>
  );
};

const KnapsackGrid = ({ weights, values, capacity }) => {
  const n = weights.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return (
    <div className="overflow-x-auto m-4">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Weight \ Capacity</th>
            {Array.from({ length: capacity }, (_, index) => (
              <th key={index} className="border border-gray-400 p-2">
                {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dp.map((row, i) => (
            <tr key={i}>
              <td className="border border-gray-400 p-2">{i}</td>
              {row.map((cell, j) => (
                <td key={`${i}-${j}`} className="border border-gray-400 p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Module3;
