function analyzeArray(arr) {
  if (!arr.length) return [];

  const average = arr.reduce((acc, c) => acc + c, 0) / arr.length;

  return {
    average,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export default analyzeArray;
