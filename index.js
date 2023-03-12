b1=document.querySelector("[box1]");
b2=document.querySelector("[box2]");
b3=document.querySelector("[box3]");
b4=document.querySelector("[box4]");
b5=document.querySelector("[box5]");
b6=document.querySelector("[box6]");
b7=document.querySelector("[box7]");
b8=document.querySelector("[box8]");
b9=document.querySelector("[box9]");

curr_player=document.querySelector("[curr_player]");

game_btn=document.querySelector("[game_btn]");

let check_pos=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
]

let players=['O','X'];

//new button