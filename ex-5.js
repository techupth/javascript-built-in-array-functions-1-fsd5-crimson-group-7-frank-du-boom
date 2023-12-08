const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator,students) {
  // Start coding here
  return accumulator + students.score ;
} 

let totalValue = students.reduce(getAverageStudentScore, 0)
let avgValue = totalValue/(4);
console.log(avgValue) // Output: 87.5
