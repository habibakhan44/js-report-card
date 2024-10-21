const user = [
    {
        username: "Habiba khan",
        id: "123",
        class: "12",
        subjects: [
            { subject: "Maths", marks: 87 },
            { subject: "Physics", marks: 90 },
            { subject: "Pfund", marks: 80 },
        ],
    },
    {
        username: "sarah ",
        id: "119",
        class: "11",
        subjects: [
            { subject: "Maths", marks: 87 },
            { subject: "Physics", marks: 90 },
            { subject: "Pfund", marks: 80 },
        ],
    },
];

function totalMarks(subjects) {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].marks;
    }
    return total;
}

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "F";
}

function generateReportCard() {
    const inputName = prompt("Please input your name");
    const inputId = prompt("Please input your id");

    let student = null;

    for (let i = 0; i < user.length; i++) {
        if (inputName === user[i].username && inputId === user[i].id) {
            student = user[i];
            break;
        }
    }

    if (student) {
        const studentPercentage = percentage(student.subjects);
        document.getElementById("report-card").innerHTML = `
            <p><strong>Name:</strong> ${student.username}</p>
            <p><strong>Id:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Marks:</strong> ${totalMarks(student.subjects)}</p>
            <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
        `;
    } else {
        document.getElementById("report-card").innerHTML = `
            <p>Student not found. Please check the input name and ID.</p>
        `;
    }
}

document.getElementById("btn").addEventListener("click", generateReportCard);
