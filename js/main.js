'use strict';

const sinsu128 = [
  '0','1','2','3','4','5','6','7',
  '8','9','a','b','c','d','e','f',
  'g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v',
  'w','x','y','z','A','B','C','D',
  'E','F','G','H','I','J','K','L',
  'M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z','ｱ','ｲ',
  'ｳ','ｴ','ｵ','ｶ','ｷ','ｸ','ｹ','ｺ',
  'ｻ','ｼ','ｽ','ｾ','ｿ','ﾀ','ﾁ','ﾂ',
  'ﾃ','ﾄ','ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ﾊ',
  'ﾋ','ﾌ','ﾍ','ﾎ','ﾏ','ﾐ','ﾑ','ﾒ',
  'ﾓ','ﾔ','ﾕ','ﾖ','ﾜ','ｦ','ﾝ','!',
  '#','$','%','&','(',')','-','=',
  '^','~','|','@','[','{',']','}',
  ':','*',';','+','_','?','>','<',
]; // 7bit


const members = document.getElementById('members');
const party = document.getElementById('party');

const memberslist = document.getElementById('memberslist');
const partylist = document.getElementById('partylist');


// ********** 画像表示リスト作成処理 ****************************************

//キャラループ
imgs.forEach(img => {

  const div = document.createElement('div');
  const li = document.createElement('li');

  div.style.width = '64px';
  div.style.height = '64px';
  div.style.backgroundImage = `url(img/member/${img.id}.png)`;

  memberslist.appendChild(li);
  li.appendChild(div);

  li.addEventListener('click', ()=>{
    if (li.classList.contains('nothing')){
      li.classList.remove('nothing');
    } else {
      li.classList.add('nothing');
    }
    passwd(memli, imgs);
  });

});

const offbtn = document.getElementById('offbtn');
const rank1offbtn = document.getElementById('rank1offbtn');
const rank2offbtn = document.getElementById('rank2offbtn');
const rank3offbtn = document.getElementById('rank3offbtn');
const rank4offbtn = document.getElementById('rank4offbtn');
const onbtn = document.getElementById('onbtn');

const memli = document.querySelectorAll('#memberslist > li');

offbtn.addEventListener('click', ()=>{
  for (let i=0; i<memli.length; i++){
    if (!memli[i].classList.contains('nothing')){
      memli[i].classList.add('nothing');
    }
  }
  passwd(memli, imgs);
});

onbtn.addEventListener('click', ()=>{
  for (let i=0; i<memli.length; i++){
    if (memli[i].classList.contains('nothing')){
      memli[i].classList.remove('nothing');
    }
  }
  passwd(memli, imgs);
});

rank1offbtn.addEventListener('click', ()=>{
  imgs.forEach((img,i) => {
    if (img.rare === 1){
      if (!memli[i].classList.contains('nothing')){
        memli[i].classList.add('nothing');
      }
    }
  });
  passwd(memli, imgs);
});

rank2offbtn.addEventListener('click', ()=>{
  imgs.forEach((img,i) => {
    if (img.rare === 2){
      if (!memli[i].classList.contains('nothing')){
        memli[i].classList.add('nothing');
      }
    }
  });
  passwd(memli, imgs);
});

rank3offbtn.addEventListener('click', ()=>{
  imgs.forEach((img,i) => {
    if (img.rare === 3){
      if (!memli[i].classList.contains('nothing')){
        memli[i].classList.add('nothing');
      }
    }
  });
  passwd(memli, imgs);
});

rank4offbtn.addEventListener('click', ()=>{
  imgs.forEach((img,i) => {
    if (img.rare === 4){
      if (!memli[i].classList.contains('nothing')){
        memli[i].classList.add('nothing');
      }
    }
  });
  passwd(memli, imgs);
});


const fukuexe = document.getElementById('fukuexe');
fukuexe.addEventListener('click', ()=>{
  const fukuID = document.getElementById('fuku').value;
  passfukki(memli, imgs, fukuID);
});


//再訪問時復帰
const fukugen = localStorage.getItem('konofanchars');
if (fukugen){
  passfukki(memli, imgs, fukugen);
  const fukugentext = document.getElementById('fukugentext');
  fukugentext.textContent = fukugen;
}

// ********** 編成画面処理 ****************************************

const partybtn = document.getElementById('partybtn');

const MaxPartyNumber = 15;


partybtn.addEventListener('click', ()=>{
  
  let chars = [];
  for (let i=0; i<MaxPartyNumber; i++){

    const memberframe = document.createElement('div');
    const membername = document.createElement('div');
    const charcontainer = document.createElement('div');
    const mainchar = document.createElement('div'); 
    const subchar1 = document.createElement('div'); 
    const subchar2 = document.createElement('div');
    
    membername.textContent = i+1;
    mainchar.textContent = 'メイン';
    subchar1.textContent = 'サブ１';
    subchar2.textContent = 'サブ２';

    memberframe.classList.add('memberframe');
    membername.classList.add('membername');
    charcontainer.classList.add('charcontainer');
    mainchar.classList.add('mainchar');
    subchar1.classList.add('subchar');
    subchar2.classList.add('subchar');

    partylist.appendChild(memberframe);
    memberframe.appendChild(membername);
    membername.appendChild(charcontainer);
    charcontainer.appendChild(mainchar);
    charcontainer.appendChild(subchar1);
    charcontainer.appendChild(subchar2);

    const charObj = {
      main : mainchar,
      sub1 : subchar1,
      sub2 : subchar2,
    };
    chars.push(charObj);
  }

  members.classList.add('invisible');
  party.classList.remove('invisible');

  const membericons = document.querySelectorAll('#memberslist > li');
  let num = 0;
  let memberCount = 0;
  const colmax = 14;

  //キャラループ
  imgs.forEach(img => {

    if(!membericons[num].classList.contains('nothing')){

      const member = document.createElement('div');

      member.style.backgroundImage = `url(img/member/${img.id}.png)`;
      member.style.width = '48px';
      member.style.height = '48px';
      member.style.backgroundSize = '48px';
      member.classList.add('membericon');
      
      const membericons = document.getElementById('membericons');
      membericons.appendChild(member);

      member.style.gridColumn = (memberCount % colmax) +1;
      member.style.gridRow = Math.floor(memberCount / colmax) +1;
      memberCount++;

      //メンバーアイコンのドラッグ処理
      member.onmousedown = function(){
        document.addEventListener("mousemove", onMouseMove);
      }
      let onMouseMove = function(event){
        member.style.position = 'absolute';
        // let x = event.clientX;
        // let y = event.clientY;
        let x = event.pageX;
        let y = event.pageY;
        let width = member.offsetWidth;
        let height = member.offsetHeight;
        member.style.top = (y-height/2) + "px";
        member.style.left = (x-width/2) + "px";
      }

      //メンバーアイコンのドロップ処理
      member.onmouseup = function(event){
        let x = event.pageX;
        let y = event.pageY;
        let x2 = x - event.clientX;
        let y2 = y - event.clientY;
        let width = member.offsetWidth;
        let height = member.offsetHeight;

        for (let i=0; i<MaxPartyNumber; i++){

          const mainRect = chars[i].main.getBoundingClientRect();
          const sub1Rect = chars[i].sub1.getBoundingClientRect();
          const sub2Rect = chars[i].sub2.getBoundingClientRect();

          if (x>=(mainRect.left+x2) && x<=(mainRect.left+mainRect.width+x2) &&
          y>=(mainRect.top+y2) && y<=(mainRect.top+mainRect.height+y2)){

            // console.log(x, mainRect.left+x2);

            member.style.top = mainRect.top+y2 +1 + "px";
            member.style.left = mainRect.left+x2 +1 + "px";

            member.style.width = '64px';
            member.style.height = '64px';
            member.style.backgroundSize = '64px';
            break;

          } else {
            member.style.width = '48px';
            member.style.height = '48px';
            member.style.backgroundSize = '48px';
          }

          if (x>=(sub1Rect.left+x2) && x<=(sub1Rect.left+sub1Rect.width+x2) &&
          y>=(sub1Rect.top+y2) && y<=(sub1Rect.top+sub1Rect.height+y2)){

            member.style.top = sub1Rect.top+y2 +1 + "px";
            member.style.left = sub1Rect.left+x2 +1 + "px";
            member.style.width = '48px';
            member.style.height = '48px';
            member.style.backgroundSize = '48px';
            break;

          }

          if (x>=(sub2Rect.left+x2) && x<=(sub2Rect.left+sub2Rect.width+x2) &&
          y>=(sub2Rect.top+y2) && y<=(sub2Rect.top+sub2Rect.height+y2)){

            member.style.top = sub2Rect.top+y2 +1 + "px";
            member.style.left = sub2Rect.left+x2 +1 + "px";
            member.style.width = '48px';
            member.style.height = '48px';
            member.style.backgroundSize = '48px';
            break;

          }

        }

        document.removeEventListener("mousemove", onMouseMove);
      }

    }
    num ++;

  });

});

function passwd(memli,imgs){

  let MemberIndex = [];

  //キャラループ
  for (let n=0; n<MemberTable.length; n++){
    imgs.forEach((img,index) => {
      if (img.id === MemberTable[n]){
        MemberIndex.push(index);
      }
    });
  }
  
  let sevencount = 0;
  let passBin = '';
  let passDec = 0;
  let pswd = '';
  
  MemberIndex.forEach(index =>{
    if (memli[index].classList.contains('nothing')){
      passBin += "0";
    } else {
      passBin += "1";
    }
    sevencount++;
    
    if (sevencount === 7){
      sevencount = 0;
      passDec = parseInt(passBin, 2);
      passBin = '';

      pswd += sinsu128[passDec];
    }
  });

  if (sevencount !== 0){
    sevencount = 0;
    passBin = (passBin + '0000000').substr(0,7);
    passDec = parseInt(passBin, 2);
    passBin = '';

    pswd += sinsu128[passDec];
  }

  const fukugentext = document.getElementById('fukugentext');
  fukugentext.textContent = pswd;
  localStorage.setItem('konofanchars', pswd);
}



function passfukki(memli,imgs,fukuID){

  let MemberIndex = [];

  //キャラループ
  for (let n=0; n<MemberTable.length; n++){
    imgs.forEach((img,index) => {
      if (img.id === MemberTable[n]){
        MemberIndex.push(index);
      }
    });
  }

  let moji = '';
  let IDbin = '';

  // console.log(fukuID);
  MemberIndex.forEach((e,i) => {

    if (i%7 === 0){
      if (fukuID.length > Math.floor(i/7)) {
        moji = fukuID.substr(Math.floor(i/7),1);
      } else {
        moji = '0';
      }
      sinsu128.forEach((code,j) => {
        if (code === moji) {
          IDbin = ('0000000' + j.toString(2)).substr(-7);
          console.log(IDbin);
        }
      });
    }

    if (IDbin.substr(i%7, 1) === '0'){
      memli[e].classList.add('nothing');
    } else {
      memli[e].classList.remove('nothing');
    }
    
  });

}

