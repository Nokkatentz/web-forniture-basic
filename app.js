
let Ele_animation = document.querySelectorAll('.for_animation');

let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        let scrollPos = window.scrollY - 20;
        console.log('scrollPos ='+scrollPos);
        console.log('navPos = '+navPos);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });

});

Ele_animation.forEach((el) => observer.observe(el));

//=====================================================


let nav = document.getElementById('nav');
let navPos = nav.getBoundingClientRect().top;

window.addEventListener('scroll' ,() =>{
    let scrollPos = window.scrollY;
    
    if(scrollPos > navPos){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
});


//======================================================


let PWT1 = document.getElementById('pro1');
let PWT2 = document.getElementById('pro2');
let PWT3 = document.getElementById('pro3');

function Pwt_opacity(i){
    let opa_value = 0.5;
    if (i === 1){
        PWT2.style.opacity = opa_value;
        PWT3.style.opacity = opa_value;
    }       
    if (i === 2){
        PWT1.style.opacity = opa_value;
        PWT3.style.opacity = opa_value;
    }       
    else if (i === 3){
        PWT1.style.opacity = opa_value;
        PWT2.style.opacity = opa_value;
    }       
}

function Defult_pwt(defult_sector){
    let opa_value = 1;
    if(defult_sector === 1){
        PWT2.style.opacity = opa_value,
        PWT3.style.opacity = opa_value;
    }
    else if( defult_sector === 2){
        PWT1.style.opacity = opa_value,
        PWT3.style.opacity = opa_value;
    }
    else if(defult_sector === 3) {
        PWT1.style.opacity = opa_value,
        PWT2.style.opacity = opa_value;
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
