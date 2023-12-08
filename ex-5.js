const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, currentValue) {
  // Start coding here
  return accumulator + currentValue.score / students.length;
}

let SumAverage = students.reduce(getAverageStudentScore, 0); // Output: 87.5

console.log(SumAverage);
