function printCertificate(grade, nameArr) {
    //Nested function
    if (grade >= 3.00){
        formatHeader();
        fullName(nameArr);
        formatGrade(grade);
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    }
}
printCertificate(5.25, ['Peter', 'Carter']);

//function formatGrade
function formatGrade(grade) {

    let gradeWord = '';

    if (grade < 3.00) {
        grade = 2;
        gradeWord = 'Fail'
    } else if (grade < 3.50) {
        gradeWord = 'Poor'
    } else if (grade < 4.50) {
        gradeWord = 'Good'
    } else if (grade < 5.50) {
        gradeWord = 'Very good'
    } else {
        gradeWord = 'Excellent'
    }

    if (gradeWord == 'Fail') {
        console.log(`${gradeWord} (${grade})`)
    } else {
        console.log(`${gradeWord} (${grade.toFixed(2)})`);
    }
}

function fullName(nameArr) {
    console.log(`${nameArr[0]} ${nameArr[1]}`);
}

function formatHeader() {
    console.log(`~~~-   {@}   -~~~`)
    console.log(`~- Certificate -~`)
    console.log(`~~~-  ~---~  -~~~`)
}

