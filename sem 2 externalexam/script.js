function calculate() {
    let n = parseInt(document.getElementById("subjects").value);

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        total += marks;
    }

    let average = total / n;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade;
}