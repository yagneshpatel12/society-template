let rightSideMenu = document.getElementsByClassName('rightSide')[0];
let line = document.getElementsByClassName('line');
rightSideMenu.style.maxHeight = '0px'
let hamburger
function togglemenu(){
    if(rightSideMenu.style.maxHeight == '0px'){
        rightSideMenu.style.maxHeight = '400px';
       line[0].setAttribute('id','line1');
       line[1].setAttribute('id','line2');
       line[2].setAttribute('id','line3');
    }
    else{
        rightSideMenu.style.maxHeight ='0px'
       line[0].removeAttribute('id');
       line[1].removeAttribute('id');
       line[2].removeAttribute('id');
    }
}