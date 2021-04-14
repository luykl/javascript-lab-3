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
} //this can't be the simplest way com back to this tomorrow

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
    if (score >= 60) {
        submission.passed = true;
    } else {
        submission.passed = false;
    }
    return submission;

}

//6
function findSubmissionByName(array, name) {
     return array.find((submission) => submission.name === name)
}

//7
function findLowestScore(array) {
    let lowScore = submissions[0];
  submissions.forEach (function(submission) {
    if (submission.score < lowScore.score) {
      lowScore = submission;
    }
  });
  return lowScore.score;
}

//8
function findAverageScore(array) {
    let sumScores = 0; 
  for (let submission of submissions) {
    sumScores += submission.score;
  }
  return sumScores / submissions.length;
}

//9
function filterPassing(array) {
    return array.filter((submission) => submission.passed);
}


//10
function filter90AndAbove(array) {
    return array.filter((submission) => submission.score >= 90);
}




console.log(submissions)

addSubmission(submissions, "Jen", 30, "2021-01-01");
deleteSubmissionByIndex (submissions, 4);
deleteSubmissionByName (submissions, "Jill")
editSubmission (submissions, 2, 61);

console.log(submissions)

console.log(findSubmissionByName(submissions, "Jack"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions));
console.log(filter90AndAbove(submissions));









