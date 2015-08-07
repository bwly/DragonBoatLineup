// Removes all of the paddlers from a boat and returns them to the roster from which they came
function clearBoat(boatNumber){
	
	var bTable = document.getElementById("boatBody" + boatNumber);
	var fTable = document.getElementById("fullRosterBody");
	// For each row
	//	for each column
	//    if FULL roster contains name in cell, add cell to daily roster
	//    else clear cell

	var boatRows = bTable.rows.length;
	alert(boatRows);
	var fullRosterNames = [];

	for(var i = 0; i < fTable.rows.length; i++){
		fullRosterNames.push(fTable.rows[i].cells[0].innerText);
		fullRosterNames.push(fTable.rows[i].cells[1].innerText);
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
				if(bTable.rows[i].cells[j].style.backgroundColor == "red"){
					for(var k = 0; k < rTable.rows.length; k++){
						if(rTable.rows[k].cells[Math.abs(j - 1)].innerText == ""){
							rTable.rows[k].cells[Math.abs(j-1)].innerHTML = bTable.rows[i].cells[j].innerHTML;
							bTable.rows[i].cells[j].innerHTML = "";
							break;
						}
					}
				}
				else{
					for(var k = 0; k < rTable.rows.length; k++){
						if(rTable.rows[k].cells[j].innerText == ""){
							rTable.rows[k].cells[j].innerHTML = bTable.rows[i].cells[j].innerHTML;
							bTable.rows[i].cells[j].innerHTML = "";
						}
					}
				}
			}
			else{
				// Returning person to full roster
				if(bTable.rows[i].cells[j].style.backgroundColor == "red"){
					for(var k = 0; k < fTable.rows.length; k++){
						if(fTable.rows[k].cells[Math.abs(j - 1)].innerText == ""){
							fTable.rows[k].cells[Math.abs(j-1)].innerHTML = bTable.rows[i].cells[j].innerHTML;
							bTable.rows[i].cells[j].innerHTML = "";
							break;
						}
					}
				}
				else{
					for(var k = 0; k < fTable.rows.length; k++){
						if(fTable.rows[k].cells[j].innerText == ""){
							fTable.rows[k].cells[j].innerHTML = bTable.rows[i].cells[j].innerHTML;
							bTable.rows[i].cells[j].innerHTML = "";
						}
					}
				}
			}
			bTable.rows[i].cells[j].style.backgroundColor = "#eee";
		}
	}

	leftWeight[boatNumber] = 0;
	rightWeight[boatNumber] = 0;

	if(boatRows == 10){
		leftArray[boatNumber] = [0,0,0,0,0,0,0,0,0,0];
		rightArray[boatNumber] = [0,0,0,0,0,0,0,0,0,0];
	}
	else{
		leftArray[boatNumber] = [0,0,0,0,0];
		rightArray[boatNumber] = [0,0,0,0,0];	
	}
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
		+'  <br>'
		+'  <input id = "name' + numBoats + '" type="text" name="" placeHolder = "Boat Name">'
		+'  <button id = "save' + numBoats + '" onclick="saveBoat(' + numBoats +  ",document.getElementById('name" + numBoats + "'" + ').value)">Save Boat</button>'
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
		+'  <br>'
		+'  <input id = "name' + numBoats + '" type="text" name="" placeHolder = "Boat Name">'
		+'  <button id = "save' + numBoats + '" onclick="saveBoat(' + numBoats +  ",document.getElementById('name" + numBoats + "'" + ').value)">Save Boat</button>'
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


function saveBoat(boatNumber, name){
	var Boat = Parse.Object.extend("Boat");
	var boat = new Boat();
	boat.set("Owner", Parse.User.current().getUsername());
	boat.set("Code", document.getElementById("boat" + boatNumber).innerHTML);
	boat.set("Name", name);
	boat.set("LeftArray", leftArray[boatNumber]);
	boat.set("LeftWeight", leftWeight[boatNumber]);
	boat.set("RightArray", rightArray[boatNumber]);
	boat.set("RightWeight", rightWeight[boatNumber]);
	boat.save(null, {
		success: function(results) {
			alert("Saved boat " + boatNumber)
		},
		error: function(results, error) {
			alert(error.message);
		}
	});
}

function loadBoat(name){
	alert("Loading boat number " + numBoats);
	var Boat = Parse.Object.extend("Boat");
	var query = new Parse.Query(Boat);
	query.equalTo("Owner", Parse.User.current().getUsername());
	query.equalTo("Name", name);
	query.find({
		success: function(results){
			// Edits the table's old code to have the correct boat number
			var code = results[0].get("Code");
			var chunk0 = code.split("<tbody id=")[0];
			var chunk1 = code.split("<tbody id=")[1].substr(10, (code.split("<tbody id=")[1].length));
			var edited = chunk0 + '<tbody id="boatBody' + numBoats + chunk1;

			document.getElementById("boatDiv").innerHTML += 
				'<div style="float:left; padding-left:100px;">'
				+'	<h1>' + name + '</h1>'
				+'	<table id="boat' + numBoats + '">'
				+	edited
				+'	</table>'
				+'	<button id = "clear' + numBoats + '" onclick="clearBoat(' + numBoats + ')">Clear</button>'
				+'	<button id = "help' + numBoats + '" onclick="getSuggestion(' + numBoats + ')">Get suggestions</button>'
				+'  <button id = "fill' + numBoats + '" onclick="autofill(' + numBoats + ')">Autofill</button>'
				+'  <br>'
				+'  <input id = "name' + numBoats + '" type="text" name="" placeHolder = "Boat Name">'
				+'  <button id = "save' + numBoats + '" onclick="saveBoat(' + numBoats +  ",document.getElementById('name" + numBoats + "'" + ').value)">Save Boat</button>'
				+'  <div id = "balance' + numBoats + '">Weight is: Balanced</div>'
				+'</div>';

				leftWeight[numBoats] = results[0].get("LeftWeight");
				rightWeight[numBoats] = results[0].get("RightWeight");
				leftArray[numBoats] = results[0].get("LeftArray");
				rightArray[numBoats] = results[0].get("RightArray");
				getBalance(numBoats);
				numBoats++;
				tableCount++;
	
				
				REDIPS.drag.init();

			
		},
		error: function(error){
			alert("Error");
		}
	});
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
			var rightCount = 0;
			var leftCount = 0;
			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);
				var table = document.getElementById("rosterBody");


				// Builds the roster table with both left and right sides
				if(results[i].get("Side") == "Left"){
					if(leftCount == table.rows.length){
						table.insertRow(-1);
						var cell = table.rows[leftCount].insertCell(0).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
					}
					else{
						var cell = table.rows[leftCount].cells[0].innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					
					leftCount++;
				}
				else{
					if(rightCount == table.rows.length){
						table.insertRow(-1);
						table.rows[rightCount].insertCell(0);
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					else{
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';		
					}					
					rightCount++;
				}
				
			}
			

			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
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
			var rightCount = 0;
			var leftCount = 0;

			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);
				var table = document.getElementById("rosterBody");
					// Builds the roster table with both left and right sides
				if(results[i].get("Side") == "Left"){
					if(leftCount == table.rows.length){
						table.insertRow(-1);
						var cell = table.rows[leftCount].insertCell(0).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
					}
					else{
						var cell = table.rows[leftCount].cells[0].innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					
					leftCount++;
				}
				else{
					if(rightCount == table.rows.length){
						table.insertRow(-1);
						table.rows[rightCount].insertCell(0);
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					else{
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';		
					}					
					rightCount++;
				}
			}
			
			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
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
			var rightCount = 0;
			var leftCount = 0;
			for(var i = 0; i < results.length; i++){
				tmp.splice(tmp.indexOf(results[i].get("Name")), 1);
				var table = document.getElementById("rosterBody");
					// Builds the roster table with both left and right sides
				if(results[i].get("Side") == "Left"){
					if(leftCount == table.rows.length){
						table.insertRow(-1);
						var cell = table.rows[leftCount].insertCell(0).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';
					}
					else{
						var cell = table.rows[leftCount].cells[0].innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					
					leftCount++;
				}
				else{
					if(rightCount == table.rows.length){
						table.insertRow(-1);
						table.rows[rightCount].insertCell(0);
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';	
					}
					else{
						var cell = table.rows[rightCount].insertCell(1).innerHTML = '<div id="' + results[i].id + '"class="redips-drag" style="border-style: solid; cursor: move;">' + results[i].get("Name") + '</div>';		
					}					
					rightCount++;
				}
			}
			document.getElementById("unknown").innerHTML = "<br><p style='background-color:#FF6666'>Paddlers not found in team roster: " + tmp.toString() + "</p>";
			document.getElementById("step2").style.display = "none";
			document.getElementById("step3").style.display = "block";
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
	var bTable = document.getElementById("boatBody" + sourceBoat);
	
	if(position[3] == 0){
		rTable.rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
	}
	else if(position[3] == tableCount){
		document.getElementById("fullRosterBody").rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
	}

	else if(position[3] != 0 && position[3] != tableCount){
		// Person was removed from a boat
		if(position[5] == 0){
			leftWeight[sourceBoat] -= weight;
			leftArray[sourceBoat][position[4]] = 0;
		}
		else{
			rightWeight[sourceBoat] -= weight;
			rightArray[sourceBoat][position[4]] = 0;
		}
		bTable.rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
		getBalance(sourceBoat);
	}

	if(result.get("Side") == "Left"){
		if(position[2] != 0){
			rTable.rows[position[1]].cells[position[2]].style.backgroundColor = "red";
		}
	}
	else{
		if(position[2] != 1){
			rTable.rows[position[1]].cells[position[2]].style.backgroundColor = "red";	
		}
	}
}

// Calculates balance weight when a paddler is moved within a boat
function sameBoatDrop(result, weight, position, rightArray, rightWeight, leftArray, leftWeight){
	boatNumber = position[0] - 1;
	if(position[2] != position[5]){
		// Dragged into different column
		if(position[2] == 0){
			// Dragged to left side
			leftArray[boatNumber][position[1]] = weight;
			rightArray[boatNumber][position[4]] = 0;
			leftWeight[boatNumber] += weight;
			rightWeight[boatNumber] -= weight;
			if(result.get("Side") == "Right"){
				document.getElementById("boatBody" + boatNumber).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
			}
			else{
				document.getElementById("boatBody" + boatNumber).rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
			}
		}
		else{
			// Dragged to right side
			rightArray[boatNumber][position[1]] = weight;
			leftArray[boatNumber][position[4]] = 0;
			rightWeight[boatNumber] += weight;
			leftWeight[boatNumber] -= weight; 
			if(result.get("Side") == "Left"){
				document.getElementById("boatBody" + boatNumber).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
			}
			else{
				document.getElementById("boatBody" + boatNumber).rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
			}
		}
	}
	else{
		// Dragged into the same column
		if(position[2] == 0){
			leftArray[boatNumber][position[1]] = weight;
			leftArray[boatNumber][position[4]] = 0;

			if(result.get("Side") == "Right"){
				document.getElementById("boatBody" + boatNumber).rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
				document.getElementById("boatBody" + boatNumber).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
			}

		}
		else{
			rightArray[boatNumber][position[1]] = weight;
			rightArray[boatNumber][position[4]] = 0;
			if(result.get("Side") == "Left"){
				document.getElementById("boatBody" + boatNumber).rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
				document.getElementById("boatBody" + boatNumber).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
			}
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
		if(result.get("Side") == "Right"){
			document.getElementById("boatBody" + targetBoat).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
		}
	}
	else{
		rightWeight[targetBoat] += weight;
		rightArray[targetBoat][position[1]] = weight;
		if(result.get("Side") == "Left"){
			document.getElementById("boatBody" + targetBoat).rows[position[1]].cells[position[2]].style.backgroundColor = "red";
		}
	}
	document.getElementById("boatBody" + sourceBoat).rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
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
	var bTable = document.getElementById("boatBody" + sourceBoat);

	if(position[3] == 0){
		document.getElementById("rosterBody").rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
	}
	else if(position[3] == tableCount){
		fTable.rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
	}
	if(position[3] != 0 && position[3] != tableCount){
		if(position[5] == 0){
			leftWeight[sourceBoat] -= weight;
			leftArray[sourceBoat][position[4]] = 0;
		}
		else{
			rightWeight[sourceBoat] -= weight;
			rightArray[sourceBoat][position[4]] = 0;
		}
		bTable.rows[position[4]].cells[position[5]].style.backgroundColor = "#eee";
		getBalance(sourceBoat);
	}

	if(result.get("Side") == "Left"){
		if(position[2] != 0){
			fTable.rows[position[1]].cells[position[2]].style.backgroundColor = "red";
		}
	}
	else{
		if(position[2] != 1){
			fTable.rows[position[1]].cells[position[2]].style.backgroundColor = "red";	
		}
	}
}

// section is either "Box", "Engine", or "Rocket"
function fillSection(section, results, rowIndex, leftArray, leftWeight, rightArray, rightWeight, boatNumber){
	var bTable = document.getElementById("boatBody" + boatNumber);
	var row = bTable.rows[rowIndex].cells;
	var L = [];
	var R = [];

	for(var k = 0; k < results.length; k++){
		if(results[k].get("Section") == section){
			if(results[k].get("Side") == "Left"){
				L.push(results[k]);
			}
			else{
				R.push(results[k]);
			}
		
		}
	}

	var closest = 200;
	var indexL = -1;
	var indexR = -1;
	for(var k = 0; k < L.length; k++){
		for(var l = 0; l < R.length; l++){
			if(Math.abs(L[k].get("Weight") - R[l].get("Weight")) < closest){
				closest = Math.abs(L[k].get("Weight") - R[l].get("Weight"));
				indexL = k;
				indexR = l;
			}
		}
	}



	if(indexL != -1){
		row[0].innerHTML = '<div id="' + L[indexL].id + '" class="redips-drag" style="border-style: solid; cursor: move;">' + L[indexL].get("Name") + '</div>';

		leftWeight[boatNumber] += L[indexL].get("Weight");
		leftArray[boatNumber][rowIndex] = L[indexL].get("Weight");

		for(var r = 0; r < results.length; r++){
			if(L[indexL].get("Name") == results[r].get("Name")){
				results.splice(r, 1);		
			}
		}
		
	}

	if(indexR != -1){
		row[1].innerHTML = '<div id="' + R[indexR].id + '" class="redips-drag" style="border-style: solid; cursor: move;">' + R[indexR].get("Name") + '</div>';	

		rightWeight[boatNumber] += R[indexR].get("Weight");
		rightArray[boatNumber][rowIndex] = R[indexR].get("Weight");
		
		for(var r = 0; r < results.length; r++){
			if(R[indexR].get("Name") == results[r].get("Name")){
				results.splice(r, 1);	
			}
		}
	}
}