function generateReport() {

    let student = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        className: document.getElementById("class").value,

        tamil: Number(document.getElementById("tamil").value),
        english: Number(document.getElementById("english").value),
        maths: Number(document.getElementById("maths").value),
        science: Number(document.getElementById("science").value),
        social: Number(document.getElementById("social").value)
    };

    if (
        student.name == "" ||
        student.roll == "" ||
        student.className == "" ||
        document.getElementById("tamil").value == "" ||
        document.getElementById("english").value == "" ||
        document.getElementById("maths").value == "" ||
        document.getElementById("science").value == "" ||
        document.getElementById("social").value == ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    let total = calculateTotal(student);
    let percentage = calculatePercentage(total);
    let grade = calculateGrade(percentage);

    let status = "Pass";

    if (
        student.tamil < 35 ||
        student.english < 35 ||
        student.maths < 35 ||
        student.science < 35 ||
        student.social < 35
    ) {
        status = "Fail";
    }

    document.getElementById("report").style.display = "block";

    document.getElementById("rName").innerHTML = student.name;
    document.getElementById("rRoll").innerHTML = student.roll;
    document.getElementById("rClass").innerHTML = student.className;

    document.getElementById("rTamil").innerHTML = student.tamil;
    document.getElementById("rEnglish").innerHTML = student.english;
    document.getElementById("rMaths").innerHTML = student.maths;
    document.getElementById("rScience").innerHTML = student.science;
    document.getElementById("rSocial").innerHTML = student.social;

    document.getElementById("rTotal").innerHTML = total + " / 500";
    document.getElementById("rPercentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("rGrade").innerHTML = grade;
    document.getElementById("rStatus").innerHTML = status;

    if (status == "Pass") {
        document.getElementById("message").innerHTML =
            "🎉 Congratulations! You Passed.";
    } else {
        document.getElementById("message").innerHTML =
            "❌ Needs Improvement.";
    }
}

function calculateTotal(student) {
    return (
        student.tamil +
        student.english +
        student.maths +
        student.science +
        student.social
    );
}

function calculatePercentage(total) {
    return (total / 500) * 100;
}

function calculateGrade(percentage) {

    if (percentage >= 90)
        return "A+";

    else if (percentage >= 80)
        return "A";

    else if (percentage >= 70)
        return "B";

    else if (percentage >= 60)
        return "C";

    else if (percentage >= 50)
        return "D";

    else
        return "F";
}

function clearData() {

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("class").value = "";

    document.getElementById("tamil").value = "";
    document.getElementById("english").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("social").value = "";

    document.getElementById("report").style.display = "none";

    document.getElementById("message").innerHTML = "";
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateReport();
    }
});
