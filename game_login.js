function addUser(){
    player1_name = document.getElementById("player-1_name_input").value;
    player2_name = document.getElementById("player-2_name_input").value;
    window.location = "quiz_game_page.html";
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    actual_answer = parseInt(player1_name) * parseInt(player2_name);
}