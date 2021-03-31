'use strict';
{
  const imgs = [
    {id:1001100,    name:'kazuma',    rare:1,   element:'water'},
    {id:1002100,    name:'kazuma',    rare:2,   element:'fire'},
    {id:1002102,    name:'kazuma',    rare:2,   element:'earth'},
    {id:1003100,    name:'kazuma',    rare:3,   element:'wind'},
    {id:1003104,    name:'kazuma',    rare:3,   element:'dark'},
    {id:1003107,    name:'kazuma',    rare:3,   element:'light'},
    {id:1003129,    name:'kazuma',    rare:3,   element:'fire'},
    {id:1003148,    name:'kazuma',    rare:3,   element:'earth'},
    {id:1003153,    name:'kazuma',    rare:3,   element:'dark'},
    {id:1004100,    name:'kazuma',    rare:4,   element:'water'},
    {id:1004116,    name:'kazuma',    rare:4,   element:'light'},
    {id:1004119,    name:'kazuma',    rare:4,   element:'earth'},
    {id:1004127,    name:'kazuma',    rare:4,   element:'dark'},
    {id:1004150,    name:'kazuma',    rare:4,   element:'wind'},
    {id:1011100,    name:'aqua',      rare:1,   element:'water'},
    {id:1012100,    name:'aqua',      rare:2,   element:'light'},
    {id:1012102,    name:'aqua',      rare:2,   element:'earth'},
    {id:1013100,    name:'aqua',      rare:3,   element:'light'},
    {id:1013104,    name:'aqua',      rare:3,   element:'water'},
    {id:1013116,    name:'aqua',      rare:3,   element:'none'},
    {id:1013120,    name:'aqua',      rare:3,   element:'thunder'},
    {id:1013129,    name:'aqua',      rare:3,   element:'none'},
    {id:1014100,    name:'aqua',      rare:4,   element:'water'},
    {id:1014107,    name:'aqua',      rare:4,   element:'light'},
    {id:1014123,    name:'aqua',      rare:4,   element:'thunder'},
    {id:1014132,    name:'aqua',      rare:4,   element:'wind'},
    {id:1014148,    name:'aqua',      rare:4,   element:'earth'},
    {id:1014150,    name:'aqua',      rare:4,   element:'water'},
    {id:1021100,    name:'megumin',   rare:1,   element:'fire'},
    {id:1022100,    name:'megumin',   rare:2,   element:'fire'},
    {id:1022102,    name:'megumin',   rare:2,   element:'thunder'},
    {id:1023100,    name:'megumin',   rare:3,   element:'fire'},
    {id:1023104,    name:'megumin',   rare:3,   element:'thunder'},
    {id:1023107,    name:'megumin',   rare:3,   element:'light'},
    {id:1023123,    name:'megumin',   rare:3,   element:'dark'},
    {id:1024100,    name:'megumin',   rare:4,   element:'fire'},
    {id:1024113,    name:'megumin',   rare:4,   element:'dark'},
    {id:1024118,    name:'megumin',   rare:4,   element:'water'},
    {id:1024126,    name:'megumin',   rare:4,   element:'wind'},
    {id:1024132,    name:'megumin',   rare:4,   element:'light'},
    {id:1024148,    name:'megumin',   rare:4,   element:'earth'},
    {id:1024150,    name:'megumin',   rare:4,   element:'light'},
    {id:1031100,    name:'dakunesu',  rare:1,   element:'light'},
    {id:1032100,    name:'dakunesu',  rare:2,   element:'thunder'},
    {id:1032102,    name:'dakunesu',  rare:2,   element:'earth'},
    {id:1033100,    name:'dakunesu',  rare:3,   element:'earth'},
    {id:1033104,    name:'dakunesu',  rare:3,   element:'wind'},
    {id:1033113,    name:'dakunesu',  rare:3,   element:'fire'},
    {id:1033131,    name:'dakunesu',  rare:3,   element:'none'},
    {id:1033148,    name:'dakunesu',  rare:3,   element:'earth'},
    {id:1034100,    name:'dakunesu',  rare:4,   element:'none'},
    {id:1034107,    name:'dakunesu',  rare:4,   element:'none'},
    {id:1034123,    name:'dakunesu',  rare:4,   element:'none'},
    {id:1034135,    name:'dakunesu',  rare:4,   element:'none'},
    {id:1034150,    name:'dakunesu',  rare:4,   element:'light'},
    {id:1041100,    name:'chris',     rare:1,   element:'wind'},
    {id:1042100,    name:'chris',     rare:2,   element:'light'},
    {id:1042102,    name:'chris',     rare:2,   element:'thunder'},
    {id:1043100,    name:'chris',     rare:3,   element:'water'},
    {id:1043114,    name:'chris',     rare:3,   element:'thunder'},
    {id:1043136,    name:'chris',     rare:3,   element:'light'},
    {id:1044100,    name:'chris',     rare:4,   element:'wind'},
    {id:1044110,    name:'chris',     rare:4,   element:'thunder'},
    {id:1044117,    name:'chris',     rare:4,   element:'fire'},
    {id:1044125,    name:'chris',     rare:4,   element:'light'},
    {id:1051100,    name:'wiz',       rare:1,   element:'dark'},
    {id:1052100,    name:'wiz',       rare:2,   element:'water'},
    {id:1052102,    name:'wiz',       rare:2,   element:'earth'},
    {id:1053100,    name:'wiz',       rare:3,   element:'dark'},
    {id:1053115,    name:'wiz',       rare:3,   element:'fire'},
    {id:1053127,    name:'wiz',       rare:3,   element:'light'},
    {id:1053140,    name:'wiz',       rare:3,   element:'water'},
    {id:1054100,    name:'wiz',       rare:4,   element:'water'},
    {id:1054113,    name:'wiz',       rare:4,   element:'dark'},
    {id:1054123,    name:'wiz',       rare:4,   element:'thunder'},
    {id:1054130,    name:'wiz',       rare:4,   element:'wind'},
    {id:1054135,    name:'wiz',       rare:4,   element:'fire'},
    {id:1061100,    name:'yunyun',    rare:1,   element:'thunder'},
    {id:1062100,    name:'yunyun',    rare:2,   element:'water'},
    {id:1062102,    name:'yunyun',    rare:2,   element:'earth'},
    {id:1063100,    name:'yunyun',    rare:3,   element:'thunder'},
    {id:1063113,    name:'yunyun',    rare:3,   element:'dark'},
    {id:1063116,    name:'yunyun',    rare:3,   element:'light'},
    {id:1063123,    name:'yunyun',    rare:3,   element:'water'},
    {id:1063126,    name:'yunyun',    rare:3,   element:'fire'},
    {id:1063137,    name:'yunyun',    rare:3,   element:'earth'},
    {id:1064100,    name:'yunyun',    rare:4,   element:'light'},
    {id:1064107,    name:'yunyun',    rare:4,   element:'wind'},
    {id:1064118,    name:'yunyun',    rare:4,   element:'water'},
    {id:1064129,    name:'yunyun',    rare:4,   element:'fire'},
    {id:1064153,    name:'yunyun',    rare:4,   element:'thunder'},
    {id:1071100,    name:'airis',     rare:1,   element:'light'},
    {id:1072100,    name:'airis',     rare:2,   element:'light'},
    {id:1072102,    name:'airis',     rare:2,   element:'wind'},
    {id:1073100,    name:'airis',     rare:3,   element:'earth'},
    {id:1073124,    name:'airis',     rare:3,   element:'light'},
    {id:1073135,    name:'airis',     rare:3,   element:'fire'},
    {id:1073153,    name:'airis',     rare:3,   element:'dark'},
    {id:1074100,    name:'airis',     rare:4,   element:'light'},
    {id:1074114,    name:'airis',     rare:4,   element:'thunder'},
    {id:1074119,    name:'airis',     rare:4,   element:'earth'},
    {id:1074129,    name:'airis',     rare:4,   element:'fire'},
    {id:1074140,    name:'airis',     rare:4,   element:'water'},
    {id:1091100,    name:'cecily',    rare:1,   element:'water'},
    {id:1092100,    name:'cecily',    rare:2,   element:'wind'},
    {id:1092102,    name:'cecily',    rare:2,   element:'light'},
    {id:1093100,    name:'cecily',    rare:3,   element:'thunder'},
    {id:1093123,    name:'cecily',    rare:3,   element:'fire'},
    {id:1093130,    name:'cecily',    rare:3,   element:'wind'},
    {id:1094100,    name:'cecily',    rare:4,   element:'light'},
    {id:1094114,    name:'cecily',    rare:4,   element:'earth'},
    {id:1094126,    name:'cecily',    rare:4,   element:'wind'},
    {id:1094140,    name:'cecily',    rare:4,   element:'water'},
    {id:1101100,    name:'arue',      rare:1,   element:'earth'},
    {id:1102100,    name:'arue',      rare:2,   element:'light'},
    {id:1102102,    name:'arue',      rare:2,   element:'wind'},
    {id:1103100,    name:'arue',      rare:3,   element:'water'},
    {id:1103107,    name:'arue',      rare:3,   element:'earth'},
    {id:1103118,    name:'arue',      rare:3,   element:'light'},
    {id:1103134,    name:'arue',      rare:3,   element:'dark'},
    {id:1104100,    name:'arue',      rare:4,   element:'dark'},
    {id:1104110,    name:'arue',      rare:4,   element:'fire'},
    {id:1104116,    name:'arue',      rare:4,   element:'light'},
    {id:1104127,    name:'arue',      rare:4,   element:'earth'},
    {id:1111100,    name:'mitsurugi', rare:1,   element:'thunder'},
    {id:1112100,    name:'mitsurugi', rare:2,   element:'thunder'},
    {id:1112102,    name:'mitsurugi', rare:2,   element:'water'},
    {id:1113100,    name:'mitsurugi', rare:3,   element:'light'},
    {id:1113119,    name:'mitsurugi', rare:3,   element:'earth'},
    {id:1113131,    name:'mitsurugi', rare:3,   element:'wind'},
    {id:1113136,    name:'mitsurugi', rare:3,   element:'dark'},
    {id:1114100,    name:'mitsurugi', rare:4,   element:'thunder'},
    {id:1114110,    name:'mitsurugi', rare:4,   element:'fire'},
    {id:1114114,    name:'mitsurugi', rare:4,   element:'earth'},
    {id:1114127,    name:'mitsurugi', rare:4,   element:'water'},
    {id:1121100,    name:'dust',      rare:1,   element:'fire'},
    {id:1122100,    name:'dust',      rare:2,   element:'earth'},
    {id:1122102,    name:'dust',      rare:2,   element:'dark'},
    {id:1123100,    name:'dust',      rare:3,   element:'thunder'},
    {id:1123120,    name:'dust',      rare:3,   element:'dark'},
    {id:1123134,    name:'dust',      rare:3,   element:'light'},
    {id:1124100,    name:'dust',      rare:4,   element:'thunder'},
    {id:1124107,    name:'dust',      rare:4,   element:'wind'},
    {id:1124110,    name:'dust',      rare:4,   element:'water'},
    {id:1124125,    name:'dust',      rare:4,   element:'light'},
    {id:1131100,    name:'leine',     rare:1,   element:'wind'},
    {id:1132100,    name:'leine',     rare:2,   element:'fire'},
    {id:1132102,    name:'leine',     rare:2,   element:'water'},
    {id:1133100,    name:'leine',     rare:3,   element:'earth'},
    {id:1133115,    name:'leine',     rare:3,   element:'wind'},
    {id:1133128,    name:'leine',     rare:3,   element:'dark'},
    {id:1133136,    name:'leine',     rare:3,   element:'fire'},
    {id:1134100,    name:'leine',     rare:4,   element:'wind'},
    {id:1134110,    name:'leine',     rare:4,   element:'water'},
    {id:1134117,    name:'leine',     rare:4,   element:'light'},
    {id:1134123,    name:'leine',     rare:4,   element:'fire'},
    {id:1141100,    name:'lia',       rare:1,   element:'water'},
    {id:1142100,    name:'lia',       rare:2,   element:'fire'},
    {id:1142102,    name:'lia',       rare:2,   element:'water'},
    {id:1143100,    name:'lia',       rare:3,   element:'fire'},
    {id:1143112,    name:'lia',       rare:3,   element:'earth'},
    {id:1143123,    name:'lia',       rare:3,   element:'thunder'},
    {id:1143127,    name:'lia',       rare:3,   element:'dark'},
    {id:1143140,    name:'lia',       rare:3,   element:'water'},
    {id:1143150,    name:'lia',       rare:3,   element:'light'},
    {id:1144100,    name:'lia',       rare:4,   element:'water'},
    {id:1144105,    name:'lia',       rare:4,   element:'dark'},
    {id:1144130,    name:'lia',       rare:4,   element:'thunder'},
    {id:1151100,    name:'ciero',     rare:1,   element:'wind'},
    {id:1152100,    name:'ciero',     rare:2,   element:'fire'},
    {id:1152102,    name:'ciero',     rare:2,   element:'thunder'},
    {id:1153100,    name:'ciero',     rare:3,   element:'earth'},
    {id:1153112,    name:'ciero',     rare:3,   element:'thunder'},
    {id:1153125,    name:'ciero',     rare:3,   element:'dark'},
    {id:1153152,    name:'ciero',     rare:3,   element:'wind'},
    {id:1154100,    name:'ciero',     rare:4,   element:'wind'},
    {id:1154105,    name:'ciero',     rare:4,   element:'thunder'},
    {id:1154113,    name:'ciero',     rare:4,   element:'dark'},
    {id:1154117,    name:'ciero',     rare:4,   element:'fire'},
    {id:1161100,    name:'eirika',    rare:1,   element:'fire'},
    {id:1162100,    name:'eirika',    rare:2,   element:'dark'},
    {id:1162102,    name:'eirika',    rare:2,   element:'thunder'},
    {id:1163100,    name:'eirika',    rare:3,   element:'wind'},
    {id:1163110,    name:'eirika',    rare:3,   element:'thunder'},
    {id:1163111,    name:'eirika',    rare:3,   element:'water'},
    {id:1163113,    name:'eirika',    rare:3,   element:'light'},
    {id:1163124,    name:'eirika',    rare:3,   element:'dark'},
    {id:1164100,    name:'eirika',    rare:4,   element:'fire'},
    {id:1164105,    name:'eirika',    rare:4,   element:'thunder'},
    {id:1164130,    name:'eirika',    rare:4,   element:'wind'},
    {id:1164153,    name:'eirika',    rare:4,   element:'dark'},
    {id:1171100,    name:'melissa',   rare:1,   element:'dark'},
    {id:1172100,    name:'melissa',   rare:2,   element:'dark'},
    {id:1172102,    name:'melissa',   rare:2,   element:'wind'},
    {id:1173100,    name:'melissa',   rare:3,   element:'fire'},
    {id:1173117,    name:'melissa',   rare:3,   element:'water'},
    {id:1173135,    name:'melissa',   rare:3,   element:'thunder'},
    {id:1174100,    name:'melissa',   rare:4,   element:'dark'},
    {id:1174107,    name:'melissa',   rare:4,   element:'earth'},
    {id:1174123,    name:'melissa',   rare:4,   element:'fire'},
    {id:1174130,    name:'melissa',   rare:4,   element:'thunder'},
    {id:1181100,    name:'mia',       rare:1,   element:'earth'},
    {id:1182100,    name:'mia',       rare:2,   element:'wind'},
    {id:1182102,    name:'mia',       rare:2,   element:'thunder'},
    {id:1183100,    name:'mia',       rare:3,   element:'light'},
    {id:1183123,    name:'mia',       rare:3,   element:'water'},
    {id:1183130,    name:'mia',       rare:3,   element:'wind'},
    {id:1183135,    name:'mia',       rare:3,   element:'fire'},
    {id:1184100,    name:'mia',       rare:4,   element:'earth'},
    {id:1184113,    name:'mia',       rare:4,   element:'dark'},
    {id:1184117,    name:'mia',       rare:4,   element:'wind'},
    {id:1184127,    name:'mia',       rare:4,   element:'water'},
    {id:1191100,    name:'aimee',     rare:1,   element:'thunder'},
    {id:1192100,    name:'aimee',     rare:2,   element:'water'},
    {id:1192102,    name:'aimee',     rare:2,   element:'light'},
    {id:1193100,    name:'aimee',     rare:3,   element:'wind'},
    {id:1193128,    name:'aimee',     rare:3,   element:'earth'},
    {id:1193136,    name:'aimee',     rare:3,   element:'none'},
    {id:1194100,    name:'aimee',     rare:4,   element:'earth'},
    {id:1194113,    name:'aimee',     rare:4,   element:'light'},
    {id:1194117,    name:'aimee',     rare:4,   element:'wind'},
    {id:1194125,    name:'aimee',     rare:4,   element:'dark'},
    {id:1201100,    name:'komekko',   rare:1,   element:'light'},
    {id:1202100,    name:'komekko',   rare:2,   element:'dark'},
    {id:1202102,    name:'komekko',   rare:2,   element:'fire'},
    {id:1203100,    name:'komekko',   rare:3,   element:'fire'},
    {id:1203151,    name:'komekko',   rare:3,   element:'thunder'},
    {id:1204100,    name:'komekko',   rare:4,   element:'fire'},
    {id:1474132,    name:'emilia',    rare:4,   element:'water'},
    {id:1504132,    name:'rem',       rare:4,   element:'water'},
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
    1003153 ,
    1064153 ,
    1073153 ,
    1164153 ,
  ];

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
  }



  function passfukki(memli,imgs){

    let MemberIndex = [];

    //キャラループ
    for (let n=0; n<MemberTable.length; n++){
      imgs.forEach((img,index) => {
        if (img.id === MemberTable[n]){
          MemberIndex.push(index);
        }
      });
    }

    const fukuID = document.getElementById('fuku').value;
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


}