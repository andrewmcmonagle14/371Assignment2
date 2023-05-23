# 371Assignment2
CSCI 371 Web Scripting Languages: Assignment 2: PIN webpage validation.
Project 2:
The National Commerce Bank has hired you to create Web application that verifies a customer personal identification number (PIN). A valid PIN is a seven-digit number that meets the following specifications:
•	Digit 1: Must be in the range of 7 through 9
•	Digit 2: Must be in the range of 5 through 7
•	Digit 3: Must be in the range of 0 through 4
•	Digit 4: Must be in the range of 0 through 9
•	Digit 5: Must be in the range of 6 through 9
•	Digit 6: Must be in the range of 3 through 6
•	Digit 7: Must be in the range of 4 through 8

Notice that each digit must fall into a range of integers. Don’t use HTML5 validation support !
Your application should have two arrays: intMinimum and intMaximum. The intMinimum array should hold the minimum value for each digit position, and the intMaximum array should hold the maximum value for each digit position. (Note: use a different JS file).
The application should allow the user to enter seven digits on the html form. 
 
When the Verify button is clicked, the application should use the intMinimum and intMaximum arrays to verify that the numbers fall into acceptable ranges.
Note: If the digit field fails the pattern match, display the corresponding validation message. For Example: “Invalid input value. Digit 1: Must be in the range of 7 through 9”.

Test your work:
Save your changes to the JavaScript file and then open html file in your web browser. 
Verify that you cannot submit the form if your pin is invalid. 
