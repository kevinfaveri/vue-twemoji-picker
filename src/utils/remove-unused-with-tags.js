let groupMetaData = require('emojibase-data/meta/groups.json');
const fs = require('fs');

const langArray = [
  'zh', 
  'zh-hant', 
  'da', 
  'nl', 
  'en', 
  'en-gb', 
  'fr', 
  'de', 
  'it', 
  'ja', 
  'ko', 
  'ms', 
  'pl', 
  'pt', 
  'ru', 
  'es', 
  'es-mx', 
  'sv', 
  'th'
];

for(let i = 0; i < langArray.length; i++) {
  generateEmojiPackByLang(langArray[i]);
}

function generateEmojiPackByLang(lang) {
  fs.mkdirSync(`../emoji-data/${lang}`, err => {});

  let emojiPackLang = require('emojibase-data/' + lang + '/compact.json');
  const emojiArray = [];

  for (let i = 0; i < emojiPackLang.length; i++) {
    let emojiGroupFound = emojiArray.find(emojiGroup => emojiGroup.group === emojiPackLang[i].group);
    let emojiGroup = {};

    if (emojiGroupFound !== undefined) {
      emojiGroup = emojiGroupFound;
    } else {
      emojiGroup = { group: emojiPackLang[i].group, emojiList: [] };
    }

    let emojiObj = { unicode: emojiPackLang[i].unicode, tags: emojiPackLang[i].tags };
    if (emojiPackLang[i].skins !== undefined) {
      emojiObj.skins = [];
      for (let j = 0; j < emojiPackLang[i].skins.length; j++) {
        emojiObj.skins.push({ 
          unicode: emojiPackLang[i].skins[j].unicode, 
          tags: emojiPackLang[i].skins[j].tags
        })
      }
    }
    
    if (emojiGroupFound !== undefined) {
      emojiGroup.emojiList.push(emojiObj);
    } else {
      emojiGroup.emojiList.push(emojiObj);
      emojiArray.push(emojiGroup);
    }
  }

  const groupMeta = groupMetaData.groups;
  for (let i = 0; i < emojiArray.length; i++) {
    if (i === 2) { continue; } 
    else {
      let emojiGroupName = '';
      for (let group in groupMeta) {
        if(group == emojiArray[i].group) {
          emojiGroupName = groupMeta[group];
          break;
        } 
      }
      
      const emojiGroupString = JSON.stringify(emojiArray[i]);
      console.log(`emoji-data/${lang}/emoji-group-${emojiGroupName}.json`);
      fs.writeFileSync(`../emoji-data/${lang}/emoji-group-${emojiGroupName}.json`, emojiGroupString, 'utf-8');
    }
  }

  emojiArray.splice(2, 1);
  const emojiArrayString = JSON.stringify(emojiArray);
  console.log('emoji-data/' + lang + 'emoji-all-groups.json');
  fs.writeFileSync(`../emoji-data/${lang}/emoji-all-groups.json`, emojiArrayString, 'utf-8'); 
  
}
