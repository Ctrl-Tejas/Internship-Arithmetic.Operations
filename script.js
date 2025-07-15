    function calculate() {
      let n1 = +document.getElementById("num1").value;
      let n2 = +document.getElementById("num2").value;
      let op = document.getElementById("operation").value;
      let result = "Please enter valid numbers.";
  
      if (!isNaN(n1) && !isNaN(n2)) {
        if (op === "add") result = n1 + n2;
        else if (op === "subtract") result = n1 - n2;
        else if (op === "multiply") result = n1 * n2;
        else if (op === "divide") result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
      }
  
      document.getElementById("result").textContent = "Result: " + result;
    }
  