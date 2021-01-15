// const questiontrack= document.getElementsByClassName('question-track');

// window.addEventListener('load',()=>{
  
// })

const pitanja=[

    {id:1,
    pitanje:"Na što se odnosi broj '3' u imenu Info3-a",
    odgovori:[{id:1,odgovor:'IT',clicked:false}
    ,{id:2,odgovor:"3 sekcije",clicked:false},
    {id:3,odgovor:"3 poena",clicked:false},
    {id:4,odgovor:"3 djeteta",clicked:false},
    {id:5,odgovor:"ekologiju",clicked:false},
    {id:6,odgovor:"3 žice",clicked:false},
    {id:7,odgovor:"3 projekta",clicked:false},
    {id:8,odgovor:"3 programera",clicked:false}]
    },
    {id:2,
        pitanje:"Što je točno. Varaždin je... ",
        odgovori:[{id:1,odgovor:"bio glavni grad",clicked:false}
        ,{id:2,odgovor:"najveći SZ Hrvatske",clicked:false},
        {id:3,odgovor:"grad Špancirfesta",clicked:false},
        {id:4,odgovor:"u Dalmaciji",clicked:false},
        {id:5,odgovor:"slavonski grad",clicked:false},
        {id:6,odgovor:"površine 60km2",clicked:false},
        {id:7,odgovor:"nosilac auto-oznake VZ",clicked:false},
        {id:8,odgovor:"pored Drave",clicked:false}]
        },
        {id:3,
            pitanje:"Koje su tri sekcije u firmi Info3 ",
            odgovori:[{id:1,odgovor:"ERP",clicked:false}
            ,{id:2,odgovor:"ECM",clicked:false},
            {id:3,odgovor:"Marketing",clicked:false},
            {id:4,odgovor:"ERP",clicked:false},
            {id:5,odgovor:"MERP",clicked:false},
            {id:6,odgovor:"Razvoj aplikacija",clicked:false},
            {id:7,odgovor:"ERP",clicked:false},
            {id:8,odgovor:"ECP",clicked:false}]
            },
            {id:4,
                pitanje:"Koje su tri sekcije u firmi Info3 ",
                odgovori:[
                {id:1,odgovor:"ERP",clicked:false}
                ,{id:2,odgovor:"ECM",clicked:false},
                {id:3,odgovor:"Marketing",clicked:false},
                {id:4,odgovor:"ERP",clicked:false},
                {id:5,odgovor:"MERP",clicked:false},
                {id:6,odgovor:"Razvoj aplikacija",clicked:false},
                {id:7,odgovor:"ERP",clicked:false},
                {id:8,odgovor:"ECP",clicked:false}]
                },
];
let n;
let dozvoljenbroj=2+n;



function startquizz(data){
    data.forEach(pitanje => {
      pokaziPitanje(pitanje);
    });    
}

function pokaziPitanje(p){
    const questiontrack= document.querySelector(".question-track");
    const brojpitanja=document.createElement('div');
    brojpitanja.classList.add("track-broj");
    brojpitanja.innerHTML=
        `
        <p class="line-broj" onclick="promjeniPitanje(${p.id})">${p.id}</p>
        `
    questiontrack.appendChild(brojpitanja);
}
function changeColor(){
    const box= document.querySelector(".question-track").children;
    for (var i = 0; i < sviodgovori.length; i++) {
        //    console.log(svians[i]);
       if(sviodgovori[i].length>0){
            box[i].classList.add('active');
       }
      }     
   
}



function pokaziOdgovore(o){
    const answers= document.querySelector('.answers');
    
    const answer=document.createElement('div');
    answer.classList.add("answer-box");
    answer.innerHTML=
    `
    <p class="answer"  value=${o.clicked} name="${o.odgovor}" id=${o.id} onclick="selectAnswer(this)"; >${o.odgovor}</p>
    `;
    answers.appendChild(answer);
}


let sviodgovori=[
    [],[],[],[]
];
let broj1;
let broj2;
let broj3;
let broj4;


function selectAnswer(e){
    console.log(e.getAttribute('name'),typeof e.getAttribute('value'),e.getAttribute('id'));
    let odgovor={
        id:e.getAttribute('id'),
        name:e.getAttribute('name')
    }

// CHECK NUM OF ANSWERS
    if(sviodgovori[n-1].length>n+1){
        const alert= document.querySelector('.alert');
            alert.classList.add('active');
            alert.innerHTML=`
                <h2>Dosegli ste maksimalan broj odgovora, u pitanju ${n}</h2>
            `
            setTimeout(function(){  alert.classList.remove('active'); }, 3000);

// CHECK IF ANSWER ALEREADY EXIST
    }else if((sviodgovori[n-1].find(p=>Number(p.id)==Number(odgovor.id)))){
        const alert= document.querySelector('.alert');
            alert.classList.add('active');
            alert.innerHTML=`
                <h2>Pitanje je već odabrano</h2>
            `
            setTimeout(function(){  alert.classList.remove('active'); }, 3000);

// PUSH ANSWER IN ARRAY
    }else{
       
       
        sviodgovori[n-1].push(odgovor);
        zadnjaProvjera();
        prevNextBtn();
        changeColor();
    }
    console.log(
      "svi odg",sviodgovori[0],sviodgovori[1],sviodgovori[2],sviodgovori[3]
    )
    console.log(n+2);
    console.log(sviodgovori[n-1]);
   
}
  


  function displaypitanje(data,id){
    const question= document.querySelector(".question");
    const pi= pitanja.find(p=>p.id==id+1);

  
    question.innerHTML=
    `
        <span class="text-pitanja">${data[id].pitanje}</span>
    `;
    let sviodg= pi.odgovori;
    if(n==1){
        sviodg=sviodg.slice(0,broj1);
    }else if(n==2){
        sviodg=sviodg.slice(0,broj2);
    }else if(n==3){
        sviodg=sviodg.slice(0,broj3);
    }else{
        sviodg=sviodg.slice(0,broj4);
    }
   sviodg.forEach(o=>{
        return(
            pokaziOdgovore(o)
        )
    })
    
}

function removeQuestions(){
    const answers= document.querySelector('.answers');
   while(answers.firstChild){
       answers.removeChild(answers.firstChild);
   }
}

function getRndInteger(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;
  }

  function prevNextBtn(){
    const prev= document.querySelector('.prev');
    const next= document.querySelector('.next');
    const finish= document.querySelector('.finish');
      if(n<2){
         prev.classList.add("hidden");    
      }else{
        prev.classList.remove("hidden")
      }
      if(n>3){
        next.classList.add("hidden");
      }else{
        next.classList.remove("hidden")
      }

      
      if(n==4 && (checkvariabla.length>3)){
            finish.classList.add("active");
      }else{
        finish.classList.remove("active")
      }

  }
  let checkvariabla;
  function zadnjaProvjera(){
     checkvariabla=sviodgovori.filter(a=>a.length>0);
     console.log(checkvariabla.length,'ch')
  }

function finish(){
    const question= document.querySelector(".question");
    let svians=document.getElementsByClassName('ans');
    let b=0;
   
    console.log(sviodgovori[0],sviodgovori[1],svians,question.children[0])
for (var i = 0; i <sviodgovori.length; i++) {
    finalIspis(i);
  }     
 
}
function finalIspis(i){
    const question= document.querySelector(".question");
    const answers= document.querySelector(".answers");
    const questiontrack= document.querySelector(".question-track");
    const prev= document.querySelector('.prev');
    const next= document.querySelector('.next');
    let svians=document.getElementsByClassName('ans'); 
   
    ans1.style.visibility="visible";
    ans2.style.visibility="visible";
    ans3.style.visibility="visible";
    ans4.style.visibility="visible";
    prev.classList.add('hidden');
    next.classList.add('hidden');
    questiontrack.style.display="none";
    question.style.display="none";
    answers.style.display="none";
    sviodgovori[i].forEach(a=>{
        svians[i].innerHTML+=`
            <span>${a.id}:${a.name}</span>
        `
    })
}


window.onload = () => {
    broj1=getRndInteger(2,9);
    broj2=getRndInteger(2,9);
    broj3=getRndInteger(2,9);
    broj4=getRndInteger(2,9);
    
    startquizz(pitanja);
    n=1;
    prevNextBtn();
    displaypitanje(pitanja,0)
  };

   function promjeniPitanje(id){
   n=id;
   prevNextBtn();
   removeQuestions();
      displaypitanje(pitanja,id-1);

  }

  