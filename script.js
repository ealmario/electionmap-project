// create politician object
var makePolitician = function (fullName, partyColor) {

	var politician = {};
		politician.name = fullName;
		politician.electionResults = null;
		politician.totalVotes = 0;
		politician.partyColor = partyColor;
		
    politician.countTotalVotes = function (){
			this.totalVotes = 0;

			for (var i = 0; i < this.electionResults.length; i++){
				this.totalVotes += this.electionResults[i];
			}
		};

		return politician;
}

var maxwell = makePolitician("Maxwell Reedley",[132, 17, 11]);
var jessica = makePolitician("Jessica Adams",[245, 141, 136]);

// politician election results

maxwell.electionResults = [5, 1, 7 , 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2,];
jessica.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1 , 2, 11, 2, 3, 1];

maxwell.electionResults[9] = 1;
maxwell.electionResults[4] = 17;
maxwell.electionResults[43] = 11;

jessica.electionResults[9] = 28;
jessica.electionResults[4] = 38;
jessica.electionResults[43] = 27;

console.log(maxwell.electionResults, jessica.electionResults);

//create variable as a function
var setStateResults = function(state) {

	//targeting the state
	theStates[state].winner = null;
	if (maxwell.electionResults[state] > jessica.electionResults[state] ) {
		theStates[state].winner = maxwell; //set name of candidate object
	}
	else if  (maxwell.electionResults[state] < jessica.electionResults[state]) {
		theStates[state].winner = jessica;
	};

//create variable for state winner color
  var stateWinner = theStates[state].winner;
	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	}

	else {
		theStates[state].rgbColor = [11, 32, 57];
	}

	stateName.innerText = theStates[state].nameFull;
	abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
	candidate1Name.innerText = maxwell.name;
	candidate2Name.innerText = jessica.name;
	candidate1Results.innerText = maxwell.electionResults[state];
	candidate2Results.innerText = jessica.electionResults[state];

	if (theStates[state].winner === null) {
      winnersName.innerText = "Draw";
	} else {
      winnersName.innerText = theStates[state].winner.name;
	}
}

maxwell.countTotalVotes();
jessica.countTotalVotes();

console.log(maxwell.totalVotes, jessica.totalVotes);

var winner = "???"; //or null?

if (maxwell.totalVotes > jessica.totalVotes) {
	winner = maxwell.name;
}
else if (maxwell.totalVotes < jessica.totalVotes) {
	winner = jessica.name;
}
else {
	winner = "Draw";
}

console.log("Max's Party Color is " + maxwell.partyColor)
console.log("Jessica's Party Color is " + jessica.partyColor)
console.log("And the winner is " + winner + "!");

// Country Table  
var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = maxwell.name;
row.children[1].innerText = maxwell.totalVotes;
row.children[2].innerText = jessica.name;
row.children[3].innerText = jessica.totalVotes;
row.children[5].innerText = winner;

// Interactive State Table
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
