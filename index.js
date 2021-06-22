let rightSideMenu = document.getElementsByClassName('rightSide')[0];
let line = document.getElementsByClassName('line');
rightSideMenu.style.maxHeight = '0px'
function togglemenu(){
    if(rightSideMenu.style.maxHeight == '0px'){
        rightSideMenu.style.maxHeight = '400px';
        for(let i=0;i<3;i++)
            line[i].setAttribute('id',`line${i+1}`);
    }
    else{
        rightSideMenu.style.maxHeight ='0px'
        for(let i=0;i<3;i++)
        line[i].removeAttribute('id',`line${i+1}`);
    }
}