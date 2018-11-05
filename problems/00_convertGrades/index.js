function convertGrade(grade) {
    if (grade < 38) return grade;
    // Multiple the grade by 0.1 then do Math.floor
    //if this number is less than 3 then round up
    const lowerGrade = Math.floor(grade * 0.1) * 10;
    if (grade > lowerGrade + 7) {
        return lowerGrade + 10;
    } else if (grade > lowerGrade + 3) {
        return lowerGrade + 5;
    } else {
        return grade;
    }
}

module.exports = convertGrade;
