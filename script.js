
// This function clears all the values
        function clearScreen() {
            document.getElementById("result").value = "";
        }
        
        // This function displays the values
        function display(value) {
            document.getElementById("result").value += value;
        }
        
        // This function evaluates the expression and returns the result
        function calculate() {
            var p = document.getElementById("result").value;
            try {
                var q = eval(p);
                if (isNaN(q) || !isFinite(q)) {
                    throw new Error("Error inputkan angka terlebih  dahulu");
                }
                document.getElementById("result").value = q;
            } catch (error) {
                alert("Error: " + error.message);
            }
        }