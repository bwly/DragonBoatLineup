// Removes all of the paddlers from a boat and returns them to the roster from which they came
function clearBoat(boatNumber){
	var boatRows = 10;
	var bTable = document.getElementById("boatBody" + boatNumber);
	var fTable = document.getElementById("fullRosterBody");
	// For each row
	//	for each column
	//    if FULL roster contains name in cell, add cell to daily roster
	//    else clear cell

	var fullRosterNames = [];

	for(var i = 0; i < fTable.rows.length; i++){
		fullRosterNames.push(fTable.rows[i].cells[0].innerText);
	}

	for(var i = 0; i < boatRows; i++){
		for(var j = 0; j < 2; j++){
			if(bTable.rows[i].cells[j].innerText == ""){
				//Found empty cell, continue to next slot in boat
				continue;
			}

			if(fullRosterNames.indexOf(bTable.rows[i].cells[j].innerText) != -1) {
				// Returning person to daily roster
				var rTable = document.getElementById("rosterBody");
				for(var k = 0; k < rTable.rows.length; k++){
					if(rTable.rows[k].cells[0].innerText == ""){
						rTable.rows[k].cells[0].innerHTML = bTable.rows[i].cells[j].innerHTML;
						bTable.rows[i].cells[j].innerHTML = "";
					}
				}
				
			}
			else{
				// Returning person to full roster
				fTable.rows[fullRosterNames.indexOf("")].cells[0].innerHTML = bTable.rows[i].cells[j].innerHTML;
				fullRosterNames[fullRosterNames.indexOf("")] = bTable.rows[i].cells[j].innerText;
				bTable.rows[i].cells[j].innerHTML = "";
			}
		}
	}

	leftWeight[boatNumber] = 0;
	leftArray[boatNumber] = [0,0,0,0,0,0,0,0,0,0];
	rightWeight[boatNumber] = 0;
	leftArray[boatNumber] = [0,0,0,0,0,0,0,0,0,0];
	document.getElementById("balance" + boatNumber).innerHTML = "Weight is: Balanced";	
	balanceWeight[boatNumber] = 0;
	REDIPS.drag.init();
}

function addTwentyMan(){
	document.getElementById("boatDiv").innerHTML += 
		'<div style="float:left; padding-left:100px;">'
		+'	<h1>Boat ' + numBoats + '</h1>'
		+'	<table id="boat' + numBoats + '">'
		+'		<colgroup>'
		+'			<col width="100"/>'
		+'			<col width="100"/>'
		+'			</colgroup>'
		+'		<tbody id="boatBody' + numBoats + '">'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'		</tbody>'
		+'	</table>'
		+'	<button id = "clear' + numBoats + '" onclick="clearBoat(' + numBoats + ')">Clear</button>'
		+'	<button id = "help' + numBoats + '" onclick="getSuggestion(' + numBoats + ')">Get suggestions</button>'
		+'  <button id = "fill' + numBoats + '" onclick="autofill(' + numBoats + ')">Autofill</button>'
		+'  <div id = "balance' + numBoats + '">Weight is: Balanced</div>'
		+'</div>';
		

	leftWeight[numBoats] = 0;
	rightWeight[numBoats] = 0;
	leftArray[numBoats] = [0,0,0,0,0,0,0,0,0,0];
	rightArray[numBoats] = [0,0,0,0,0,0,0,0,0,0];
	numBoats++;
	tableCount++;
	REDIPS.drag.init();
}

function addTenMan(){
	document.getElementById("boatDiv").innerHTML += 
		'<div style="float:left; padding-left:100px;">'
		+'	<h1>Boat ' + numBoats + '</h1>'
		+'	<table id="boat' + numBoats + '">'
		+'		<colgroup>'
		+'			<col width="100"/>'
		+'			<col width="100"/>'
		+'			</colgroup>'
		+'		<tbody id="boatBody' + numBoats + '">'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td></td>'
		+'				<td></td>'
		+'			</tr>'
		+'		</tbody>'
		+'	</table>'
		+'	<button id = "clear' + numBoats + '" onclick="clearBoat(' + numBoats + ')">Clear</button>'
		+'	<button id = "help' + numBoats + '" onclick="getSuggestion(' + numBoats + ')">Get suggestions</button>'
		+'  <button id = "fill' + numBoats + '" onclick="autofill(' + numBoats + ')">Autofill</button>'
		+'  <div id = "balance' + numBoats + '">Weight is: Balanced</div>'
		+'</div>';
		

	leftWeight[numBoats] = 0;
	rightWeight[numBoats] = 0;
	leftArray[numBoats] = [0,0,0,0,0];
	rightArray[numBoats] = [0,0,0,0,0];
	numBoats++;
	tableCount++;
	REDIPS.drag.init();
}


// Adjusts the text underneath a boat table that says whether the boat is right heavy, left heavy, or balanced
function getBalance(boatNumber){
	balanceWeight[boatNumber] = leftWeight[boatNumber] - rightWeight[boatNumber];
	if(balanceWeight[boatNumber] > 0){
		document.getElementById("balance" + boatNumber).innerHTML = "Weight is: " + (balanceWeight[boatNumber]) + " lbs left-heavy";
	}
	else if(balanceWeight[boatNumber] < 0){
		document.getElementById("balance" + boatNumber).innerHTML = "Weight is: " + (-balanceWeight[boatNumber]) + " lbs right-heavy";
	}
	else{
		document.getElementById("balance" + boatNumber).innerHTML = "Weight is: Balanced";	
	}
}


// Loads the roster table for friday
function friday(drag) {
	// Clears roster if day is switched
	document.getElementById("rosterBody").innerHTML = "";
	

	var query = new Parse.Query(Paddler);	
	
	// Copies friday array into tmp
	var tmp = [];
	for(var a = 0; a < fridayArray.length; a++){
		tmp[a] = fridayArray[a];
	}

	query.containedIn("Name", tmp);
	query.equalTo("Owner", Parse.User.current().getUsername());
	query.find({
		success: function(results) {
			document.getElementById("rosterTitle").innerHTML = "Friday Roster";
			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);

				var table = document.getElementById("rosterBody");
				var row = table.insertRow(-1);
				var cell = row.insertCell(0).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
				
			}
			

			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
			document.getElementById("fillButton").style.display = "block";
			drag.init();
		},
		error: function(error) {
			alert("error");
		}
	});

}

// Loads the roster table for saturday
function saturday(drag) {
	// Clears roster if day is switched
	document.getElementById("rosterBody").innerHTML = "";

	var query = new Parse.Query(Paddler);	
	
	// Copies friday array into tmp
	var tmp = [];
	for(var a = 0; a < saturdayArray.length; a++){
		tmp[a] = saturdayArray[a];
	}

	query.containedIn("Name", tmp);
	query.equalTo("Owner", Parse.User.current().getUsername());
	query.find({
		success: function(results) {
			document.getElementById("rosterTitle").innerHTML = "Saturday Roster";
			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);

				var table = document.getElementById("rosterBody");
				var row = table.insertRow(-1);
				var cell = row.insertCell(0).innerHTML = '<div id="' + results[i].id + '" class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
				
			}
			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
			document.getElementById("fillButton").style.display = "block";
			drag.init();
		},
		error: function(error) {
			alert("error");
		}
	});
}

// Loads the roster table for Sunday
function sunday(drag) {
	// Clears roster if day is switched
	document.getElementById("rosterBody").innerHTML = "";

	var query = new Parse.Query(Paddler);	
	
	// Copies friday array into tmp
	var tmp = [];
	for(var a = 0; a < sundayArray.length; a++){
		tmp[a] = sundayArray[a];
	}

	query.containedIn("Name", tmp);
	query.equalTo("Owner", Parse.User.current().getUsername());
	query.find({
		success: function(results) {
			document.getElementById("rosterTitle").innerHTML = "Sunday Roster";
			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);

				var table = document.getElementById("rosterBody");
				var row = table.insertRow(-1);
				var cell = row.insertCell(0).innerHTML = '<div id="' + results[i].id + '" class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
				
			}
			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
			document.getElementById("fillButton").style.display = "block";
			drag.init();
		},
		error: function(error) {
			alert("error");
		}
	});
}


// Handles a drop into the daily roster
function dailyDrop(result, weight, position, rightArray, rightWeight, leftArray, leftWeight){
	var rTable = document.getElementById("rosterBody");
	var count = 0;

	for(var i = 0; i < rTable.rows.length; i++){
		for(var j = 0; j < rTable.rows[i].cells.length; j++){
			if(rTable.rows[i].cells[j].innerText.slice(0, -1) == result.get("Name")){
				count++;
				if(count > 1){
					alert("Found duplicate");
				}
			}
		}
	}
	var sourceBoat = position[3] - 1;
	
	if(position[3] != 0 && position[3] != tableCount){
		if(position[5] == 0){
			leftWeight[sourceBoat] -= weight;
			leftArray[sourceBoat][position[4]] = 0;
		}
		else{
			rightWeight[sourceBoat] -= weight;
			rightArray[sourceBoat][position[4]] = 0;
		}

		getBalance(sourceBoat);
	}

}

// Calculates balance weight when a paddler is moved within a boat
function sameBoatDrop(result, weight, position, rightArray, rightWeight, leftArray, leftWeight){
	boatNumber = position[0] - 1;
	if(position[2] != position[5]){
		// Dragged into different column
		if(position[2] == 0){
			leftArray[boatNumber][position[1]] = weight;
			rightArray[boatNumber][position[4]] = 0;
			leftWeight[boatNumber] += weight;
			rightWeight[boatNumber] -= weight;
		}
		else{
			rightArray[boatNumber][position[1]] = weight;
			leftArray[boatNumber][position[4]] = 0;
			rightWeight[boatNumber] += weight;
			leftWeight[boatNumber] -= weight; 
		}
	}
	else{
		// Dragged into the same column
		if(position[2] == 0){
			leftArray[boatNumber][position[1]] = weight;
			leftArray[boatNumber][position[4]] = 0;
		}
		else{
			rightArray[boatNumber][position[1]] = weight;
			rightArray[boatNumber][position[4]] = 0;
		}
	}
	
	getBalance(boatNumber);
}

// Calculates balance weight when a paddler is moved from one boat to another
function boatToBoat(result, weight, position, rightArray, rightWeight, leftArray, leftWeight){
	targetBoat = position[0] - 1;
	sourceBoat = position[3] - 1;

	// Adjusts the weights of the source boat
	if(position[5] == 0){
		leftWeight[sourceBoat] -= weight;
		leftArray[sourceBoat][position[4]] = 0;
	}
	else{
		rightWeight[sourceBoat] -= weight;
		rightArray[sourceBoat][position[4]] = 0;	
	}

	// Adjusts the weights of the target boat
	if(position[2] == 0){
		leftWeight[targetBoat] += weight;
		leftArray[targetBoat][position[1]] = weight;
	}
	else{
		rightWeight[targetBoat] += weight;
		rightArray[targetBoat][position[1]] = weight;
	}

	getBalance(targetBoat);
	getBalance(sourceBoat);

}

function fullDrop(result, weight, position, rightArray, rightWeight, leftArray, leftWeight){
	var fTable = document.getElementById("fullRosterBody");
	var count = 0;

	for(var i = 0; i < fTable.rows.length; i++){
		for(var j = 0; j < fTable.rows[i].cells.length; j++){
			if(fTable.rows[i].cells[j].innerText.slice(0, -1) == result.get("Name")){
				count++;
				if(count > 1){
					alert("Found duplicate");
				}
			}
		}
	}
	var sourceBoat = position[3] - 1;
	
	if(position[3] != 0 && position[3] != tableCount){
		if(position[5] == 0){
			leftWeight[sourceBoat] -= weight;
			leftArray[sourceBoat][position[4]] = 0;
		}
		else{
			rightWeight[sourceBoat] -= weight;
			rightArray[sourceBoat][position[4]] = 0;
		}

		getBalance(sourceBoat);
	}
}