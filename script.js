const schedule = [
    { time: "8:00 - 9:00", Monday: "Math", Tuesday: "English", Wednesday: "Science" },
    { time: "9:00 - 10:00", Monday: "Math", Tuesday: "Computer Lab", Wednesday: "Computer Lab" },
    { time: "10:00 - 11:00", Monday: "PE", Tuesday: "History", Wednesday: "Art" }
];

const days = ["Monday", "Tuesday", "Wednesday"];
const table = document.getElementById("schedule");


// Build header row
let headerRow = "<tr><th>Time</th>";

for (let i = 0; i < days.length; i++) {
    headerRow += `<th>${days[i]}</th>`;
}

headerRow += "</tr>";
table.innerHTML = headerRow;


// Build rows

for (let i = 0; i < schedule.length; i++) {
    build_rows(schedule[i]);
}

function build_rows(slot) {
    let row = `<tr><td>${slot.time}</td>`;
    for (let i = 0; i < days.length; i++) {
        row += `<td>${slot[days[i]] || ""}</td>`;
    }
    row += "</tr>";
    table.innerHTML += row;
}