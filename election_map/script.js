
// FACTORY FUNCTION BELOW
var makePolitician = function (firstName, color) {

    var politician = {}; // new blank object
    politician.name = firstName; // set name to parameter value
    politician.electionResults = null;
    politician.totalVotes = "0";
    politician.color = color; // set color to parameter value
    
    // method for counting amount of votes
    // Add to factory function above return statement
    politician.voteCount = function () {

        this.totalVotes = 0

        for (var i = 0; i < this.electionResults.length; i++) {

            this.totalVotes = this.totalVotes + this.electionResults[i];

        }
        
        console.log(this.totalVotes);

    };    

    return politician;
  
};
// END FACTORY FUNCTION


var candidateOne = makePolitician("Hilary", [132, 17, 11]);
var candidateTwo = makePolitician("Donald", [245, 141, 136]);

candidateOne.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidateTwo.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// Florida re-count
candidateOne.electionResults[9] = 1;
candidateTwo.electionResults[9] = 28;

// California re-count
candidateOne.electionResults[4] = 17;
candidateTwo.electionResults[4] = 38;

// Texas re-count
candidateOne.electionResults[43] = 11;
candidateTwo.electionResults[43] = 27;


// function for setting state results
var setStateResults = function (state) {
        
    theStates[state].winner = null;
    
    // determine that state's winner
    if (candidateOne.electionResults[state] > candidateTwo.electionResults[state]) {

         theStates[state].winner = candidateOne;

    } else if (candidateOne.electionResults[state] < candidateTwo.electionResults[state]) {

        theStates[state].winner = candidateTwo;

    }
    
    this.stateWinner = theStates[state].winner;
    
    // Makes the state the winner's color
    if (this.stateWinner != null) {
        
        theStates[state].rgbColor = stateWinner.color;
        
    } else {
        
        theStates[state].rgbColor = [11, 32, 57];
        
    }
    
    // Populates the country results table
    var countryResults = document.getElementById('countryResults');

    var row = countryResults.children[0].children[0];

    row.children[0].innerText = candidateOne.name;
    row.children[1].innerText = candidateOne.totalVotes;
    row.children[2].innerText = candidateTwo.name;
    row.children[3].innerText = candidateTwo.totalVotes;
    row.children[5].innerText = winner;
    
    // Populates state results table
    var stateResults = document.getElementById('stateResults');
    
    var header = stateResults.children[0];
    var body = stateResults.children[1];
    
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Name = body.children[1].children[0];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
    
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = theStates[state].nameAbbrev;
    
    candidate1Name.innerText = candidateOne.name;
    candidate2Name.innerText = candidateTwo.name;
    
    candidate1Results.innerText = candidateOne.electionResults[state];
    candidate2Results.innerText = candidateTwo.electionResults[state];
    
    if (this.stateWinner == null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
    
}


// Calls voteCount method for each politician
candidateOne.voteCount();
candidateTwo.voteCount();

// The code below declares a winner
var winner = "";

if (candidateOne.totalVotes > candidateTwo.totalVotes) {
    
    winner = candidateOne.name;
    
} else if (candidateOne.totalVotes < candidateTwo.totalVotes) {
    
    winner = candidateTwo.name;
    
} else {
    
    winner = "Nobody"
    
}

console.log(winner + " wins the election!")

// Used to check if the array was correct
// console.log(candidateOne.electionResults);
// console.log(candidateTwo.electionResults);

// Used to check if the color array was correct
// console.log(candidateOne.color);
// console.log(candidateTwo.color);