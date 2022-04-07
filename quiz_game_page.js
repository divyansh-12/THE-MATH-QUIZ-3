function send()
{
    textInput_num1 = document.getElementById("textInput_num1").value;
    textInput_num2 = document.getElementById("textInput_num2").value;
    actual_answer = parseInt(textInput_num1) * parseInt(textInput_num2);
}
question_number = "<h4>" + textInput_num1 + " x " + textInput_num2 + "</h4>";
input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("textInput_num1").value = "";
document.getElementById("textInput_num2").value = "";