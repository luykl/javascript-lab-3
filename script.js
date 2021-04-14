let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed : true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed : true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed : false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed : true
    }

];

//2
function addSubmission(array,newName, newScore, newDate) {
    if (newScore >= 60) {
    array.push({name: newName, score: newScore, date: newDate, passed: true});
    } else {
    array.push({name: newName, score: newScore, date: newDate, passed: false});
    }
}

//3
function deleteSubmissionByIndex (array, index) {
    array.splice(index, 1);
}


//4
function deleteSubmissionByName (array, name) {
    let toDelete = array.findIndex( (submission) => submission.name === name)
    array.splice(toDelete,1);
}

//5
function editSubmission (array, index, score) {
    let submission = submissions[index];
    submission.score = score;
    
    return submission;

}

//6
function findSubmissionByName(array, name) {
     return array.find((submission) => submission.name === name)
}

//7
function findLowestScore(array) {
    
}

//8
function findAverageScore(array) {
    
}

//9
function filterPassin(array) {
    
}


//10
function filter90AndAbove(array) {
    
}




console.log(editSubmission(submissions, 2, 2));
console.log(submissions);







