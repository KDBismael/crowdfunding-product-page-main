//get body element
var body=document.getElementsByTagName('body')[0];
var bodyWidth=body.clientWidth;

// get back this project elemennt
var backProject = document.getElementById('back');

//get ref-modal element
var refModal=document.getElementsByClassName('ref-modal')[0];

//get referential modal selection
var refModalSelection=document.getElementsByClassName('ref-selection-modal')[0];

//get modal
var modal=document.getElementsByClassName('modal')[0];

//get sucess modal element
var sucessModal=document.getElementsByClassName('sucess-modal')[0];

//get close sucess modal element
var closeSucessModal=document.getElementsByClassName('close-sucess-modal')[0];

// get modal selection conetent element
var modalSelection= document.getElementsByClassName('selection-modal')[0];

//get close modal
closeModal=document.getElementsByClassName('close-modal')[0];

// get mobil navbar element
var navBarButton=document.getElementsByClassName('burger')[0];

//get navbar modal element
var NavBarModal=document.getElementsByClassName('nav-bar-modal')[0];

// get close menu element
var closeMenuButton=document.getElementsByClassName('close-menu')[0];

//get selection 1 element
var selection1=document.getElementsByClassName('ref-selection')[0];
var select1=document.getElementsByClassName('select1')[0];

//get selection 1 button
var selectionButton=document.getElementById('R1');

//get selection 2 element
var selection2=document.getElementsByClassName('ref-selection1')[0];
var select2=document.getElementsByClassName('select2')[0];
var selected2=document.getElementsByClassName('selected2')[0];
var select2Paragraph=document.getElementById('pselect');
var select2Left=document.getElementById("left");
var select2Number=document.getElementsByClassName('nb')[0];

//get selection 2 button
var selectionButton2=document.getElementsByClassName('ratio-point')[0];

//get selection paragraph
var paragraph=document.getElementById('pselect');

//get selection 3 element
var selection3=document.getElementsByClassName('ref-selection2')[0];
var select3=document.getElementsByClassName('select3')[0];

//get selection 3 button
var selectionButton3=document.getElementsByClassName('ratio-point2')[0];


//get selection 4 element
var selection4=document.getElementsByClassName('ref-selection3')[0];
var select4=document.getElementsByClassName('select4')[0];

//get selection 4 button
var selectionButton4=document.getElementsByClassName('ratio-point3')[0];

//get continue button for selection 1
var continueBtn1=document.getElementsByClassName('continueBtn1')[0];

//get continue button for selection 2
var continueBtn2=document.getElementsByClassName('continueBtn2')[0];

//get continue button for selection 1
var continueBtn3=document.getElementsByClassName('continueBtn3')[0];

//get continue button for selection 1
var continueBtn4=document.getElementsByClassName('continueBtn4')[0];


// creation of boolean variable to close items selection
var selection1IsOpen=false;
var selection2IsOpen=false;
var selection3IsOpen=false;
var selection4IsOpen=false;






//listen for click to open modal
backProject.addEventListener('click', getBack);

//listen for click to close modal
closeModal.addEventListener('click',closeM);

//listen burger click
navBarButton.addEventListener('click',openNavBarModal);

//listen outside event
window.addEventListener('click',outSide);

//listen outside menu event
window.addEventListener('click',menuOutSide);

//listen close menu modal
closeMenuButton.addEventListener('click',closeMenu);

//listen selection 2 click
selectionButton2.addEventListener('click',openSelection2);

//listen selection 3 click
selectionButton3.addEventListener('click',openSelection3);

//listen selection 1 click
selectionButton.addEventListener('click',openselection1);

//listen selection 4 click
selectionButton4.addEventListener('click',openSelection4);

//listen selction 1 continue button
continueBtn1.addEventListener('click',openSucessModal);

//listen selction 1 continue button
continueBtn2.addEventListener('click',openSucessModal);

//listen selction 1 continue button
continueBtn3.addEventListener('click',openSucessModal);

//listen selction 1 continue button
continueBtn4.addEventListener('click',openSucessModal);

//listen close sucess modal button
closeSucessModal.addEventListener('click',closeSucessModalF);

//listen selection 1 click
//selectionButton4.addEventListener('click',openSelection4);

//listen selection 1 outside click to close 
//modalSelection.addEventListener('click',closeSelection2);

//listen selection 2 outside click to close 
//modalSelection.addEventListener('click',closeSelection3);

// listen modalSelection to close all items selection
modalSelection.addEventListener('click',(e)=>{
    if(selection2IsOpen && (e.target!=select2)&&(e.target!=selection2))
    {
        if(bodyWidth<=375){
            modalSelection.style.height="169%";
            select2.style.height="23%";
            select2.style.top="31.5%";
            select2Paragraph.style.marginTop="3%";
            select2Left.style.top="10rem";
            select2Number.style.top="9.9rem";
            select2.style.border="1px solid rgb(214, 211, 211)";
            select3.style.top='57.5%';
            select3.style.height='20%';
            select4.style.top='0%';
            select4.style.height='35%';
            selection2.style.display='none';
            selection2IsOpen=false;
        }
        else{
            modalSelection.style.height="90%";
            modalSelection.style.marginBottom="0%";
            select3.style.top='58.5%';
            select2.style.height="17%";
            select2.style.top='38%';
            select2.style.border="1px solid rgb(214, 211, 211)";
            select4.style.top='-2%';
            select2Paragraph.style.top="40%";
            selection2.style.display='none';
            selection2IsOpen=false;
        }
    }
    else if(selection3IsOpen &&  (e.target!=select3))
    {
        if(bodyWidth<=375){
            modalSelection.style.height="169%";
            select3.style.height="20%";
            select3.style.top="57.5%";
            select3.style.border="1px solid rgb(214, 211, 211)";
            select2.style.top='31.5%';
            select1.style.top='12%';
            select4.style.top='0%';
            select4.style.height='35%';
            selection3.style.display='none';
            selection3IsOpen=false;
        }
        else{
            modalSelection.style.height="90%";
            modalSelection.style.marginBottom="0%";
            select3.style.border="1px solid rgb(214, 211, 211)";
            selection3.style.display='none';
            select2.style.height="17%";
            select3.style.top='58.5%';
            select3.style.height="18%";
            select4.style.top='-2%';
            select2.style.top="38%";
            selection3IsOpen=false;
        }
    }
    else if(selection1IsOpen && (e.target!=select1))
    {
        if(bodyWidth<=375){
            modalSelection.style.height="169%";
            select1.style.height="15%";
            select1.style.top='12%';
            select1.style.border="1px solid rgb(214, 211, 211)";
            selection1.style.display='none';
            selection1IsOpen=false;
        }
        else{
            modalSelection.style.height="90%";
            modalSelection.style.marginBottom="0%";
            selection1.style.display='none';
            select1.style.height="17%";
            select1.style.border="1px solid rgb(214, 211, 211)";
            select1.style.top='18%';
            select2.style.top='38%';
            select3.style.top='58.5%';
            select4.style.top='-2%';
            selection1IsOpen=false;
        }
    }
    else if(selection4IsOpen &&(e.target!=select4))
    {   
        if(bodyWidth<=375){
            modalSelection.style.height="169%";
            select4.style.height="35%";
            select4.style.top="0%";
            select4.style.border="1px solid rgb(214, 211, 211)";
            select3.style.top='57.5%'
            select2.style.top='31.5%';
            select1.style.top='12%';
            selection4.style.display='none';
            selection4IsOpen=false;
        }
        else{
            modalSelection.style.height="90%";
            modalSelection.style.marginBottom="0%";
            select4.style.height="30%";
            select4.style.border="1px solid rgb(214, 211, 211)";
            select2.style.height="16.5%";
            select4.style.top='-10%';
            select2.style.top="38%";
            select3.style.top="58.5%"
            selection4.style.display="none";
            selection4IsOpen = false;
        }
    }
},true);






// function to close modal for outside click
function outSide(e){
    if((e.target==refModalSelection)||(e.target==modal)){
        refModal.style.display='none';
        sucessModal.style.display="none";
        refModalSelection.style.display="block";
        body.style.overflow="auto";
    }
}

//function to close modal
function closeM(){
    refModal.style.display='none';
    body.style.overflow="auto";
}

//function to open modal
function getBack(){
    refModal.style.display='block';
    body.style.overflow="hidden";
}

//function to open narbar modal
function openNavBarModal(){
    body.style.overflow="hidden";
    navBarButton.style.display="none"
    NavBarModal.style.display="block"
}

//function to close menu modal
function closeMenu(){
    navBarButton.style.display="block"
    NavBarModal.style.display="none"
    body.style.overflow="auto";
}

//function to close menu outside click
function menuOutSide(e){
    if(e.target==NavBarModal){
        navBarButton.style.display="block"
        NavBarModal.style.display="none"
        body.style.overflow="auto";
    }
}

//function to open selection 1
function openselection1(){
    if(bodyWidth<=375){
        modalSelection.style.height="178%";
        select1.style.height="17%";
        select1.style.top='10%';
        select1.style.border="2px solid hsl(176, 50%, 47%)";
        selection1.style.display='block';
        selection1IsOpen=true;
    }
    else{
        modalSelection.style.height="95%";
        modalSelection.style.marginBottom="2%";
        selection1.style.display='block';
        select1.style.height="26%";
        select1.style.border="2px solid hsl(176, 50%, 47%)";
        select1.style.top='16%';
        select2.style.top='43.5%';
        select3.style.top='62%';
        select4.style.top='0%';
        selection1IsOpen=true;
    }
}

//fonction to open selection2
function openSelection2(){

    if(bodyWidth<=375){
        modalSelection.style.height="178%";
        select2.style.height="30%";
        select2.style.top="30%";
        select2Paragraph.style.marginTop="1rem";
        selected2.style.marginTop="0%";
        select2.style.border="2px solid hsl(176, 50%, 47%)";
        select3.style.top='61.5%';
        select3.style.height='18%';
        select4.style.top='0%';
        select4.style.height='33%';
        selection2.style.display='block';
        selection2IsOpen=true;
    }
    else{
        modalSelection.style.height="95%";
        modalSelection.style.marginBottom="2%";
        select2.style.height="26%";
        select2.style.border="2px solid hsl(176, 50%, 47%)";
        select2.style.top='36%';
        select3.style.top='63%';
        select4.style.top='1.5%';
        select2Paragraph.style.top="24%";
        selection2.style.display='block';
        selection2IsOpen=true;
    }
}
//function to open selection3

function openSelection3(){
    if(bodyWidth<=375){
        modalSelection.style.height="178%";
        select3.style.height="27%";
        select3.style.top="52.5%";
        select3.style.border="2px solid hsl(176, 50%, 47%)";
        select2.style.top='28%';
        select1.style.top='10%';
        select4.style.top='0%';
        select4.style.height='33%';
        selection3.style.display='block';
        selection3IsOpen=true;
    }
    else{
        modalSelection.style.height="95%";
        modalSelection.style.marginBottom="2%";
        select3.style.height="26%";
        select3.style.border="2px solid hsl(176, 50%, 47%)";
        select2.style.height="16.5%";
        select4.style.top='0%';
        select2.style.top="36%";
        select3.style.top="54%"
        selection3.style.display="block";
        selection3IsOpen = true;
    }
}

//function to open selection 4
function openSelection4(){
    if(bodyWidth<=375){
        modalSelection.style.height="178%";
        select4.style.height="45%";
        select4.style.top="0.5%";
        select4.style.border="2px solid hsl(176, 50%, 47%)";
        select3.style.top='52.5%'
        select2.style.top='28%';
        select1.style.top='10%';
        selection4.style.display='block';
        selection4IsOpen=true;
    }
    else{
        modalSelection.style.height="95%";
        modalSelection.style.marginBottom="2%";
        select4.style.height="46%";
        select4.style.border="2px solid hsl(176, 50%, 47%)";
        select2.style.height="16.5%";
        select4.style.top='0%';
        select2.style.top="37%";
        select3.style.top="55%"
        selection4.style.display="block";
        selection4IsOpen = true;
    }
}

//function to open sucess modal
function openSucessModal(){
    refModalSelection.style.display="none";
    sucessModal.style.display="block";
    
}

//function to close sucess modal
function closeSucessModalF(){
    refModalSelection.style.display="block";
    sucessModal.style.display="none";
    refModal.style.display="none";
    body.style.overflow="auto";
}

/* n'utilise plus car ca ete remplacé en haut laba
fontion to close selection2

function closeSelection2(e){
    if(e.target==modalSelection){
        
        modalSelection.style.height="90%";
        modalSelection.style.marginBottom="0%";
        select3.style.top='61.5%';
        select2.style.height="20%";
        select2.style.border="1px solid rgb(214, 211, 211)";
        select4.style.top='-4%';
        paragraph.classList.remove('paragraph');
        selection2.style.display='none';
       
    }
}

function to close selection3

function closeSelection3(e){
    if(e.target==modalSelection){
        
        modalSelection.style.height="90%";
        modalSelection.style.marginBottom="0%";
        select3.style.border="1px solid rgb(214, 211, 211)";
        selection3.style.display='none';
        select2.style.height="17%";
        select3.style.top='61.5%';
        select3.style.height="15%";
        select4.style.top='-4%';
        select2.style.top="38%";
    
    }
}*/