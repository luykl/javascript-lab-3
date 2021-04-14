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
function addSubmission(array, newName, newScore, newDate) {
    let didPass;
    if (newScore >= 60) {
        didPass = true;
    } else {
        didPass = false;
    }
    array.push({name: newName, score: newScore, date: newDate, passed: didPass});
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
    let submission = array[index];
    submission.score = score;
    submission.passed = score >= 60 ? true : false;
        
    return submission;

}

//6
function findSubmissionByName(array, name) {
     return array.find((submission) => submission.name === name)
}

//7
function findLowestScore(array) {
    let lowScore = array[0];
  array.forEach (function(submission) {
    if (submission.score < lowScore.score) {
      lowScore = submission;
    }
  });
  return lowScore;
}

//8
function findAverageScore(array) {
    let sumScores = 0; 
  for (let submission of array) {
    sumScores += submission.score;
  }
  return sumScores / array.length;
}

//9
function filterPassing(array) {
    return array.filter((submission) => submission.passed);
}


//10
function filter90AndAbove(array) {
    return array.filter((submission) => submission.score >= 90);
}





addSubmission(submissions, "Jen", 30, "2021-01-01");
addSubmission(submissions, "Jenn", 70, "2021-01-01");

deleteSubmissionByIndex (submissions, 4);
deleteSubmissionByName (submissions, "Jill")

console.log(submissions)

console.log(editSubmission (submissions, 2, 61));
console.log(findSubmissionByName(submissions, "Joe"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions));
console.log(filter90AndAbove(submissions));









