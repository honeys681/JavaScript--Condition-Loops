// Q2. Write a program that grades students based on their marks.
// • If greater than 90 then A Grade
// • If between 70 and 90 then a B grade
// • If between 50 and 70 then a C grade
// Below 50 then an F grade

function gradeStudent(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks > 70) {
        return 'B';
    } else if (marks > 50) {
        return 'C';
    } else {
        return 'F';
    }
}

// Example usage:
let studentMarks = 85;
console.log(`The grade is: ${gradeStudent(studentMarks)}`);
  
// Output:
// The grade is: B