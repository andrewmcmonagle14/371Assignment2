
function verify() {
	var intMinimum = [7, 5, 0, 0, 6, 3, 4];
	var intMaximum = [9, 7, 4, 9, 9, 6, 8];

	// Retrieve the values of the digit fields
	var digit1 = parseInt(document.getElementById("digit1").value);
	var digit2 = parseInt(document.getElementById("digit2").value);
	var digit3 = parseInt(document.getElementById("digit3").value);
	var digit4 = parseInt(document.getElementById("digit4").value);
	var digit5 = parseInt(document.getElementById("digit5").value);
	var digit6 = parseInt(document.getElementById("digit6").value);
	var digit7 = parseInt(document.getElementById("digit7").value);

	// Check if each digit falls within the acceptable range
	if (digit1 < intMinimum[0] || digit1 > intMaximum[0]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 1: Must be in the range of 7 through 9";
		return;
	}
	if (digit2 < intMinimum[1] || digit2 > intMaximum[1]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 2: Must be in the range of 5 through 7";
		return;
	}
	if (digit3 < intMinimum[2] || digit3 > intMaximum[2]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 3: Must be in the range of 0 through 4";
		return;
	}
	if (digit4 < intMinimum[3] || digit4 > intMaximum[3]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 4: Must be in the range of 0 through 9";
	}
	if (digit5 < intMinimum[4] || digit5 > intMaximum[4]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 5: Must be in the range of 6 through 9";
	}
	if (digit6 < intMinimum[5] || digit6 > intMaximum[5]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 6: Must be in the range of 3 through 6";
	}
	if (digit7 < intMinimum[6] || digit5 > intMaximum[6]) {
		document.getElementById("result").innerHTML = "Invalid input value. Digit 7: Must be in the range of 4 through 8";
	}
	else {
		document.getElementById("result").innerHTML = "Input is valid";
    }
}