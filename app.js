


function buildTruthTable() {
    // Get the number of variables and the exponential from the form
    var numVars = document.getElementById("exponential").value;
    
    
    // Calculate the total number of rows in the truth table
    var numRows = Math.pow(2, numVars);
    
    // Get the table body element
    var tableBody = document.getElementById("truthTable").getElementsByTagName("tbody")[0];
    
    // Clear any existing rows from the table body
    tableBody.innerHTML = "";
    
    // Loop through each row in the table
    for (var i = 0; i < numRows; i++) {
      // Create a new table row element
      var row = document.createElement("tr");
      
      // Loop through each variable and calculate its value for this row
      for (var j = 0; j < numVars; j++) {
        // Calculate the value of this variable for this row
        var val = (i >> j) & 1;
        
        // Create a new table cell element for this variable
        var cell = document.createElement("td");
        
        // Set the cell content to the variable value
        cell.innerText = val;
        
        // Add the cell to the row
        row.appendChild(cell);
      }
                          
      // Add the row to the table body
      tableBody.appendChild(row);
    }
  }