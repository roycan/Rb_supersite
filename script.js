// ============================================
// NAVIGATION BAR - Dynamically generated
// ============================================
function generateNavBar() {
    const navHTML = `
        <a class="brand" href="index.html">My Site</a>
        <ul class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;
    document.getElementById("nav-placeholder").innerHTML = navHTML;
}

// ============================================
// FOOTER - Dynamically generated
// ============================================
function generateFooter() {
    const footerHTML = `
        <ul class="social-list">
            <li><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://your-username.github.io" target="_blank" rel="noopener noreferrer">GitHub Pages</a></li>
            <li><a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://x.com/your-username" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>
        <small>&copy; 2024 Student Name. All rights reserved.</small>
    `;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
}

// Generate nav and footer when page loads
generateNavBar();
generateFooter();

// ============================================
// SCHEDULE TABLE - Dynamically generated
// ============================================
const schedule = [
    { time: "8:00 - 9:00", 
        Monday: "Math", 
        Tuesday: "English", 
        Wednesday: "Science" },
    { time: "9:00 - 10:00", Monday: "Math", Tuesday: "Computer Lab", Wednesday: "Computer Lab" },
    { time: "10:00 - 11:00", Monday: "PE", Tuesday: "History", Wednesday: "Art" },
    { time: "11:00 - 12:00", Monday: "Biology", Tuesday: "Chemistry", Wednesday: "Physics" },
    { time: "12:00 - 1:00", Monday: "Lunch", Tuesday: "Lunch", Wednesday: "Lunch" },
    { time: "1:00 - 2:00", Monday: "English", Tuesday: "Math", Wednesday: "History" },
    { time: "2:00 - 3:00", Monday: "Art", Tuesday: "PE", Wednesday: "Biology" }
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