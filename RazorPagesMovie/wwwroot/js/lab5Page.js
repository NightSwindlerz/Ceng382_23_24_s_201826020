function toggleFunc() {
    // Toggle elements when the toggle button is clicked
    var elementsToToggle = document.getElementById('elementsToToggle');
    if (elementsToToggle.style.display === 'none') {
        elementsToToggle.style.display = 'block';
    } else {
        elementsToToggle.style.display = 'none';
    }
};
function calculateFunc() {
    var element1  = document.getElementById("element1").value;
    var element2  = document.getElementById("element2").value;
    var calculateResult = document.getElementById('calculateResult');

    // Check that both fields have been filled in before calculating
    if (!(element1)) element1=0;
    if (!(element2)) element2=0;

    // Perform calculations based on adding operation
    var result  = addNumbers(element1, element2);

    // Display the result in the output field
    document.getElementById("resultField").value = "  \nThe sum of "+element1 +" + "+element2+" equals: " + result;
    
    if (calculateResult.style.display === 'none') {
        calculateResult.style.display = 'block';
    /*} else {
        calculateResult.style.display = 'none';*/
    }
};

function addNumbers(n1, n2) {
    /* Add two numbers together */
   return parseFloat(n1) + parseFloat(n2);
};