const compact = require('emojibase-data/en/compact.json');
const groupMetaData = require('emojibase-data/meta/groups.json');
const fs = require('fs');

const emojiArray = [];

for (let i = 0; i < compact.length; i++) {
  const emojiGroupFound = emojiArray.find(
    (emojiGroup) => emojiGroup.group === compact[i].group
  );
  let emojiGroup = {};

  if (emojiGroupFound !== undefined) {
    emojiGroup = emojiGroupFound;
  } else {
    emojiGroup = { group: compact[i].group, emojiList: [] };
  }

  const emojiObj = { unicode: compact[i].unicode };
  if (compact[i].skins !== undefined) {
    emojiObj.skins = [];
    for (let j = 0; j < compact[i].skins.length; j++) {
      emojiObj.skins.push({
        unicode: compact[i].skins[j].unicode
      });
    }
  }

  if (emojiGroupFound !== undefined) {
    emojiGroup.emojiList.push(emojiObj);
  } else {
    emojiGroup.emojiList.push(emojiObj);
    emojiArray.push(emojiGroup);
  }
}
const emojiArrayString = JSON.stringify(emojiArray);
console.log('emoji-data/emoji-all-groups.json');
fs.writeFileSync(
  `../emoji-data/emoji-all-groups.json`,
  emojiArrayString,
  'utf-8'
);

const groupMeta = groupMetaData.groups;
for (let i = 0; i < emojiArray.length; i++) {
  let emojiGroupName = '';
  for (const group in groupMeta) {
    if (group == emojiArray[i].group) {
      emojiGroupName = groupMeta[group];
      break;
    }
  }

  const emojiGroupString = JSON.stringify(emojiArray[i]);
  console.log(`emoji-data/emoji-group-${emojiGroupName}.json`);
  fs.writeFileSync(
    `../emoji-data/emoji-group-${emojiGroupName}.json`,
    emojiGroupString,
    'utf-8'
  );
}
