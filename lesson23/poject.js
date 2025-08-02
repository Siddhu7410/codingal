var students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];

// Function to show student info
function showStudents() {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    console.log("Name: " + student.name + ", Age: " + student.age);
  }
}

// Call the function to display students in the console
showStudents();