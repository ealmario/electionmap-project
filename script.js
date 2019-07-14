// create politician object
var createPolitician = function (fullName, partyColor) {

	var politician = {};
		politician.name = fullName;
		politician.electionResults = null;
		politician.totalVotes = 0;
		politician.partyColor = "";
		politician.tallyUp = function (){
			this.totalVotes = 0;

			for (var i = 0; i < this.electionResults.length; i++){
				this.totalVotes += this.electionResults[i];
			}
		};

		return politician;
}

var politician1 = createPolitician("Maxwell Reedley",[132, 17, 11]);
var politician2 = createPolitician("Jessica Adams",[245, 141, 136]);

console.log(politician1, politician2);
// politician election results

politician1.electionResults = [5, 1, 7 , 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2,];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1 , 2, 11, 2, 3, 1];

politician1.electionResults[9] = 1;
politician1.electionResults[4] = 17;
politician1.electionResults[43] = 11;

politician2.electionResults[9] = 28;
politician2.electionResults[4] = 38;
politician2.electionResults[43] = 27;

politician1.tallyUp();
politician2.tallyUp();

console.log(politician1.totalVotes, politician2.totalVotes);

var winner = "???"; //or null?

if (politician1.totalVotes > politician2.totalVotes) {
	winner = politician1.name;
}
else if (politician1.totalVotes < politician2.totalVotes) {
	winner = politician2.name;
}
else {
	winner = "Draw";
}

console.log("And the winner is " + winner + "!");

//create variable as a function
var setStateResults = function(state) {

	//targeting the state
	theStates[state].winner = null;

	if (politician1.electionResults[state] > politician2.electionResults[state] ) {
		theStates[state].winner = politician1; //set name of candidate object
	}
	else if  (politician2.electionResults[state] < politician1.electionResults[state]) {
		theStates[state].winner = politician2;
	};

//create variable for state winner color
var stateWinner = theStates[state].winner;

	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.winner.partyColor;
	}

	else {
		theStates[state].rgbColor = [11, 32, 57];
	}
}

// Interactive State Table
var stateTable = document.getElementById('stateResults');
	
	//access table header
var stateTableHeader = stateTable.children[0];
	//access table header contents
var stateName = stateTableHeader.children[0];
var stateAbbrev = stateTableHeader.children[1];

	//access table body
var stateTableBody = stateTable.children[1];

	//table body row 1
var bodyRow1 = stateTableBody.children[0];
	//contents	
var candidate1 = bodyRow1.children[0];
var candidate1Results = bodyRow1.children[1];

	//table body row 2 
var bodyRow2 = stateTableBody.children[1];
	//contents
var candidate2 = bodyRow2.children[0];
var candidate2Results = bodyRow2.children[1];

	//table body row 3
var bodyRow3 = stateTableBody.children[2];
	//contents
var stateOverallWinner = bodyRow3.children[1];

stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1.innerText = politician1.name;
candidate1Results.innerText = politician1.totalVotes;

candidate2.innerText = politician2.name;
candidate2Results.innerText = politician2.totalVotes;

if ( stateWinner === null) {
	stateOverallWinner.innerText = "Draw";
}
else {
	stateOverallWinner.innerText = stateWinner.name;
}

// Country Table
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = politician1.name;
row.children[1].innerText = politician1.totalVotes;
row.children[2].innerText = politician2.name;
row.children[3].innerText = politician2.totalVotes;
row.children[5].innerText = winner;

