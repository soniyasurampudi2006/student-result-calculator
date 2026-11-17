const form = document.getElementById("resultForm");
const resultBox = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const rollNumber = document.getElementById("rollNumber").value.trim();

  const marks = [
    Number(document.getElementById("subject1").value),
    Number(document.getElementById("subject2").value),
    Number(document.getElementById("subject3").value),
    Number(document.getElementById("subject4").value),
    Number(document.getElementById("subject5").value)
  ];

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / marks.length;
  const passed = marks.every(mark => mark >= 35);

  let grade;

  if (!passed) {
    grade = "F";
  } else if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 35) {
    grade = "D";
  }

  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <h2>Student Result</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Total:</strong> ${total} / 500</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p class="${passed ? "pass" : "fail"}">
      ${passed ? "Result: Pass" : "Result: Fail"}
    </p>
  `;
});