'use strict';
{
  const imgs = [
    [	//カズマ
      [ 1001100 ],	//★1
      [ 1002100,1002102 ],	//★2
      [ 1003100,1003104,1003107,1003129,1003148 ],	//★3
      [ 1004100,1004116,1004119,1004127,1004150 ],	//★4
    ],	
    [	//アクア
      [ 1011100 ],	//★1
      [ 1012100,1012102 ],	//★2
      [ 1013100,1013104,1013116,1013120,1013129 ],	//★3
      [ 1014100,1014107,1014123,1014132,1014148,1014150 ],	//★4
    ],	
    [	//めぐみん
      [ 1021100 ],	//★1
      [ 1022100,1022102 ],	//★2
      [ 1023100,1023104,1023107,1023123 ],	//★3
      [ 1024100,1024113,1024118,1024126,1024132,1024148,1024150 ],	//★4
    ],	
    [	//ダクネス
      [ 1031100 ],	//★1
      [ 1032100,1032102 ],	//★2
      [ 1033100,1033104,1033113,1033131,1033148 ],	//★3
      [ 1034100,1034107,1034123,1034135,1034150 ],	//★4
    ],	
    [	//クリス
      [ 1041100 ],	//★1
      [ 1042100,1042102 ],	//★2
      [ 1043100,1043114,1043136 ],	//★3
      [ 1044100,1044110,1044117,1044125 ],	//★4
    ],	
    [	//ウィズ
      [ 1051100 ],	//★1
      [ 1052100,1052102 ],	//★2
      [ 1053100,1053115,1053127,1053140 ],	//★3
      [ 1054100,1054113,1054123,1054130,1054135 ],	//★4
    ],	
    [	//ゆんゆん
      [ 1061100 ],	//★1
      [ 1062100,1062102 ],	//★2
      [ 1063100,1063113,1063116,1063123,1063126,1063137 ],	//★3
      [ 1064100,1064107,1064118,1064129 ],	//★4
    ],	
    [	//アイリス
      [ 1071100 ],	//★1
      [ 1072100,1072102 ],	//★2
      [ 1073100,1073124,1073135 ],	//★3
      [ 1074100,1074114,1074119,1074129,1074140 ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//セシリー
      [ 1091100 ],	//★1
      [ 1092100,1092102 ],	//★2
      [ 1093100,1093123,1093130 ],	//★3
      [ 1094100,1094114,1094126,1094140 ],	//★4
    ],	
    [	//あるえ
      [ 1101100 ],	//★1
      [ 1102100,1102102 ],	//★2
      [ 1103100,1103107,1103118,1103134 ],	//★3
      [ 1104100,1104110,1104116,1104127 ],	//★4
    ],	
    [	//ミツルギ
      [ 1111100 ],	//★1
      [ 1112100,1112102 ],	//★2
      [ 1113100,1113119,1113131,1113136 ],	//★3
      [ 1114100,1114110,1114114,1114127 ],	//★4
    ],	
    [	//ダスト
      [ 1121100 ],	//★1
      [ 1122100,1122102 ],	//★2
      [ 1123100,1123120,1123134 ],	//★3
      [ 1124100,1124107,1124110,1124125 ],	//★4
    ],	
    [	//リーン
      [ 1131100 ],	//★1
      [ 1132100,1132102 ],	//★2
      [ 1133100,1133115,1133128,1133136 ],	//★3
      [ 1134100,1134110,1134117,1134123 ],	//★4
    ],	
    [	//リア
      [ 1141100 ],	//★1
      [ 1142100,1142102 ],	//★2
      [ 1143100,1143112,1143123,1143127,1143140,1143150 ],	//★3
      [ 1144100,1144105,1144130 ],	//★4
    ],	
    [	//シエロ
      [ 1151100 ],	//★1
      [ 1152100,1152102 ],	//★2
      [ 1153100,1153112,1153125,1153152 ],	//★3
      [ 1154100,1154105,1154113,1154117 ],	//★4
    ],	
    [	//エーリカ
      [ 1161100 ],	//★1
      [ 1162100,1162102 ],	//★2
      [ 1163100,1163110,1163111,1163113,1163124 ],	//★3
      [ 1164100,1164105,1164130 ],	//★4
    ],	
    [	//メリッサ
      [ 1171100 ],	//★1
      [ 1172100,1172102 ],	//★2
      [ 1173100,1173117,1173135 ],	//★3
      [ 1174100,1174107,1174123,1174130 ],	//★4
    ],	
    [	//ミーア
      [ 1181100 ],	//★1
      [ 1182100,1182102 ],	//★2
      [ 1183100,1183123,1183130,1183135 ],	//★3
      [ 1184100,1184113,1184117,1184127 ],	//★4
    ],	
    [	//エイミー
      [ 1191100 ],	//★1
      [ 1192100,1192102 ],	//★2
      [ 1193100,1193128,1193136 ],	//★3
      [ 1194100,1194113,1194117,1194125 ],	//★4
    ],	
    [	//こめっこ
      [ 1201100 ],	//★1
      [ 1202100,1202102 ],	//★2
      [ 1203100,1203151 ],	//★3
      [ 1204100 ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//エミリア
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [ 1474132 ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [  ],	//★4
    ],	
    [	//レム
      [  ],	//★1
      [  ],	//★2
      [  ],	//★3
      [ 1504132 ],	//★4
    ],	
  ];

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

  const MemberTable = [ //キャラ追加時はケツに
    1001100	,
    1002100	,
    1002102	,
    1003100	,
    1003104	,
    1003107	,
    1003129	,
    1003148	,
    1004100	,
    1004116	,
    1004119	,
    1004127	,
    1004150	,
    1011100	,
    1012100	,
    1012102	,
    1013100	,
    1013104	,
    1013116	,
    1013120	,
    1013129	,
    1014100	,
    1014107	,
    1014123	,
    1014132	,
    1014148	,
    1014150	,
    1021100	,
    1022100	,
    1022102	,
    1023100	,
    1023104	,
    1023107	,
    1023123	,
    1024100	,
    1024113	,
    1024118	,
    1024126	,
    1024132	,
    1024148	,
    1024150	,
    1031100	,
    1032100	,
    1032102	,
    1033100	,
    1033104	,
    1033113	,
    1033131	,
    1033148	,
    1034100	,
    1034107	,
    1034123	,
    1034135	,
    1034150	,
    1041100	,
    1042100	,
    1042102	,
    1043100	,
    1043114	,
    1043136	,
    1044100	,
    1044110	,
    1044117	,
    1044125	,
    1051100	,
    1052100	,
    1052102	,
    1053100	,
    1053115	,
    1053127	,
    1053140	,
    1054100	,
    1054113	,
    1054123	,
    1054130	,
    1054135	,
    1061100	,
    1062100	,
    1062102	,
    1063100	,
    1063113	,
    1063116	,
    1063123	,
    1063126	,
    1063137	,
    1064100	,
    1064107	,
    1064118	,
    1064129	,
    1071100	,
    1072100	,
    1072102	,
    1073100	,
    1073124	,
    1073135	,
    1074100	,
    1074114	,
    1074119	,
    1074129	,
    1074140	,
    1091100	,
    1092100	,
    1092102	,
    1093100	,
    1093123	,
    1093130	,
    1094100	,
    1094114	,
    1094126	,
    1094140	,
    1101100	,
    1102100	,
    1102102	,
    1103100	,
    1103107	,
    1103118	,
    1103134	,
    1104100	,
    1104110	,
    1104116	,
    1104127	,
    1111100	,
    1112100	,
    1112102	,
    1113100	,
    1113119	,
    1113131	,
    1113136	,
    1114100	,
    1114110	,
    1114114	,
    1114127	,
    1121100	,
    1122100	,
    1122102	,
    1123100	,
    1123120	,
    1123134	,
    1124100	,
    1124107	,
    1124110	,
    1124125	,
    1131100	,
    1132100	,
    1132102	,
    1133100	,
    1133115	,
    1133128	,
    1133136	,
    1134100	,
    1134110	,
    1134117	,
    1134123	,
    1141100	,
    1142100	,
    1142102	,
    1143100	,
    1143112	,
    1143123	,
    1143127	,
    1143140	,
    1143150	,
    1144100	,
    1144105	,
    1144130	,
    1151100	,
    1152100	,
    1152102	,
    1153100	,
    1153112	,
    1153125	,
    1153152	,
    1154100	,
    1154105	,
    1154113	,
    1154117	,
    1161100	,
    1162100	,
    1162102	,
    1163100	,
    1163110	,
    1163111	,
    1163113	,
    1163124	,
    1164100	,
    1164105	,
    1164130	,
    1171100	,
    1172100	,
    1172102	,
    1173100	,
    1173117	,
    1173135	,
    1174100	,
    1174107	,
    1174123	,
    1174130	,
    1181100	,
    1182100	,
    1182102	,
    1183100	,
    1183123	,
    1183130	,
    1183135	,
    1184100	,
    1184113	,
    1184117	,
    1184127	,
    1191100	,
    1192100	,
    1192102	,
    1193100	,
    1193128	,
    1193136	,
    1194100	,
    1194113	,
    1194117	,
    1194125	,
    1201100	,
    1202100	,
    1202102	,
    1203100	,
    1203151	,
    1204100	,
    1474132	,
    1504132	,
  ];

  // const names = [
  //   'kazuma', 'aqua'
  // ];

  const members = document.getElementById('members');
  const party = document.getElementById('party');

  const memberslist = document.getElementById('memberslist');
  const partylist = document.getElementById('partylist');


// ********** 画像表示リスト作成処理 ****************************************

  //キャラループ
  imgs.forEach((img1,i) => {
    //レアループ
    img1.forEach(img2 => {
      //メンバーループ
      img2.forEach(img3=> {

        const div = document.createElement('div');
        const li = document.createElement('li');
      
        div.style.width = '64px';
        div.style.height = '64px';
        div.style.backgroundImage = `url(img/member/${img3}.png)`;
      
        // li.classList.add(`${names[i]}`);
      
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
    });
  });

  const offbtn = document.getElementById('offbtn');
  const rank1offbtn = document.getElementById('rank1offbtn');
  const rank2offbtn = document.getElementById('rank2offbtn');
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
    let n = 0;
    //キャラループ
    imgs.forEach((img1) => {
      //レアループ
      img1.forEach((img2,j) => {
        //メンバーループ
        img2.forEach(() => {
          if (j===0 && !memli[n].classList.contains('nothing')){
            memli[n].classList.add('nothing');
          }
          n ++;
        });
      });
    });
    passwd(memli, imgs);
  });

  rank2offbtn.addEventListener('click', ()=>{
    let n = 0;
    //キャラループ
    imgs.forEach((img1) => {
      //レアループ
      img1.forEach((img2,j) => {
        //メンバーループ
        img2.forEach(() => {
          if (j===1 && !memli[n].classList.contains('nothing')){
            memli[n].classList.add('nothing');
          }
          n ++;
        });
      });
    });
    passwd(memli, imgs);
  });


  const fukuexe = document.getElementById('fukuexe');
  fukuexe.addEventListener('click', ()=>{
    passfukki(memli, imgs);
  });

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
    imgs.forEach((img1,k) => {
      //レアループ
      img1.forEach((img2,j) => {
        //メンバーループ
        img2.forEach((img3,i)=> {

          if(!membericons[num].classList.contains('nothing')){

            const member = document.createElement('div');

            member.style.backgroundImage = `url(img/member/${img3}.png)`;
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
    });

  });

  function passwd(memli,imgs){

    let MemberID = [];

    //キャラループ
    imgs.forEach(img1 => {
      //レアループ
      img1.forEach(img2 => {
        //メンバーループ
        img2.forEach(img3 => {
          for (let n=0; n<MemberTable.length; n++){
            if (img3 === MemberTable[n]){
              MemberID.push(n);
              break;
            }
          }
        });
      });
    });

    let sevencount = 0;
    let passBin = '';
    let passDec = 0;
    let pswd = '';
    
    MemberID.forEach(index =>{
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
  }



  function passfukki(memli,imgs){

    let MemberID = [];

    //キャラループ
    imgs.forEach(img1 => {
      //レアループ
      img1.forEach(img2 => {
        //メンバーループ
        img2.forEach(img3 => {
          for (let n=0; n<MemberTable.length; n++){
            if (img3 === MemberTable[n]){
              MemberID.push(n);
              break;
            }
          }
        });
      });
    });

    const fukuID = document.getElementById('fuku').value;
    let moji = '';
    let IDbin = '';

    // console.log(fukuID);
    MemberID.forEach((e,i) => {

      if (i%7 === 0){
        moji = fukuID.substr(Math.floor(i/7),1);
        sinsu128.forEach((code,j) => {
          if (code === moji) {
            IDbin = ('0000000' + j.toString(2)).substr(-7);
            // console.log(IDbin);
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


}