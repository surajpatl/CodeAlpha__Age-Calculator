let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let calBtn = document.getElementById("calBtn");
let year = document.getElementById("years");
let month = document.getElementById("month");
let days = document.getElementById("Days");
calBtn.addEventListener("click", calculateAge);

function calculateAge() {
  console.log("clicked");

  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
    d3 = d2 - d1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
    d3 = d2 - d1;
  }

  if (d3 < 0) {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  console.log("Year " + y3 + ", Month " + m3 + ", Day " + d3);
  year.innerHTML = y3;
  month.innerHTML = m3;
  days.innerHTML = d3;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}
