// functions.ts
export const generateRandomArray = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

export const bubbleSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    }
  }

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};

export const quickSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  const partition = async (arr: number[], low: number, high: number) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  };

  const quickSortHelper = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pi = partition(arr, low, high);
      await quickSortHelper(arr, low, (await pi) - 1);
      await quickSortHelper(arr, (await pi) + 1, high);
    }
  };

  await quickSortHelper(arr, 0, arr.length - 1);

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};

export const selectionSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  }

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};

export const heapSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  const maxHeapify = async (arr: number[], n: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
      await maxHeapify(arr, n, largest);
    }
  };

  const buildMaxHeap = async (arr: number[]) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await maxHeapify(arr, n, i);
    }
  };

  const heapSortHelper = async (arr: number[]) => {
    const n = arr.length;
    await buildMaxHeap(arr);
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
      await maxHeapify(arr, i, 0);
    }
  };

  await heapSortHelper(arr);

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};

export const insertionSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 1));
  }

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};

export const mergeSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setRunTime: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setIsSorting(true);
  setRunTime(null);

  const startTime = performance.now();

  const merge = async (arr: number[], l: number, m: number, r: number) => {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array<number>(n1); // Specify the type for L
    const R = new Array<number>(n2); // Specify the type for R

    for (let i = 0; i < n1; ++i) {
      L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; ++j) {
      R[j] = arr[m + 1 + j];
    }

    let i = 0,
      j = 0,
      k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  };

  const mergeSortHelper = async (arr: number[], l: number, r: number) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSortHelper(arr, l, m);
      await mergeSortHelper(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
  };

  await mergeSortHelper(arr, 0, arr.length - 1);

  const endTime = performance.now();
  setRunTime(endTime - startTime);
  setIsSorting(false);
};
