let rightSideMenu = document.getElementsByClassName('rightSide')[0];
let line = document.getElementsByClassName('line');
localStorage.setItem('menu','hidden');
function togglemenu(){
    if(localStorage.getItem('menu')=='hidden'){
        for(let i=0;i<3;i++)
            line[i].setAttribute('id',`line${i+1}`);
            localStorage.setItem('menu','visible');
            rightSideMenu.style.maxHeight='300px'
    }
    else{
        for(let i=0;i<3;i++)
        line[i].removeAttribute('id',`line${i+1}`);
        localStorage.setItem('menu','hidden');
        rightSideMenu.style.maxHeight='0px'
    }
}