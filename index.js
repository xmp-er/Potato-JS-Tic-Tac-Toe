b1=document.querySelector("[box1]");
b2=document.querySelector("[box2]");
b3=document.querySelector("[box3]");
b4=document.querySelector("[box4]");
b5=document.querySelector("[box5]");
b6=document.querySelector("[box6]");
b7=document.querySelector("[box7]");
b8=document.querySelector("[box8]");
b9=document.querySelector("[box9]");

boxes=document.querySelector("[boxes]");

curr_player=document.querySelector("[curr_player]");

game_btn=document.querySelector("[game_btn]");

let check_pos=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
]

let buttons=[b1,b2,b3,b4,b5,b6,b7,b8,b9];

let players=['O','X'];


//new button
game_btn.addEventListener('click',function(){
    for(let i=0;i<buttons.length;i++){
        buttons[i].textContent="";
    }
    curr_player.textContent='X'
    boxes.style.pointerEvents="all";
    for(let j=0;j<buttons.length;j++){
        buttons[j].style.backgroundColor="transparent";
    }
})

//fucntion to change player
function change_player(){
    for(let i=0;i<players.length;i++){
        if(curr_player.textContent!=players[i]){
            curr_player.textContent=players[i];
            break;
        }
    }
}

//adding event listener to every button
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        if(buttons[i].textContent==''){
            buttons[i].textContent=curr_player.textContent;
            change_player();
        }

        //check if somebody won
        for(let j=0;j<check_pos.length;j++){
            let win=true;
            for(let k=1;k<3;k++){
                let pos=check_pos[j][k]-1;
                let prev_pos=check_pos[j][k-1]-1;
                if(buttons[pos].textContent=='' || buttons[prev_pos].textContent=='' || buttons[pos].textContent!=buttons[prev_pos].textContent){
                    win=false;
                    break;
                }
            }
            if(win==true){
                for(let k=0;k<3;k++){
                    buttons[check_pos[j][k]-1].style.backgroundColor="rgb(132 204 22)"
                }
                boxes.style.pointerEvents="none";
            }
        }
        //check if all divs filled no winner
        let isempty=false;
        for(let j=0;j<9;j++){
            if(buttons[j].textContent==''){
                isempty=true;
                break;
            }
        }
        if(isempty==false){
            for(let j=0;j<9;j++){
                buttons[j].style.backgroundColor="rgb(239 68 68)"
            }
            boxes.style.pointerEvents="none";
        }
    })
}

