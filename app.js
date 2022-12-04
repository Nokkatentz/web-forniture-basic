let PWT1 = document.getElementById('pro1');
let PWT2 = document.getElementById('pro2');
let PWT3 = document.getElementById('pro3');

function Pwt_opacity(i){

    if (i === 1){
        PWT2.style.opacity = 0.7;
        PWT3.style.opacity = 0.7;
    }       
    if (i === 2){
        PWT1.style.opacity = 0.7;
        PWT3.style.opacity = 0.7;
    }       
    else if (i === 3){
        PWT1.style.opacity = 0.7;
        PWT2.style.opacity = 0.7;
    }       
}

function Defult_pwt(defult_sector){
    if(defult_sector === 1){
        PWT2.style.opacity = 1,
        PWT3.style.opacity = 1;
    }
    else if( defult_sector === 2){
        PWT1.style.opacity = 1,
        PWT3.style.opacity = 1;
    }
    else if(defult_sector === 3) {
        PWT1.style.opacity = 1,
        PWT2.style.opacity = 1;
    }
}


PWT1.addEventListener('mouseover' ,function(){
    Pwt_opacity(1);
});
PWT2.addEventListener('mouseover' ,function(){
    Pwt_opacity(2);
});
PWT3.addEventListener('mouseover' ,function(){
    Pwt_opacity(3);
});

PWT1.addEventListener('mouseout' ,function(){
    Defult_pwt(1);
});
PWT2.addEventListener('mouseout' ,function(){
    Defult_pwt(2);
});
PWT3.addEventListener('mouseout' ,function(){
    Defult_pwt(3);
});
