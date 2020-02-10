(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global['twemoji-picker'] = {}, global.Vue));
}(this, (function (exports, Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  /*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
  var twemoji=function(){var twemoji={base:"https://twemoji.maxcdn.com/v/12.1.5/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,false),this);}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D=String.fromCharCode(8205),rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return "".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(nodeType===3){allText.push(subnode);}else if(nodeType===1&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText);}}return allText}function grabTheRightIcon(rawText){return toCodePoint(rawText.indexOf(U200D)<0?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=false;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),true));}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname]);}}img.className=options.className;img.alt=rawText;img.src=src;modified=true;fragment.appendChild(img);}if(!img)fragment.appendChild(createText(rawText,false));img=null;}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),true));}subnode.parentNode.replaceChild(fragment,subnode);}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat('class="',options.className,'" ','draggable="false" ','alt="',rawText,'"',' src="',src,'"');attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&ret.indexOf(" "+attrname+"=")===-1){ret=ret.concat(" ",attrname,'="',escapeHTML(attrib[attrname]),'"');}}ret=ret.concat("/>");}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return typeof value==="number"?value+"x"+value:value}function fromCodePoint(codepoint){var code=typeof codepoint==="string"?parseInt(codepoint,16):codepoint;if(code<65536){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(code&1023))}function parse(what,how){if(!how||typeof how==="function"){how={callback:how};}return (typeof what==="string"?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:typeof how.attributes==="function"?how.attributes:returnNull,base:typeof how.base==="string"?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return String(text).replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0;}else if(55296<=c&&c<=56319){p=c;}else{r.push(c.toString(16));}}return r.join(sep||"-")}}();

  var EmojiServiceImport = {
      getEmojiImgFromUnicode(unicode, twemojiOptions) {
          return twemoji.parse(unicode, twemojiOptions);
      },
      getEmojiImgArrayFromEmojiPack(emojiPackArray, twemojiOptions) {
          var _a, _b;
          emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
          const emojiPackWithImg = [];
          if (((_a = emojiPackArray) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
              for (let i = 0; i < emojiPackArray.length; i++) {
                  emojiPackWithImg[i] = { group: emojiPackArray[i].group, emojiList: [] };
                  for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
                      const emoji = { unicode: '', img: '', skins: [], tags: [] };
                      const emojiAuxObj = emojiPackArray[i].emojiList[j];
                      if (((_b = emojiAuxObj.skins) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                          emoji.unicode = emojiAuxObj.unicode;
                          emoji.skins = [];
                          for (let k = 0; k < emojiAuxObj.skins.length; k++) {
                              const skinObject = {
                                  unicode: emojiAuxObj.skins[k].unicode,
                                  img: this.getEmojiImgFromUnicode(emojiAuxObj.skins[k].unicode, twemojiOptions)
                              };
                              emoji.skins.push(skinObject);
                          }
                      }
                      else {
                          emoji.unicode = emojiAuxObj.unicode;
                      }
                      emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
                      emojiPackWithImg[i].emojiList.push(emoji);
                  }
              }
          }
          return emojiPackWithImg;
      },
      getEmojiImgArrayFromEmojiPackByTerm(emojiPackArray, twemojiOptions, searchTerm) {
          var _a, _b;
          emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
          const emojiPackWithImg = [];
          if (((_a = emojiPackArray) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
              for (let i = 0; i < emojiPackArray.length; i++) {
                  for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
                      const emoji = { unicode: '', img: '', skins: [], tags: [] };
                      const emojiAuxObj = emojiPackArray[i].emojiList[j];
                      if (((_b = emojiAuxObj.skins) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
                          emoji.unicode = emojiAuxObj.unicode;
                          emoji.skins = [];
                          for (let k = 0; k < emojiAuxObj.skins.length; k++) {
                              const skinObject = {
                                  unicode: emojiAuxObj.skins[k].unicode,
                                  img: this.getEmojiImgFromUnicode(emojiAuxObj.skins[k].unicode, twemojiOptions)
                              };
                              emoji.skins.push(skinObject);
                          }
                      }
                      else {
                          emoji.unicode = emojiPackArray[i].emojiList[j].unicode;
                      }
                      emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
                      for (let k = 0; k < emojiAuxObj.tags.length; k++) {
                          if (emojiAuxObj.tags[k].includes(searchTerm)) {
                              emojiPackWithImg.push(emoji);
                              break;
                          }
                      }
                  }
              }
          }
          return emojiPackWithImg;
      }
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop);
      var marginLeft = parseFloat(styles.marginLeft);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  function getInternetExplorerVersion() {
  	var ua = window.navigator.userAgent;

  	var msie = ua.indexOf('MSIE ');
  	if (msie > 0) {
  		// IE 10 or older => return version number
  		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  	}

  	var trident = ua.indexOf('Trident/');
  	if (trident > 0) {
  		// IE 11 => return version number
  		var rv = ua.indexOf('rv:');
  		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  	}

  	var edge = ua.indexOf('Edge/');
  	if (edge > 0) {
  		// Edge (IE 12+) => return version number
  		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  	}

  	// other browser
  	return -1;
  }

  var isIE$1 = void 0;

  function initCompat() {
  	if (!initCompat.init) {
  		initCompat.init = true;
  		isIE$1 = getInternetExplorerVersion() !== -1;
  	}
  }

  var ResizeObserver = { render: function render() {
  		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
  	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
  	name: 'resize-observer',

  	methods: {
  		compareAndNotify: function compareAndNotify() {
  			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
  				this._w = this.$el.offsetWidth;
  				this._h = this.$el.offsetHeight;
  				this.$emit('notify');
  			}
  		},
  		addResizeHandlers: function addResizeHandlers() {
  			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
  			this.compareAndNotify();
  		},
  		removeResizeHandlers: function removeResizeHandlers() {
  			if (this._resizeObject && this._resizeObject.onload) {
  				if (!isIE$1 && this._resizeObject.contentDocument) {
  					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
  				}
  				delete this._resizeObject.onload;
  			}
  		}
  	},

  	mounted: function mounted() {
  		var _this = this;

  		initCompat();
  		this.$nextTick(function () {
  			_this._w = _this.$el.offsetWidth;
  			_this._h = _this.$el.offsetHeight;
  		});
  		var object = document.createElement('object');
  		this._resizeObject = object;
  		object.setAttribute('aria-hidden', 'true');
  		object.setAttribute('tabindex', -1);
  		object.onload = this.addResizeHandlers;
  		object.type = 'text/html';
  		if (isIE$1) {
  			this.$el.appendChild(object);
  		}
  		object.data = 'about:blank';
  		if (!isIE$1) {
  			this.$el.appendChild(object);
  		}
  	},
  	beforeDestroy: function beforeDestroy() {
  		this.removeResizeHandlers();
  	}
  };

  // Install the components
  function install(Vue) {
  	Vue.component('resize-observer', ResizeObserver);
  	Vue.component('ResizeObserver', ResizeObserver);
  }

  // Plugin
  var plugin = {
  	// eslint-disable-next-line no-undef
  	version: "0.4.5",
  	install: install
  };

  // Auto-install
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function assign(to, from) {
    for (var key in from) {
      if (Object.prototype.hasOwnProperty.call(from, key)) {
        if (_typeof(from[key]) === 'object' && to[key]) {
          assign(to[key], from[key]);
        } else {
          to[key] = from[key];
        }
      }
    }
  }

  var config = {
    // Disable popper components
    disabled: false,
    // Default position offset (px)
    offset: 0,
    // Default container where the tooltip will be appended
    container: 'body',
    // Element used to compute position and size boundaries
    boundariesElement: undefined,
    // Skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
    instantMove: false,
    // Auto destroy tooltip DOM nodes (ms)
    disposeTimeout: 5000,
    // Options passed to Popper constructor
    popperOptions: {},
    // Themes
    themes: {
      tooltip: {
        // Default tooltip placement relative to target element
        placement: 'top',
        // Default events that trigger the tooltip
        trigger: ['hover', 'focus', 'touch'],
        // Close tooltip on click on tooltip target
        triggerHide: function triggerHide(events) {
          return [].concat(_toConsumableArray(events), ['click']);
        },
        // Delay (ms)
        delay: {
          show: 200,
          hide: 0
        },
        // Update popper on content resize
        handleResize: false,
        // Enable HTML content in directive
        contentHtml: false,
        // Displayed when tooltip content is loading
        loadingContent: '...'
      },
      dropdown: {
        // Default dropdown placement relative to target element
        placement: 'bottom',
        // Default events that trigger the dropdown
        trigger: ['click'],
        // Delay (ms)
        delay: 0,
        // Update popper on content resize
        handleResize: true,
        // Hide on clock outside
        autoHide: true
      }
    }
  };
  /**
   * Get default config value depending on theme
   */

  function getDefaultConfig(theme, key) {
    var themeConfig = config.themes[theme] || {};
    var value;

    do {
      value = themeConfig[key];

      if (typeof value === 'undefined') {
        // Support theme extend
        if (themeConfig.$extend) {
          themeConfig = config.themes[themeConfig.$extend] || {};
        } else {
          // Base config
          themeConfig = null;
          value = config[key];
        }
      } else {
        themeConfig = null;
      }
    } while (themeConfig);

    return value;
  }
  /**
   * Theme CSS inheritance
   */

  function getThemeClasses(theme) {
    var result = [theme];
    var themeConfig = config.themes[theme] || {};

    do {
      // Support theme extend
      if (themeConfig.$extend && !themeConfig.$resetCss) {
        result.push(themeConfig.$extend);
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
      }
    } while (themeConfig);

    return result.map(function (c) {
      return "v-popper--theme-".concat(c);
    });
  }

  var supportsPassive = false;

  if (typeof window !== 'undefined') {
    supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
  }

  var SHOW_EVENT_MAP = {
    hover: 'mouseenter',
    focus: 'focus',
    click: 'click',
    touch: 'touchstart'
  };
  var HIDE_EVENT_MAP = {
    hover: 'mouseleave',
    focus: 'blur',
    click: 'click',
    touch: 'touchend'
  };
  var EVENTS = Object.keys(SHOW_EVENT_MAP);
  var isIOS = false;

  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  var openPoppers = [];
  var hidingPopper = null;

  var Element = function Element() {};

  if (typeof window !== 'undefined') {
    Element = window.Element;
  }

  var script = {
    name: 'VPopper',
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNode: {
        type: Function,
        required: true
      },
      popperNode: {
        type: Function,
        required: true
      },
      arrowNode: {
        type: Function,
        default: null
      },
      open: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'disabled');
        }
      },
      placement: {
        type: String,
        default: function _default() {
          return getDefaultConfig(this.theme, 'placement');
        },
        validator: function validator(value) {
          return Popper.placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default() {
          return getDefaultConfig(this.theme, 'delay');
        }
      },
      offset: {
        type: [String, Number],
        default: function _default() {
          return getDefaultConfig(this.theme, 'offset');
        }
      },
      trigger: {
        type: [String, Array],
        default: function _default() {
          return getDefaultConfig(this.theme, 'trigger');
        }
      },
      triggerShow: {
        type: [String, Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'triggerShow');
        }
      },
      triggerHide: {
        type: [String, Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'triggerHide');
        }
      },
      container: {
        type: [String, Object, Element, Boolean],
        default: function _default() {
          return getDefaultConfig(this.theme, 'container');
        }
      },
      boundariesElement: {
        type: [String, Element],
        default: function _default() {
          return getDefaultConfig(this.theme, 'boundariesElement');
        }
      },
      popperOptions: {
        type: Object,
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperOptions');
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'autoHide');
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'handleResize');
        }
      },
      openGroup: {
        type: String,
        default: null
      },
      instantMove: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'instantMove');
        }
      }
    },
    data: function data() {
      return {
        isOpen: false,
        isMounted: false,
        skipTransition: false
      };
    },
    watch: {
      open: '$_autoShowHide',
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container(val) {
        if (this.isOpen && this.popperInstance) {
          var container = this.$_findContainer(this.container, this.$_targetNode);

          if (!container) {
            console.warn('No container for popover', this);
            return;
          }

          container.appendChild(this.$_popperNode);
          this.popperInstance.scheduleUpdate();
        }
      },
      trigger: function trigger(val) {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: function placement(val) {
        var _this = this;

        this.$_updatePopper(function () {
          _this.popperInstance.options.placement = val;
        });
      },
      offset: '$_restartPopper',
      boundariesElement: '$_restartPopper',
      popperOptions: {
        handler: '$_restartPopper',
        deep: true
      }
    },
    created: function created() {
      this.popperId = "popper_".concat(Math.random().toString(36).substr(2, 10));
    },
    mounted: function mounted() {
      this.init();
    },
    activated: function activated() {
      this.$_autoShowHide();
    },
    deactivated: function deactivated() {
      this.hide();
    },
    beforeDestroy: function beforeDestroy() {
      this.dispose();
    },
    methods: {
      show: function show() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref.event,
            _ref$skipDelay = _ref.skipDelay,
            skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay,
            _ref$force = _ref.force,
            force = _ref$force === void 0 ? false : _ref$force;

        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit('show');
        }

        this.$emit('update:open', true);
        this.$_beingShowed = true;
        requestAnimationFrame(function () {
          _this2.$_beingShowed = false;
        });
      },
      hide: function hide() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref2.event,
            _ref2$skipDelay = _ref2.skipDelay,
            skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;

        this.$_scheduleHide(event, skipDelay);
        this.$emit('hide');
        this.$emit('update:open', false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventOpen = false; // Nodes

        this.$_targetNode = this.targetNode();
        this.$_popperNode = this.popperNode();
        swapAttrs(this.$_targetNode, 'title', 'data-original-title');
        this.$_detachPopperNode();
        this.$_init();

        if (this.open) {
          this.show();
        }
      },
      dispose: function dispose() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });

        if (this.popperInstance) {
          this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

          if (!this.popperInstance.options.removeOnDestroy) {
            this.$_detachPopperNode();
          }
        }

        this.isMounted = false;
        this.popperInstance = null;
        this.isOpen = false;
        swapAttrs(this.$_targetNode, 'data-original-title', 'title');
        this.$emit('dispose');
      },
      onResize: function onResize() {
        if (this.isOpen && this.popperInstance) {
          this.popperInstance.scheduleUpdate();
          this.$emit('resize');
        }
      },
      $_init: function $_init() {
        if (this.trigger.indexOf('manual') === -1) {
          this.$_addEventListeners();
        }
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.open) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_show: function $_show() {
        var _this3 = this;

        var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        clearTimeout(this.$_disposeTimer);
        clearTimeout(this.$_scheduleTimer);
        this.skipTransition = skipTransition; // Already open

        if (this.isOpen) {
          return;
        } // Popper is already initialized


        if (this.popperInstance) {
          this.isOpen = true;
          this.popperInstance.enableEventListeners();
          this.popperInstance.scheduleUpdate();
        }

        if (!this.isMounted) {
          var container = this.$_findContainer(this.container, this.$_targetNode);

          if (!container) {
            console.warn('No container for popover', this);
            return;
          }

          container.appendChild(this.$_popperNode);
          this.isMounted = true;
        }

        if (!this.popperInstance) {
          var popperOptions = _objectSpread2({}, this.popperOptions, {
            placement: this.placement
          });

          popperOptions.modifiers = _objectSpread2({}, popperOptions.modifiers, {
            arrow: _objectSpread2({}, popperOptions.modifiers && popperOptions.modifiers.arrow, {
              element: this.arrowNode && this.arrowNode() || '[x-arrow]'
            })
          });

          if (this.offset) {
            var offset = this.$_getOffset();
            popperOptions.modifiers.offset = _objectSpread2({}, popperOptions.modifiers && popperOptions.modifiers.offset, {
              offset: offset
            });
          }

          if (this.boundariesElement) {
            popperOptions.modifiers.preventOverflow = _objectSpread2({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow, {
              boundariesElement: this.boundariesElement
            });
          }

          this.popperInstance = new Popper(this.$_targetNode, this.$_popperNode, popperOptions); // Fix position

          requestAnimationFrame(function () {
            if (_this3.hidden) {
              _this3.hidden = false;

              _this3.$_hide();

              return;
            }

            if (!_this3.$_isDisposed && _this3.popperInstance) {
              _this3.popperInstance.scheduleUpdate(); // Show the tooltip


              requestAnimationFrame(function () {
                if (_this3.hidden) {
                  _this3.hidden = false;

                  _this3.$_hide();

                  return;
                }

                if (!_this3.$_isDisposed) {
                  _this3.isOpen = true;
                } else {
                  _this3.dispose();
                }
              });
            } else {
              _this3.dispose();
            }
          });
        }

        var openGroup = this.openGroup;

        if (openGroup) {
          var popover;

          for (var i = 0; i < openPoppers.length; i++) {
            popover = openPoppers[i];

            if (popover.openGroup !== openGroup) {
              popover.hide();
              popover.$emit('close-group');
            }
          }
        }

        openPoppers.push(this);
        this.$emit('apply-show');
      },
      $_hide: function $_hide() {
        var _this4 = this;

        var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        clearTimeout(this.$_scheduleTimer);
        this.skipTransition = skipTransition;
        removeFromArray(openPoppers, this); // Already hidden

        if (!this.isOpen) {
          return;
        }

        if (hidingPopper === this) {
          hidingPopper = null;
        }

        this.isOpen = false;

        if (this.popperInstance) {
          this.popperInstance.disableEventListeners();
        }

        clearTimeout(this.$_disposeTimer);
        var disposeTime = getDefaultConfig(this.theme, 'disposeTimeout');

        if (disposeTime !== null) {
          this.$_disposeTimer = setTimeout(function () {
            if (_this4.$_popperNode) {
              // Don't remove popper instance, just the HTML element
              _this4.$_detachPopperNode();

              _this4.isMounted = false;
            }
          }, disposeTime);
        }

        this.$emit('apply-hide');
      },
      $_findContainer: function $_findContainer(container, reference) {
        // if container is a query, get the relative element
        if (typeof container === 'string') {
          container = window.document.querySelector(container);
        } else if (container === false) {
          // if container is `false`, set it to reference parent
          container = reference.parentNode;
        }

        return container;
      },
      $_getOffset: function $_getOffset() {
        var typeofOffset = _typeof(this.offset);

        var offset = this.offset; // One value -> switch

        if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
          offset = "0, ".concat(offset);
        }

        return offset;
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this5 = this;

        var bothEvents = getEvents(this.trigger);

        var addEvents = function addEvents(customTrigger, eventMap, handler) {
          var events = bothEvents;

          if (customTrigger != null) {
            events = getEvents(typeof customTrigger === 'function' ? customTrigger(events) : customTrigger);
          }

          events.forEach(function (value) {
            var event = eventMap[value];

            _this5.$_events.push({
              event: event,
              handler: handler
            });

            _this5.$_targetNode.addEventListener(event, handler);
          });
        }; // Add trigger show events


        addEvents(this.triggerShow, SHOW_EVENT_MAP, // Handle show
        function (event) {
          if (_this5.isOpen) {
            return;
          }

          event.usedByTooltip = true;
          !_this5.$_preventOpen && _this5.show({
            event: event
          });
          _this5.hidden = false;
        }); // Add trigger hide events

        addEvents(this.triggerHide, HIDE_EVENT_MAP, // Handle hide
        function (event) {
          if (event.usedByTooltip) {
            return;
          }

          _this5.hide({
            event: event
          });

          _this5.hidden = true;
        });
      },
      $_removeEventListeners: function $_removeEventListeners() {
        var _this6 = this;

        this.$_events.forEach(function (_ref3) {
          var event = _ref3.event,
              handler = _ref3.handler;

          _this6.$_targetNode.removeEventListener(event, handler);
        });
        this.$_events = [];
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        clearTimeout(this.$_scheduleTimer);

        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_hide(true);
          this.$_show(true);
          return;
        }

        if (skipDelay) {
          this.$_show();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_show.bind(this), this.$_computeDelay('show'));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var _this7 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        clearTimeout(this.$_scheduleTimer);

        if (this.isOpen) {
          hidingPopper = this;
        }

        if (skipDelay) {
          this.$_hide();
        } else {
          this.$_scheduleTimer = setTimeout(function () {
            if (!_this7.isOpen) {
              return;
            } // if we are hiding because of a mouseleave, we must check that the new
            // reference isn't the tooltip, because in this case we don't want to hide it


            if (event && event.type === 'mouseleave') {
              var isSet = _this7.$_setTooltipNodeEvent(event); // if we set the new event, don't hide the tooltip yet
              // the new event will take care to hide it if necessary


              if (isSet) {
                return;
              }
            }

            _this7.$_hide();
          }, this.$_computeDelay('hide'));
        }
      },
      $_setTooltipNodeEvent: function $_setTooltipNodeEvent(event) {
        var _this8 = this;

        var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;

        var callback = function callback(event2) {
          var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget; // Remove event listener after call

          _this8.$_popperNode.removeEventListener(event.type, callback); // If the new reference is not the reference element


          if (!_this8.$_targetNode.contains(relatedreference2)) {
            // Schedule to hide tooltip
            _this8.hide({
              event: event2
            });
          }
        };

        if (this.$_popperNode.contains(relatedreference)) {
          // listen to mouseleave on the tooltip element to be able to hide the tooltip
          this.$_popperNode.addEventListener(event.type, callback);
          return true;
        }

        return false;
      },
      $_updatePopper: function $_updatePopper(cb) {
        if (this.popperInstance) {
          cb();
          if (this.isOpen) this.popperInstance.scheduleUpdate();
        }
      },
      $_restartPopper: function $_restartPopper() {
        if (this.popperInstance) {
          var isOpen = this.isOpen;
          this.dispose();
          this.$_isDisposed = false;
          this.$_init();

          if (isOpen) {
            this.show({
              skipDelay: true,
              force: true
            });
          }
        }
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this9 = this;

        var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.$_beingShowed) return;
        this.hide({
          event: event
        });

        if (event.closePopover) {
          this.$emit('close-directive');
        } else {
          this.$emit('auto-hide');
        }

        if (touch) {
          this.$_preventOpen = true;
          setTimeout(function () {
            _this9.$_preventOpen = false;
          }, 300);
        }
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      }
    },
    render: function render(h) {
      return this.$scopedSlots.default(this)[0];
    }
  };

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    if (isIOS) {
      document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
        passive: true,
        capture: true
      } : true);
    } else {
      window.addEventListener('click', handleGlobalClick, true);
    }
  }

  function handleGlobalClick(event) {
    handleGlobalClose(event);
  }

  function handleGlobalTouchend(event) {
    handleGlobalClose(event, true);
  }

  function handleGlobalClose(event) {
    var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _loop = function _loop(i) {
      var popper = openPoppers[i];
      var popperContent = popper.popperNode();
      var contains = popperContent.contains(event.target);
      requestAnimationFrame(function () {
        if (event.closeAllPopover || event.closePopover && contains || popper.autoHide && !contains) {
          popper.$_handleGlobalClose(event, touch);
        }
      });
    };

    // Delay so that close directive has time to set values
    for (var i = 0; i < openPoppers.length; i++) {
      _loop(i);
    }
  }

  function swapAttrs(node, attrFrom, attrTo) {
    var value = node.getAttribute(attrFrom);

    if (value) {
      node.removeAttribute(attrFrom);
      node.setAttribute(attrTo, value);
    }
  }

  function getEvents(rawEvents) {
    var events = typeof rawEvents === 'string' ? rawEvents.split(/\s+/g) : rawEvents;
    events = events.filter(function (trigger) {
      return EVENTS.indexOf(trigger) !== -1;
    });
    return events;
  }

  function removeFromArray(array, item) {
    var index = array.indexOf(item);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__ = script;

  /* template */

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = normalizeComponent(
      {},
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  var PrivateThemeClass = {
    computed: {
      themeClass: function themeClass() {
        return getThemeClasses(this.theme);
      }
    }
  };

  //
  var script$1 = {
    name: 'VPopperContent',
    components: {
      ResizeObserver: ResizeObserver
    },
    mixins: [PrivateThemeClass],
    props: {
      popperId: String,
      theme: String,
      isOpen: Boolean,
      isMounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: "popover",
        staticClass: "v-popper__popper",
        class: [
          _vm.themeClass,
          {
            "v-popper__popper--open": _vm.isOpen,
            "v-popper__popper--skip-transition": _vm.skipTransition
          }
        ],
        attrs: {
          id: _vm.popperId,
          "aria-hidden": _vm.isOpen ? "false" : "true",
          tabindex: _vm.autoHide ? 0 : undefined
        },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
            ) {
              return null
            }
            _vm.autoHide && _vm.$emit("hide");
          }
        }
      },
      [
        _c("div", { staticClass: "v-popper__wrapper" }, [
          _c(
            "div",
            {
              ref: "inner",
              staticClass: "v-popper__inner",
              staticStyle: { position: "relative" }
            },
            [
              _vm.isMounted
                ? [
                    _c("div", [_vm._t("default")], 2),
                    _vm._v(" "),
                    _vm.handleResize
                      ? _c("ResizeObserver", {
                          on: {
                            notify: function($event) {
                              return _vm.$emit("resize", $event)
                            }
                          }
                        })
                      : _vm._e()
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { ref: "arrow", staticClass: "v-popper__arrow" })
        ])
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  // @vue/component
  var PrivatePopperMethods = {
    methods: {
      show: function show() {
        var _this$$refs$popper;

        return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
      },
      hide: function hide() {
        var _this$$refs$popper2;

        return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
      },
      dispose: function dispose() {
        var _this$$refs$popper3;

        return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
      },
      onResize: function onResize() {
        var _this$$refs$popper4;

        return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
      }
    }
  };

  //
  var script$2 = {
    name: 'VPopperWrapper',
    components: {
      Popper: __vue_component__,
      PopperContent: __vue_component__$1
    },
    mixins: [PrivatePopperMethods, PrivateThemeClass],
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: function _default() {
          return this.$options.vPopperTheme;
        }
      },
      title: String
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "Popper",
      _vm._g(
        _vm._b(
          {
            ref: "popper",
            attrs: {
              theme: _vm.theme,
              "target-node": function() {
                return _vm.$refs.trigger
              },
              "popper-node": function() {
                return _vm.$refs.popperContent.$el
              },
              "arrow-node": function() {
                return _vm.$refs.popperContent.$refs.arrow
              }
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function(ref) {
                    var popperId = ref.popperId;
                    var isOpen = ref.isOpen;
                    var isMounted = ref.isMounted;
                    var skipTransition = ref.skipTransition;
                    var trigger = ref.trigger;
                    var autoHide = ref.autoHide;
                    var hide = ref.hide;
                    var handleResize = ref.handleResize;
                    var onResize = ref.onResize;
                    return [
                      _c(
                        "div",
                        {
                          staticClass: "v-popper",
                          class: [
                            _vm.themeClass,
                            {
                              "v-popper--open": isOpen
                            }
                          ]
                        },
                        [
                          _c(
                            "div",
                            {
                              ref: "trigger",
                              staticClass: "v-popper__trigger",
                              attrs: {
                                title: _vm.title,
                                "aria-describedby": popperId,
                                tabindex:
                                  trigger.indexOf("focus") !== -1 ? 0 : undefined
                              }
                            },
                            [_vm._t("default")],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "PopperContent",
                            {
                              ref: "popperContent",
                              attrs: {
                                "popper-id": popperId,
                                theme: _vm.theme,
                                "is-open": isOpen,
                                "is-mounted": isMounted,
                                "skip-transition": skipTransition,
                                "auto-hide": autoHide,
                                "handle-resize": handleResize
                              },
                              on: { hide: hide, resize: onResize }
                            },
                            [_vm._t("popper")],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ],
              null,
              true
            )
          },
          "Popper",
          _vm.$attrs,
          false
        ),
        _vm.$listeners
      )
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$3 = _objectSpread2({}, __vue_component__$2, {
    name: 'VDropdown',
    vPopperTheme: 'dropdown'
  });

  /* script */
  const __vue_script__$3 = script$3;
  /* template */

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = normalizeComponent(
      {},
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$4 = _objectSpread2({}, __vue_component__$2, {
    name: 'VTooltip',
    vPopperTheme: 'tooltip'
  });

  /* script */
  const __vue_script__$4 = script$4;
  /* template */

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = normalizeComponent(
      {},
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script$5 = {
    name: 'VTooltipDirective',
    components: {
      Popper: __vue_component__,
      PopperContent: __vue_component__$1
    },
    mixins: [PrivatePopperMethods],
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: 'tooltip'
      },
      contentHtml: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'contentHtml');
        }
      },
      content: {
        type: [String, Number, Function],
        default: null
      },
      loadingContent: {
        type: String,
        default: function _default() {
          return getDefaultConfig(this.theme, 'loadingContent');
        }
      }
    },
    data: function data() {
      return {
        asyncContent: null
      };
    },
    computed: {
      isContentAsync: function isContentAsync() {
        return typeof this.content === 'function';
      },
      loading: function loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent: function finalContent() {
        if (this.isContentAsync) {
          return this.loading ? this.loadingContent : this.asyncContent;
        }

        return this.content;
      }
    },
    watch: {
      content: {
        handler: function handler() {
          this.fetchContent(true);
        },
        immediate: true
      },
      finalContent: function finalContent(value) {
        var _this = this;

        this.$nextTick(function () {
          _this.$refs.popper.onResize();
        });
      }
    },
    created: function created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent: function fetchContent(force) {
        var _this2 = this;

        if (typeof this.content === 'function' && this.$_isOpen && (force || !this.$_loading && this.asyncContent == null)) {
          this.asyncContent = null;
          this.$_loading = true;
          var fetchId = ++this.$_fetchId;
          var result = this.content(this);

          if (result.then) {
            result.then(function (res) {
              return _this2.onResult(fetchId, res);
            });
          } else {
            this.onResult(fetchId, result);
          }
        }
      },
      onResult: function onResult(fetchId, result) {
        if (fetchId !== this.$_fetchId) return;
        this.$_loading = false;
        this.asyncContent = result;
      },
      onShow: function onShow() {
        this.$_isOpen = true;
        this.fetchContent();
      },
      onHide: function onHide() {
        this.$_isOpen = false;
      }
    }
  };

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "Popper",
      _vm._g(
        _vm._b(
          {
            ref: "popper",
            attrs: {
              theme: _vm.theme,
              "popper-node": function() {
                return _vm.$refs.popperContent.$el
              },
              "arrow-node": function() {
                return _vm.$refs.popperContent.$refs.arrow
              }
            },
            on: { "apply-show": _vm.onShow, "apply-hide": _vm.onHide },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var popperId = ref.popperId;
                  var isOpen = ref.isOpen;
                  var isMounted = ref.isMounted;
                  var skipTransition = ref.skipTransition;
                  var autoHide = ref.autoHide;
                  var hide = ref.hide;
                  var handleResize = ref.handleResize;
                  var onResize = ref.onResize;
                  return [
                    _c(
                      "PopperContent",
                      {
                        ref: "popperContent",
                        class: {
                          "v-popper--tooltip-loading": _vm.loading
                        },
                        attrs: {
                          "popper-id": popperId,
                          theme: _vm.theme,
                          "is-open": isOpen,
                          "is-mounted": isMounted,
                          "skip-transition": skipTransition,
                          "auto-hide": autoHide,
                          "handle-resize": handleResize
                        },
                        on: { hide: hide, resize: onResize }
                      },
                      [
                        _vm.contentHtml
                          ? _c("div", {
                              domProps: { innerHTML: _vm._s(_vm.finalContent) }
                            })
                          : _c("div", {
                              domProps: { textContent: _vm._s(_vm.finalContent) }
                            })
                      ]
                    )
                  ]
                }
              }
            ])
          },
          "Popper",
          _vm.$attrs,
          false
        ),
        _vm.$listeners
      )
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  var TARGET_CLASS = "v-popper--has-tooltip";
  /**
   * Support placement as directive modifier
   */

  function getPlacement(options, modifiers) {
    var result = options.placement;

    if (!result && modifiers) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Popper.placements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pos = _step.value;

          if (modifiers[pos]) {
            result = pos;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    if (!result) {
      result = getDefaultConfig(options.theme || 'tooltip', 'placement');
    }

    return result;
  }
  function getOptions(el, value, modifiers) {
    var options;

    var type = _typeof(value);

    if (type === 'string') {
      options = {
        content: value
      };
    } else if (value && type === 'object') {
      options = value;
    } else {
      options = {
        content: false
      };
    }

    options.placement = getPlacement(options, modifiers);

    options.targetNode = function () {
      return el;
    };

    return options;
  }
  function createTooltip(el, value, modifiers) {
    var options = getOptions(el, value, modifiers);
    var tooltipApp = el.$_popper = new Vue({
      data: {
        options: options
      },
      render: function render(h) {
        var options = this.options;
        return h(__vue_component__$5, {
          attrs: _objectSpread2({}, options, {
            // Delete props from attrs to prevent Vue from
            // mutating `this.options` when removing props
            // from `$attrs` automatically
            theme: undefined,
            contentHtml: undefined,
            content: undefined,
            loadingContent: undefined
          }),
          props: options,
          ref: 'tooltip'
        });
      }
    });
    var mountTarget = document.createElement('div');
    document.body.appendChild(mountTarget);
    tooltipApp.$mount(mountTarget); // Class on target

    if (el.classList) {
      el.classList.add(TARGET_CLASS);
    }

    return tooltipApp;
  }
  function destroyTooltip(el) {
    if (el.$_popper) {
      el.$_popper.$destroy();
      delete el.$_popper;
      delete el.$_popperOldOpen;
    }

    if (el.classList) {
      el.classList.remove(TARGET_CLASS);
    }
  }
  function bind(el, _ref) {
    var value = _ref.value,
        oldValue = _ref.oldValue,
        modifiers = _ref.modifiers;
    var options = getOptions(el, value, modifiers);

    if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
      destroyTooltip(el);
    } else {
      var tooltipApp;

      if (el.$_popper) {
        tooltipApp = el.$_popper;
        tooltipApp.options = options;
      } else {
        tooltipApp = createTooltip(el, value, modifiers);
      } // Manual show


      if (typeof value.open !== 'undefined' && value.open !== el.$_popperOldOpen) {
        el.$_popperOldOpen = value.open;
        value.open ? tooltipApp.$refs.tooltip.show() : tooltipApp.$refs.tooltip.hide();
      }
    }
  }
  var PrivateVTooltip = {
    bind: bind,
    update: bind,
    unbind: function unbind(el) {
      destroyTooltip(el);
    }
  };

  function addListeners(el) {
    el.addEventListener('click', onClick);
    el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
      passive: true
    } : false);
  }

  function removeListeners(el) {
    el.removeEventListener('click', onClick);
    el.removeEventListener('touchstart', onTouchStart);
    el.removeEventListener('touchend', onTouchEnd);
    el.removeEventListener('touchcancel', onTouchCancel);
  }

  function onClick(event) {
    var el = event.currentTarget;
    event.closePopover = !el.$_vclosepopover_touch;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }

  function onTouchStart(event) {
    if (event.changedTouches.length === 1) {
      var el = event.currentTarget;
      el.$_vclosepopover_touch = true;
      var touch = event.changedTouches[0];
      el.$_vclosepopover_touchPoint = touch;
      el.addEventListener('touchend', onTouchEnd);
      el.addEventListener('touchcancel', onTouchCancel);
    }
  }

  function onTouchEnd(event) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = false;

    if (event.changedTouches.length === 1) {
      var touch = event.changedTouches[0];
      var firstTouch = el.$_vclosepopover_touchPoint;
      event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
      event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
    }
  }

  function onTouchCancel(event) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = false;
  }

  var PrivateVClosePopper = {
    bind: function bind(el, _ref) {
      var value = _ref.value,
          modifiers = _ref.modifiers;
      el.$_closePopoverModifiers = modifiers;

      if (typeof value === 'undefined' || value) {
        addListeners(el);
      }
    },
    update: function update(el, _ref2) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue,
          modifiers = _ref2.modifiers;
      el.$_closePopoverModifiers = modifiers;

      if (value !== oldValue) {
        if (typeof value === 'undefined' || value) {
          addListeners(el);
        } else {
          removeListeners(el);
        }
      }
    },
    unbind: function unbind(el) {
      removeListeners(el);
    }
  };

  var Dropdown = __vue_component__$3;
  /* Vue plugin */

  function install$1(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (install$1.installed) return;
    install$1.installed = true;
    assign(config, options); // Directive

    Vue.directive('tooltip', PrivateVTooltip);
    Vue.directive('close-popper', PrivateVClosePopper); // Components

    Vue.component('v-dropdown', __vue_component__$3);
    Vue.component('VDropdown', __vue_component__$3);
    Vue.component('v-tooltip', __vue_component__$4);
    Vue.component('VTooltip', __vue_component__$4);
  }
  var plugin$1 = {
    install: install$1,
    options: config
  }; // Auto-install

  var GlobalVue$1 = null;

  if (typeof window !== 'undefined') {
    GlobalVue$1 = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue$1 = global.Vue;
  }

  if (GlobalVue$1) {
    GlobalVue$1.use(plugin$1);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown .v-popper__inner{background:#fff;color:#000;padding:24px;border-radius:6px;-webkit-box-shadow:0 6px 30px rgba(0,0,0,.1);box-shadow:0 6px 30px rgba(0,0,0,.1)}.v-popper--theme-dropdown .v-popper__arrow{border-color:#fff}.v-popper__popper{z-index:10000;visibility:hidden;opacity:0;-webkit-transition:opacity .15s,visibility .15s;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--open{visibility:visible;opacity:1;-webkit-transition:opacity .15s;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition{-webkit-transition:none!important;transition:none!important}.v-popper__arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;z-index:1}.v-popper__popper[x-placement^=top]{margin-bottom:5px}.v-popper__popper[x-placement^=top] .v-popper__arrow{border-width:5px 5px 0 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.v-popper__popper[x-placement^=bottom]{margin-top:5px}.v-popper__popper[x-placement^=bottom] .v-popper__arrow{border-width:0 5px 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.v-popper__popper[x-placement^=right]{margin-left:5px}.v-popper__popper[x-placement^=right] .v-popper__arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.v-popper__popper[x-placement^=left]{margin-right:5px}.v-popper__popper[x-placement^=left] .v-popper__arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.v-popper--theme-tooltip .v-popper__inner{background:rgba(0,0,0,.8);color:#fff;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow{border-color:rgba(0,0,0,.8)}";
  styleInject(css);

  var script$6 = Vue.extend({
      name: 'TwemojiPicker',
      components: {
          'v-popover': Dropdown
      },
      props: {
          disabled: {
              default: false,
              type: Boolean
          },
          pickerWidth: {
              default: 250,
              type: Number
          },
          pickerMaxHeight: {
              default: 200,
              type: Number
          },
          appendToBody: {
              default: false,
              type: Boolean
          },
          triggerType: {
              default: 'click',
              type: String,
              validator: function (value) {
                  if (value !== 'click' && value !== 'hover') {
                      console.error('The value entered for the prop "triggerType" is invalid. ' +
                          'Valid values: "click" and "hover".');
                  }
                  return true;
              }
          },
          emojiData: {
              default: () => [],
              type: Array
          },
          emojiGroups: {
              default: () => [],
              type: Array
          },
          skinsSelection: {
              default: false,
              type: Boolean
          },
          recentEmojisFeat: {
              default: false,
              type: Boolean
          },
          recentEmojisStorage: {
              default: 'none',
              type: String,
              validator: function (value) {
                  if (value !== 'local' && value !== 'session' && value !== 'none') {
                      console.error('The value entered for the prop "recentEmojisStorage" is invalid. ' +
                          'Valid values: "local", "session" and "none".');
                  }
                  return true;
              }
          },
          recentEmojiStorageName: {
              default: 'vue-recent-twemojis',
              type: String
          },
          recentEmojiLimit: {
              default: 12,
              type: Number
          },
          searchEmojisFeat: {
              default: false,
              type: Boolean
          },
          searchEmojiPlaceholder: {
              default: 'Search emojis.',
              type: String
          },
          searchEmojiNotFound: {
              default: 'No emojis found.',
              type: String
          },
          twemojiPath: {
              default: 'https://twemoji.maxcdn.com/2/',
              type: String
          },
          twemojiExtension: {
              default: '.png',
              type: String,
              validator: function (value) {
                  const bolValid = ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
                  if (bolValid === false) {
                      console.error('The value entered for the prop "twemojiPath" is invalid. ' +
                          'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".');
                  }
                  return true;
              }
          },
          twemojiFolder: {
              default: '72x72',
              type: String
          }
      },
      data() {
          return {
              showEmoji: false,
              popperOptions: {
                  modifiers: {
                      flip: {
                          enabled: false
                      }
                  }
              },
              showSkinsSelector: false,
              skinsListActive: [],
              emojiPack: [],
              emojiListActive: [],
              emojiGroupActive: 0,
              randomEmoji: '😄',
              isPointerOnEmojiBtn: false,
              twemojiOptions: {},
              recentEmojis: [],
              searchTerm: '',
              searchEmojis: [],
              searchTimeout: null
          };
      },
      computed: {
          randomEmojiImg() {
              this.triggerShowEmoji();
              return EmojiServiceImport.getEmojiImgFromUnicode(this.randomEmoji, this.twemojiOptions);
          }
      },
      created() {
          this.twemojiOptions = {
              base: this.twemojiPath,
              ext: this.twemojiExtension,
              size: this.twemojiFolder
          };
          if (this.recentEmojisFeat) {
              this.setRecentEmojis();
          }
          this.buildEmojiPack();
          this.emojiListActive = this.emojiPack[0].emojiList;
          this.setRandomEmoji();
      },
      methods: {
          triggerShowEmoji() {
              this.showEmoji = false;
              setTimeout(() => (this.showEmoji = true));
          },
          buildEmojiPack() {
              this.emojiPack = EmojiServiceImport.getEmojiImgArrayFromEmojiPack(this.emojiData, this.twemojiOptions);
          },
          onMouseEnterEmojiBtn() {
              if (this.isPointerOnEmojiBtn === false) {
                  this.isPointerOnEmojiBtn = true;
                  this.setRandomEmoji();
              }
          },
          onMouseLeaveEmojiBtn() {
              if (this.isPointerOnEmojiBtn === true) {
                  this.isPointerOnEmojiBtn = false;
              }
          },
          setRandomEmoji() {
              let emoji = { unicode: '😄' };
              if (this.emojiPack.length !== 0) {
                  emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];
              }
              this.randomEmoji = emoji.unicode;
          },
          clickEmoji(emoji) {
              var _a;
              let emojiUnicode;
              if (((_a = emoji.skins) === null || _a === void 0 ? void 0 : _a.length) !== 0 && this.skinsSelection) {
                  this.skinsListActive = Array.from(emoji.skins);
                  this.skinsListActive.unshift({
                      unicode: emoji.unicode,
                      img: emoji.img
                  });
                  this.showSkinsSelector = true;
                  return;
              }
              else {
                  emojiUnicode = emoji.unicode;
              }
              if (this.recentEmojisFeat) {
                  this.addEmojiToRecentEmojis(emojiUnicode);
              }
              this.$emit('addTextBlur', emojiUnicode);
              this.$emit('emojiUnicodeAdded', emojiUnicode);
              this.$emit('emojiImgAdded', EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions));
          },
          getEmojiGroupDescription(emojiGroup) {
              const emojiGroupFound = this.emojiGroups.find((x) => x.group === emojiGroup);
              if (emojiGroupFound) {
                  return EmojiServiceImport.getEmojiImgFromUnicode(emojiGroupFound.description, this.twemojiOptions);
              }
              return 'Group ' + emojiGroup;
          },
          changeEmojiListActive(index) {
              this.showSkinsSelector = false;
              this.searchTerm = '';
              this.emojiGroupActive = index;
              if (index >= 0) {
                  this.emojiListActive = this.emojiPack[index].emojiList;
              }
              else if (index === -1) {
                  this.emojiListActive = this.recentEmojis;
              }
          },
          getEmojiImgFromUnicode(unicode) {
              return EmojiServiceImport.getEmojiImgFromUnicode(unicode, this.twemojiOptions);
          },
          setRecentEmojis() {
              let recentEmojis = null;
              if (this.recentEmojisStorage === 'local') {
                  recentEmojis = JSON.parse(localStorage.getItem(this.recentEmojiStorageName) || '[]');
              }
              else if (this.recentEmojisStorage === 'session') {
                  recentEmojis = JSON.parse(sessionStorage.getItem(this.recentEmojiStorageName) || '[]');
              }
              else {
                  recentEmojis = [];
              }
              if (recentEmojis !== undefined && recentEmojis !== null) {
                  this.recentEmojis = recentEmojis;
              }
          },
          addEmojiToRecentEmojis(emojiUnicode) {
              const indexToRemove = this.recentEmojis.findIndex((x) => x.unicode === emojiUnicode);
              if (indexToRemove !== -1) {
                  this.recentEmojis.splice(indexToRemove, 1);
                  this.recentEmojis.unshift({
                      unicode: emojiUnicode,
                      img: EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions),
                      skins: [],
                      tags: []
                  });
              }
              else {
                  this.recentEmojis.unshift({
                      unicode: emojiUnicode,
                      img: EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions),
                      skins: [],
                      tags: []
                  });
              }
              if (this.recentEmojis.length > this.recentEmojiLimit) {
                  this.recentEmojis.splice(-1, 1);
              }
              if (this.recentEmojisStorage === 'local') {
                  localStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
              }
              else if (this.recentEmojisStorage === 'session') {
                  sessionStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
              }
          },
          searchEmojiByTerm() {
              clearTimeout(this.searchTimeout);
              if (this.searchTerm.length > 0) {
                  this.searchTimeout = setTimeout(() => {
                      this.searchEmojis = EmojiServiceImport.getEmojiImgArrayFromEmojiPackByTerm(this.emojiData, this.twemojiOptions, this.searchTerm);
                      this.emojiGroupActive = -2;
                      this.emojiListActive = this.searchEmojis;
                  }, 300);
              }
              else {
                  this.changeEmojiListActive(0);
              }
          }
      }
  });

  function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-popover",
      {
        attrs: {
          theme: "dropdown",
          trigger: _vm.disabled ? "manual" : _vm.triggerType,
          placement: "top",
          offset: -12,
          popperOptions: _vm.popperOptions,
          container: _vm.appendToBody ? "body" : "#btn-emoji"
        },
        scopedSlots: _vm._u([
          {
            key: "popper",
            fn: function() {
              return [
                _c(
                  "div",
                  {
                    style: { width: _vm.pickerWidth + "px" },
                    attrs: { id: "emoji-popup" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "scroll-min",
                        attrs: { id: "emoji-popover-header" }
                      },
                      [
                        _vm.recentEmojisFeat && _vm.recentEmojis.length !== 0
                          ? _c("span", {
                              staticClass: "emoji-tab",
                              class: { active: _vm.emojiGroupActive === -1 },
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.getEmojiImgFromUnicode("⏱️")
                                )
                              },
                              on: {
                                click: function($event) {
                                  return _vm.changeEmojiListActive(-1)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.emojiPack, function(emojiGroup, index) {
                          return _c("span", {
                            key: emojiGroup.group,
                            staticClass: "emoji-tab",
                            class: { active: _vm.emojiGroupActive === index },
                            attrs: { id: emojiGroup.group },
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.getEmojiGroupDescription(emojiGroup.group)
                              )
                            },
                            on: {
                              click: function($event) {
                                return _vm.changeEmojiListActive(index)
                              }
                            }
                          })
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.searchEmojisFeat
                      ? _c("div", { attrs: { id: "emoji-popover-search" } }, [
                          _c("div", { attrs: { id: "search-header" } }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.searchTerm,
                                  expression: "searchTerm"
                                }
                              ],
                              attrs: { placeholder: _vm.searchEmojiPlaceholder },
                              domProps: { value: _vm.searchTerm },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.searchTerm = $event.target.value;
                                  },
                                  _vm.searchEmojiByTerm
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.getEmojiImgFromUnicode("🔍")
                                )
                              }
                            })
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "emoji-popover-inner",
                        style: {
                          width: _vm.pickerWidth + "px",
                          maxHeight: _vm.pickerMaxHeight + "px"
                        }
                      },
                      [
                        _vm.searchTerm.length !== 0 &&
                        _vm.searchEmojis.length === 0
                          ? _c("div", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.searchEmojiNotFound))
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.emojiListActive.length !== 0
                          ? _c("div", [
                              _c(
                                "p",
                                { staticClass: "emoji-list" },
                                _vm._l(_vm.emojiListActive, function(emoji) {
                                  return _c("span", {
                                    key: emoji.unicode,
                                    domProps: { innerHTML: _vm._s(emoji.img) },
                                    on: {
                                      click: function($event) {
                                        return _vm.clickEmoji(emoji)
                                      }
                                    }
                                  })
                                }),
                                0
                              )
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _vm.showSkinsSelector
                      ? _c(
                          "div",
                          {
                            style: { width: _vm.pickerWidth + "px" },
                            attrs: { id: "emoji-skins-popup" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "emoji-popover-inner",
                                style: {
                                  width: _vm.pickerWidth + "px",
                                  maxHeight: _vm.pickerMaxHeight + "px"
                                }
                              },
                              [
                                _vm.emojiListActive.length !== 0
                                  ? _c("div", [
                                      _c(
                                        "p",
                                        { staticClass: "emoji-list" },
                                        _vm._l(_vm.skinsListActive, function(
                                          emoji
                                        ) {
                                          return _c("span", {
                                            key: emoji.unicode,
                                            domProps: {
                                              innerHTML: _vm._s(emoji.img)
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.clickEmoji(emoji)
                                              }
                                            }
                                          })
                                        }),
                                        0
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ]
            },
            proxy: true
          }
        ])
      },
      [
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { id: "btn-emoji", disabled: _vm.disabled },
            on: {
              mouseenter: function($event) {
                return _vm.onMouseEnterEmojiBtn()
              },
              mouseleave: function($event) {
                return _vm.onMouseLeaveEmojiBtn()
              }
            }
          },
          [
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showEmoji,
                  expression: "showEmoji"
                }
              ],
              staticClass: "fade-in",
              domProps: { innerHTML: _vm._s(_vm.randomEmojiImg) }
            }),
            _vm._v(" "),
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showEmoji,
                  expression: "!showEmoji"
                }
              ],
              attrs: { id: "dummy-el" }
            })
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-006ce1c6_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Global */\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\n}\r\n\r\n/* Parent Emoji Popover */\n#emoji-popover-header {\r\n  padding: 5px;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\n}\n.emoji-popover-inner {\r\n  border-top: #bdbcbc solid 1px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\n}\r\n\r\n/* Inside Emoji Pack */\n.emoji-tab {\r\n  margin: 3px;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  padding-bottom: 8px;\r\n  cursor: pointer;\r\n  border-top: 3px solid #e6e6e6;\r\n  border-left: 3px solid #e6e6e6;\r\n  border-right: 3px solid #e6e6e6;\n}\n.emoji-tab:hover {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\n}\n.emoji-tab.active {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\n}\n.emoji-list {\r\n  padding: 10px;\r\n  margin: 0px;\r\n  text-align: justify;\n}\n.emoji-list > span {\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  border-radius: 15px;\n}\n.emoji-list > span > img {\r\n  margin: 5px;\n}\n.emoji-list > span:hover {\r\n  background-color: #cacaca;\n}\r\n\r\n/* Popper Emoji */\n#btn-emoji {\r\n  -webkit-box-flex: 100;\r\n      -ms-flex-positive: 100;\r\n          flex-grow: 100;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  border-radius: 25px;\r\n  margin: 10px;\r\n  background-color: transparent;\n}\n#btn-emoji > div > img.emoji {\r\n  height: 25px;\r\n  width: 25px;\n}\n#btn-emoji > #dummy-el {\r\n  height: 25px;\r\n  width: 25px;\n}\n#btn-emoji:disabled {\r\n  opacity: 0.6;\r\n  pointer-events: none;\n}\r\n\r\n/* Search Bar */\n#emoji-popover-search {\r\n  background-color: #e6e6e6;\r\n  border-radius: 3px;\r\n  margin-bottom: 5px;\n}\n#emoji-popover-search > #search-header {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\n}\n#emoji-popover-search > #search-header > input {\r\n  -webkit-box-flex: 90;\r\n      -ms-flex-positive: 90;\r\n          flex-grow: 90;\r\n  padding: 5px;\r\n  margin-left: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #fafafa;\n}\n#emoji-popover-search > #search-header > span {\r\n  -webkit-box-flex: 10;\r\n      -ms-flex-positive: 10;\r\n          flex-grow: 10;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: transparent;\n}\r\n\r\n/** Cursor */\n.clickable {\r\n  cursor: pointer;\n}\r\n\r\n/*Vue Tooltip / Popover Styles */\n.v-popper__wrapper > .v-popper__inner {\r\n  padding: 0;\r\n  border: 3px #fafafa solid;\n}\r\n\r\n/** Transition - Fade */\n.fade-in {\r\n  opacity: 1;\r\n  -webkit-animation-name: fadeInOpacity;\r\n          animation-name: fadeInOpacity;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease-in;\r\n          animation-timing-function: ease-in;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes fadeInOpacity {\n0% {\r\n    opacity: 0.4;\n}\n50% {\r\n    opacity: 0.8;\n}\n100% {\r\n    opacity: 1;\n}\n}\n@keyframes fadeInOpacity {\n0% {\r\n    opacity: 0.4;\n}\n50% {\r\n    opacity: 0.8;\n}\n100% {\r\n    opacity: 1;\n}\n}\r\n", map: {"version":3,"sources":["C:\\Users\\kevin\\Desktop\\Projects\\vue-twemoji-picker\\src\\components\\TwemojiPicker.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0GA,WAAA;AACA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AACA;;AAEA,yBAAA;AACA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACA;AAEA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,sBAAA;AACA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;AACA;AAEA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,yBAAA;AACA;;AAEA,iBAAA;AACA;EACA,qBAAA;MAAA,sBAAA;UAAA,cAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,6BAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,YAAA;EACA,oBAAA;AACA;;AAEA,eAAA;AACA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;AACA;AAEA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,6BAAA;AACA;;AAEA,YAAA;AACA;EACA,eAAA;AACA;;AAEA,gCAAA;AACA;EACA,UAAA;EACA,yBAAA;AACA;;AAEA,uBAAA;AACA;EACA,UAAA;EACA,qCAAA;UAAA,6BAAA;EACA,oCAAA;UAAA,4BAAA;EACA,0CAAA;UAAA,kCAAA;EACA,gCAAA;UAAA,wBAAA;AACA;AAEA;AACA;IACA,YAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,UAAA;AACA;AACA;AAVA;AACA;IACA,YAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,UAAA;AACA;AACA","file":"TwemojiPicker.vue","sourcesContent":["<template>\r\n  <v-popover\r\n    theme=\"dropdown\"\r\n    :trigger=\"disabled ? 'manual' : triggerType\"\r\n    placement=\"top\"\r\n    :offset=\"-12\"\r\n    :popperOptions=\"popperOptions\"\r\n    :container=\"appendToBody ? 'body' : '#btn-emoji'\"\r\n  >\r\n    <template #popper>\r\n      <div id=\"emoji-popup\" :style=\"{ width: pickerWidth + 'px' }\">\r\n        <div id=\"emoji-popover-header\" class=\"scroll-min\">\r\n          <span\r\n            v-if=\"recentEmojisFeat && recentEmojis.length !== 0\"\r\n            v-html=\"getEmojiImgFromUnicode('⏱️')\"\r\n            class=\"emoji-tab\"\r\n            @click=\"changeEmojiListActive(-1)\"\r\n            :class=\"{ active: emojiGroupActive === -1 }\"\r\n          ></span>\r\n          <span\r\n            v-for=\"(emojiGroup, index) in emojiPack\"\r\n            :key=\"emojiGroup.group\"\r\n            :id=\"emojiGroup.group\"\r\n            v-html=\"getEmojiGroupDescription(emojiGroup.group)\"\r\n            class=\"emoji-tab\"\r\n            @click=\"changeEmojiListActive(index)\"\r\n            :class=\"{ active: emojiGroupActive === index }\"\r\n          >\r\n          </span>\r\n        </div>\r\n\r\n        <div id=\"emoji-popover-search\" v-if=\"searchEmojisFeat\">\r\n          <div id=\"search-header\">\r\n            <input\r\n              @input=\"searchEmojiByTerm\"\r\n              :placeholder=\"searchEmojiPlaceholder\"\r\n              v-model=\"searchTerm\"\r\n            />\r\n            <span v-html=\"getEmojiImgFromUnicode('🔍')\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"emoji-popover-inner\"\r\n          :style=\"{\r\n            width: pickerWidth + 'px',\r\n            maxHeight: pickerMaxHeight + 'px'\r\n          }\"\r\n        >\r\n          <div v-if=\"searchTerm.length !== 0 && searchEmojis.length === 0\">\r\n            <strong>{{ searchEmojiNotFound }}</strong>\r\n          </div>\r\n\r\n          <div v-if=\"emojiListActive.length !== 0\">\r\n            <p class=\"emoji-list\">\r\n              <span\r\n                v-for=\"emoji in emojiListActive\"\r\n                :key=\"emoji.unicode\"\r\n                v-html=\"emoji.img\"\r\n                @click=\"clickEmoji(emoji)\"\r\n              >\r\n              </span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          id=\"emoji-skins-popup\"\r\n          :style=\"{ width: pickerWidth + 'px' }\"\r\n          v-if=\"showSkinsSelector\"\r\n        >\r\n          <div\r\n            class=\"emoji-popover-inner\"\r\n            :style=\"{\r\n              width: pickerWidth + 'px',\r\n              maxHeight: pickerMaxHeight + 'px'\r\n            }\"\r\n          >\r\n            <div v-if=\"emojiListActive.length !== 0\">\r\n              <p class=\"emoji-list\">\r\n                <span\r\n                  v-for=\"emoji in skinsListActive\"\r\n                  :key=\"emoji.unicode\"\r\n                  v-html=\"emoji.img\"\r\n                  @click=\"clickEmoji(emoji)\"\r\n                >\r\n                </span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </template>\r\n\r\n    <button\r\n      id=\"btn-emoji\"\r\n      @mouseenter=\"onMouseEnterEmojiBtn()\"\r\n      @mouseleave=\"onMouseLeaveEmojiBtn()\"\r\n      :disabled=\"disabled\"\r\n    >\r\n      <div v-show=\"showEmoji\" v-html=\"randomEmojiImg\" class=\"fade-in\"></div>\r\n      <div v-show=\"!showEmoji\" id=\"dummy-el\"></div>\r\n    </button>\r\n  </v-popover>\r\n</template>\r\n<style lang=\"css\">\r\n/* Global */\r\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\r\n}\r\n\r\n/* Parent Emoji Popover */\r\n#emoji-popover-header {\r\n  padding: 5px;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.emoji-popover-inner {\r\n  border-top: #bdbcbc solid 1px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* Inside Emoji Pack */\r\n.emoji-tab {\r\n  margin: 3px;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  padding-bottom: 8px;\r\n  cursor: pointer;\r\n  border-top: 3px solid #e6e6e6;\r\n  border-left: 3px solid #e6e6e6;\r\n  border-right: 3px solid #e6e6e6;\r\n}\r\n\r\n.emoji-tab:hover {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\r\n}\r\n\r\n.emoji-tab.active {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\r\n}\r\n\r\n.emoji-list {\r\n  padding: 10px;\r\n  margin: 0px;\r\n  text-align: justify;\r\n}\r\n\r\n.emoji-list > span {\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n}\r\n\r\n.emoji-list > span > img {\r\n  margin: 5px;\r\n}\r\n\r\n.emoji-list > span:hover {\r\n  background-color: #cacaca;\r\n}\r\n\r\n/* Popper Emoji */\r\n#btn-emoji {\r\n  flex-grow: 100;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  border-radius: 25px;\r\n  margin: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n#btn-emoji > div > img.emoji {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n#btn-emoji > #dummy-el {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n#btn-emoji:disabled {\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Search Bar */\r\n#emoji-popover-search {\r\n  background-color: #e6e6e6;\r\n  border-radius: 3px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#emoji-popover-search > #search-header {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n#emoji-popover-search > #search-header > input {\r\n  flex-grow: 90;\r\n  padding: 5px;\r\n  margin-left: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #fafafa;\r\n}\r\n\r\n#emoji-popover-search > #search-header > span {\r\n  flex-grow: 10;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n/** Cursor */\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n/*Vue Tooltip / Popover Styles */\r\n.v-popper__wrapper > .v-popper__inner {\r\n  padding: 0;\r\n  border: 3px #fafafa solid;\r\n}\r\n\r\n/** Transition - Fade */\r\n.fade-in {\r\n  opacity: 1;\r\n  animation-name: fadeInOpacity;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-in;\r\n  animation-duration: 0.3s;\r\n}\r\n\r\n@keyframes fadeInOpacity {\r\n  0% {\r\n    opacity: 0.4;\r\n  }\r\n  50% {\r\n    opacity: 0.8;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n</style>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue';\r\nimport EmojiService from '../services/EmojiService';\r\nimport { Dropdown } from 'v-tooltip';\r\nimport 'v-tooltip/dist/v-tooltip.css';\r\nimport EmojiPack from '../interfaces/EmojiPack';\r\nimport Emoji from '../interfaces/Emoji';\r\nimport TwemojiOptions from '../interfaces/TwemojiOptions';\r\nimport PopperOptions from '../interfaces/PopperOptions';\r\nimport EmojiSkin from '../interfaces/EmojiSkin';\r\nimport EmojiGroup from '../interfaces/EmojiGroup';\r\n\r\nexport default Vue.extend({\r\n  name: 'TwemojiPicker',\r\n\r\n  components: {\r\n    'v-popover': Dropdown\r\n  },\r\n\r\n  props: {\r\n    disabled: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    pickerWidth: {\r\n      default: 250,\r\n      type: Number as () => number\r\n    },\r\n    pickerMaxHeight: {\r\n      default: 200,\r\n      type: Number as () => number\r\n    },\r\n    appendToBody: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    triggerType: {\r\n      default: 'click',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'click' && value !== 'hover') {\r\n          console.error(\r\n            'The value entered for the prop \"triggerType\" is invalid. ' +\r\n              'Valid values: \"click\" and \"hover\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    emojiData: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiPack>\r\n    },\r\n    emojiGroups: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiGroup>\r\n    },\r\n    skinsSelection: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisStorage: {\r\n      default: 'none',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'local' && value !== 'session' && value !== 'none') {\r\n          console.error(\r\n            'The value entered for the prop \"recentEmojisStorage\" is invalid. ' +\r\n              'Valid values: \"local\", \"session\" and \"none\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    recentEmojiStorageName: {\r\n      default: 'vue-recent-twemojis',\r\n      type: String as () => string\r\n    },\r\n    recentEmojiLimit: {\r\n      default: 12,\r\n      type: Number as () => number\r\n    },\r\n    searchEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    searchEmojiPlaceholder: {\r\n      default: 'Search emojis.',\r\n      type: String as () => string\r\n    },\r\n    searchEmojiNotFound: {\r\n      default: 'No emojis found.',\r\n      type: String as () => string\r\n    },\r\n    twemojiPath: {\r\n      default: 'https://twemoji.maxcdn.com/2/',\r\n      type: String as () => string\r\n    },\r\n    twemojiExtension: {\r\n      default: '.png',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"twemojiPath\" is invalid. ' +\r\n              'Valid values: \".png\", \".svg\", \".jpg\", \".jpeg\", \".ico\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    twemojiFolder: {\r\n      default: '72x72',\r\n      type: String as () => string\r\n    }\r\n  },\r\n\r\n  data() {\r\n    return {\r\n      showEmoji: false as boolean,\r\n      popperOptions: {\r\n        modifiers: {\r\n          flip: {\r\n            enabled: false\r\n          }\r\n        }\r\n      } as PopperOptions,\r\n      showSkinsSelector: false as boolean,\r\n      skinsListActive: [] as Array<EmojiSkin>,\r\n\r\n      emojiPack: [] as Array<EmojiPack>,\r\n      emojiListActive: [] as Array<Emoji>,\r\n      emojiGroupActive: 0 as number,\r\n\r\n      randomEmoji: '😄' as string,\r\n\r\n      isPointerOnEmojiBtn: false as boolean,\r\n      twemojiOptions: {} as TwemojiOptions,\r\n\r\n      recentEmojis: [] as Array<Emoji>,\r\n\r\n      searchTerm: '' as string,\r\n      searchEmojis: [] as Array<Emoji>,\r\n      searchTimeout: null as any\r\n    };\r\n  },\r\n\r\n  computed: {\r\n    randomEmojiImg(): string {\r\n      this.triggerShowEmoji();\r\n      return EmojiService.getEmojiImgFromUnicode(\r\n        this.randomEmoji,\r\n        this.twemojiOptions\r\n      );\r\n    }\r\n  },\r\n\r\n  created(): void {\r\n    this.twemojiOptions = {\r\n      base: this.twemojiPath,\r\n      ext: this.twemojiExtension,\r\n      size: this.twemojiFolder\r\n    };\r\n    if (this.recentEmojisFeat) {\r\n      this.setRecentEmojis();\r\n    }\r\n    this.buildEmojiPack();\r\n    this.emojiListActive = this.emojiPack[0].emojiList;\r\n    this.setRandomEmoji();\r\n  },\r\n\r\n  methods: {\r\n    triggerShowEmoji(): void {\r\n      this.showEmoji = false;\r\n      setTimeout(() => (this.showEmoji = true));\r\n    },\r\n    buildEmojiPack(): void {\r\n      this.emojiPack = EmojiService.getEmojiImgArrayFromEmojiPack(\r\n        this.emojiData,\r\n        this.twemojiOptions\r\n      );\r\n    },\r\n    onMouseEnterEmojiBtn(): void {\r\n      if (this.isPointerOnEmojiBtn === false) {\r\n        this.isPointerOnEmojiBtn = true;\r\n        this.setRandomEmoji();\r\n      }\r\n    },\r\n    onMouseLeaveEmojiBtn(): void {\r\n      if (this.isPointerOnEmojiBtn === true) {\r\n        this.isPointerOnEmojiBtn = false;\r\n      }\r\n    },\r\n    setRandomEmoji(): void {\r\n      let emoji = { unicode: '😄' };\r\n      if (this.emojiPack.length !== 0) {\r\n        emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];\r\n      }\r\n      this.randomEmoji = emoji.unicode;\r\n    },\r\n\r\n    clickEmoji(emoji: Emoji): void {\r\n      let emojiUnicode;\r\n      if (emoji.skins?.length !== 0 && this.skinsSelection) {\r\n        this.skinsListActive = Array.from(emoji.skins);\r\n        this.skinsListActive.unshift({\r\n          unicode: emoji.unicode,\r\n          img: emoji.img\r\n        });\r\n        this.showSkinsSelector = true;\r\n        return;\r\n      } else {\r\n        emojiUnicode = emoji.unicode;\r\n      }\r\n\r\n      if (this.recentEmojisFeat) {\r\n        this.addEmojiToRecentEmojis(emojiUnicode);\r\n      }\r\n\r\n      this.$emit('addTextBlur', emojiUnicode);\r\n      this.$emit('emojiUnicodeAdded', emojiUnicode);\r\n      this.$emit(\r\n        'emojiImgAdded',\r\n        EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions)\r\n      );\r\n    },\r\n\r\n    getEmojiGroupDescription(emojiGroup: number): string {\r\n      const emojiGroupFound = this.emojiGroups.find(\r\n        (x: EmojiGroup) => x.group === emojiGroup\r\n      );\r\n      if (emojiGroupFound) {\r\n        return EmojiService.getEmojiImgFromUnicode(\r\n          emojiGroupFound.description,\r\n          this.twemojiOptions\r\n        );\r\n      }\r\n      return 'Group ' + emojiGroup;\r\n    },\r\n\r\n    changeEmojiListActive(index: number): void {\r\n      this.showSkinsSelector = false;\r\n      this.searchTerm = '';\r\n      this.emojiGroupActive = index;\r\n      if (index >= 0) {\r\n        this.emojiListActive = this.emojiPack[index].emojiList;\r\n      } else if (index === -1) {\r\n        this.emojiListActive = this.recentEmojis;\r\n      }\r\n    },\r\n\r\n    getEmojiImgFromUnicode(unicode: string): string {\r\n      return EmojiService.getEmojiImgFromUnicode(unicode, this.twemojiOptions);\r\n    },\r\n\r\n    setRecentEmojis(): void {\r\n      let recentEmojis = null;\r\n      if (this.recentEmojisStorage === 'local') {\r\n        recentEmojis = JSON.parse(\r\n          localStorage.getItem(this.recentEmojiStorageName) || '[]'\r\n        );\r\n      } else if (this.recentEmojisStorage === 'session') {\r\n        recentEmojis = JSON.parse(\r\n          sessionStorage.getItem(this.recentEmojiStorageName) || '[]'\r\n        );\r\n      } else {\r\n        recentEmojis = [];\r\n      }\r\n\r\n      if (recentEmojis !== undefined && recentEmojis !== null) {\r\n        this.recentEmojis = recentEmojis;\r\n      }\r\n    },\r\n    addEmojiToRecentEmojis(emojiUnicode: string): void {\r\n      const indexToRemove = this.recentEmojis.findIndex(\r\n        (x: Emoji) => x.unicode === emojiUnicode\r\n      );\r\n      if (indexToRemove !== -1) {\r\n        this.recentEmojis.splice(indexToRemove, 1);\r\n        this.recentEmojis.unshift({\r\n          unicode: emojiUnicode,\r\n          img: EmojiService.getEmojiImgFromUnicode(\r\n            emojiUnicode,\r\n            this.twemojiOptions\r\n          ),\r\n          skins: [],\r\n          tags: []\r\n        });\r\n      } else {\r\n        this.recentEmojis.unshift({\r\n          unicode: emojiUnicode,\r\n          img: EmojiService.getEmojiImgFromUnicode(\r\n            emojiUnicode,\r\n            this.twemojiOptions\r\n          ),\r\n          skins: [],\r\n          tags: []\r\n        });\r\n      }\r\n\r\n      if (this.recentEmojis.length > this.recentEmojiLimit) {\r\n        this.recentEmojis.splice(-1, 1);\r\n      }\r\n\r\n      if (this.recentEmojisStorage === 'local') {\r\n        localStorage.setItem(\r\n          this.recentEmojiStorageName,\r\n          JSON.stringify(this.recentEmojis)\r\n        );\r\n      } else if (this.recentEmojisStorage === 'session') {\r\n        sessionStorage.setItem(\r\n          this.recentEmojiStorageName,\r\n          JSON.stringify(this.recentEmojis)\r\n        );\r\n      }\r\n    },\r\n\r\n    searchEmojiByTerm() {\r\n      clearTimeout(this.searchTimeout);\r\n      if (this.searchTerm.length > 0) {\r\n        this.searchTimeout = setTimeout(() => {\r\n          this.searchEmojis = EmojiService.getEmojiImgArrayFromEmojiPackByTerm(\r\n            this.emojiData,\r\n            this.twemojiOptions,\r\n            this.searchTerm\r\n          );\r\n          this.emojiGroupActive = -2;\r\n          this.emojiListActive = this.searchEmojis;\r\n        }, 300);\r\n      } else {\r\n        this.changeEmojiListActive(0);\r\n      }\r\n    }\r\n  }\r\n});\r\n</script>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = normalizeComponent$1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      createInjector,
      undefined,
      undefined
    );

  var TextareaParserImport = {
      replaceEmojiWithAltAttribute(text) {
          return text.replace(/<img class="emoji".*?alt="(.*?)"[^>]+>/g, '$1');
      },
      unescapeHtml(text) {
          return text
              .replace(/&amp;/g, '&')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'");
      },
      escapeHTML(text) {
          var _a;
          const divEscapedHtml = document.createElement('div');
          const escapedHtmlTextNode = divEscapedHtml.appendChild(document.createTextNode(text));
          const escapedHtml = escapedHtmlTextNode.parentNode;
          const escapedHtmlContent = escapedHtml.innerHTML;
          escapedHtml.removeChild(escapedHtmlTextNode);
          (_a = divEscapedHtml.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(divEscapedHtml);
          // eslint-disable-next-line
          return escapedHtmlContent;
      }
  };

  var script$7 = Vue.extend({
      name: 'SendIconImg'
  });

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("img", {
      attrs: {
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMADQ/78CgT7NLzy8WypJaBcV9XUCAXPTva1p2QiGEz4M26qnlmRDYkCH5CaGIAAAEHSURBVFjD7ZdbDoIwEEW1LVhAK1pBFFB82/1v0A9jJjEhVm9N5oOzgJM+bqczo4EBfow3NpDIOZeLQCIn0ziA6EnVwqIXah6DImIWgSIiWaMiUhlUREx3oIjQFhUR+TiEiFKKiIhqgYsopbCIUgqKCOWTUuF8UAYXUUpBEdFZVETkAhMRMiv6TEV0XdSZ9HdtPqR0dTk3x3Tio5p4pXS1bA56r/CUktDoRMr+ZZWjL7iLImq3uiel9Q/l71YuT9vs/QTltAwuwreGH/b6L9ePBxJ/IvijZVRGOsuo1CoT6Dti9EGqecyniZCpYNRoacuoGU0Mp4Z9FjEaaqqW0+CXC07D8cAAEx5sROBoZAawIAAAAABJRU5ErkJggg=="
      }
    })
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = normalizeComponent$1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$8 = Vue.extend({
      name: 'TwemojiTextarea',
      components: {
          'twemoji-picker': __vue_component__$6,
          'send-icon-img': __vue_component__$7
      },
      props: {
          // ** Picker Props **/
          pickerWidth: {
              default: 250,
              type: Number
          },
          pickerMaxHeight: {
              default: 200,
              type: Number
          },
          appendToBody: {
              default: false,
              type: Boolean
          },
          triggerType: {
              default: 'click',
              type: String,
              validator: function (value) {
                  if (value !== 'click' && value !== 'hover') {
                      console.error('The value entered for the prop "triggerType" is invalid. ' +
                          'Valid values: "click" and "hover".');
                  }
                  return true;
              }
          },
          emojiData: {
              default: () => [],
              type: Array
          },
          emojiGroups: {
              default: () => [],
              type: Array
          },
          skinsSelection: {
              default: false,
              type: Boolean
          },
          recentEmojisFeat: {
              default: false,
              type: Boolean
          },
          recentEmojisStorage: {
              default: 'none',
              type: String,
              validator: function (value) {
                  if (value !== 'local' && value !== 'session' && value !== 'none') {
                      console.error('The value entered for the prop "recentEmojisStorage" is invalid. ' +
                          'Valid values: "local", "session" and "none".');
                  }
                  return true;
              }
          },
          recentEmojiStorageName: {
              default: 'vue-recent-twemojis',
              type: String
          },
          recentEmojiLimit: {
              default: 12,
              type: Number
          },
          searchEmojisFeat: {
              default: false,
              type: Boolean
          },
          searchEmojiPlaceholder: {
              default: 'Search emojis.',
              type: String
          },
          searchEmojiNotFound: {
              default: 'No emojis found.',
              type: String
          },
          twemojiPath: {
              default: 'https://twemoji.maxcdn.com/2/',
              type: String
          },
          twemojiExtension: {
              default: '.png',
              type: String,
              validator: function (value) {
                  const bolValid = ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
                  if (bolValid === false) {
                      console.error('The value entered for the prop "twemojiPath" is invalid. ' +
                          'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".');
                  }
                  return true;
              }
          },
          twemojiFolder: {
              default: '72x72',
              type: String
          },
          // ** Textarea Props **/
          content: {
              default: '',
              type: String
          },
          enableSendBtn: {
              default: false,
              type: Boolean
          },
          disableEmojiPicker: {
              default: false,
              type: Boolean
          },
          disabled: {
              default: false,
              type: Boolean
          },
          componentColor: {
              type: String,
              default: 'cream',
              validator: function (value) {
                  const bolValid = ['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent'].indexOf(value) !== -1;
                  if (bolValid === false) {
                      console.error('The value entered for the prop "componentColor" is invalid. ' +
                          'Valid values: "cream", "cherry", "forest", "ocean", "sun".');
                  }
                  return true;
              }
          }
      },
      data() {
          return {
              savedRange: null,
              twemojiOptions: {}
          };
      },
      computed: {
          twemojiTextarea() {
              return this.$refs.twemojiTextarea;
          }
      },
      created() {
          this.twemojiOptions = {
              base: this.twemojiPath,
              ext: this.twemojiExtension,
              size: this.twemojiFolder
          };
      },
      mounted() {
          this.addText(this.content);
      },
      methods: {
          updateContent(event) {
              const targetedElement = event.target;
              let content = targetedElement.innerHTML;
              content = TextareaParserImport.replaceEmojiWithAltAttribute(content);
              content = TextareaParserImport.unescapeHtml(content);
              if (content.length !== 0 && content[content.length - 1] === '\n') {
                  content = content.slice(0, -1);
              }
              this.$emit('update:content', content);
              this.$emit('contentChanged');
          },
          emitEnterKeyEvent(event) {
              this.$emit('enterKey', event);
          },
          enterKey(event) {
              if (event.shiftKey === false)
                  this.emitEnterKeyEvent(event);
          },
          shiftEnterKey(event) {
              event.stopPropagation();
              event.preventDefault();
              if (this.twemojiTextarea.innerHTML === '' ||
                  this.twemojiTextarea.innerHTML[this.twemojiTextarea.innerHTML.length - 1] !== '\n') {
                  this.addText('\n');
                  this.addText('\n');
              }
              else {
                  this.addText('\n');
              }
              this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
          },
          onPaste(pasteEvent) {
              var _a;
              let pastedData;
              pasteEvent.stopPropagation();
              pasteEvent.preventDefault();
              const clipboardData = pasteEvent.clipboardData;
              pastedData = ((_a = clipboardData) === null || _a === void 0 ? void 0 : _a.getData('Text')) || '';
              pastedData = TextareaParserImport.escapeHTML(pastedData);
              pastedData = EmojiServiceImport.getEmojiImgFromUnicode(pastedData, this.twemojiOptions);
              window.document.execCommand('insertHTML', false, pastedData);
              this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
          },
          focus() {
              var _a, _b;
              const doc = this.twemojiTextarea;
              const childNode = doc.childNodes[0];
              doc.focus();
              if (childNode === undefined) {
                  const textNode = document.createTextNode('');
                  doc.appendChild(textNode);
                  const range = document.createRange();
                  const sel = window.getSelection();
                  range.setStart(doc.childNodes[0], 0);
                  range.collapse(true);
                  (_a = sel) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
                  (_b = sel) === null || _b === void 0 ? void 0 : _b.addRange(range);
                  this.saveSelection();
              }
          },
          blur() {
              const doc = this.twemojiTextarea;
              doc.blur();
          },
          saveSelection() {
              var _a;
              if (window.getSelection) {
                  this.savedRange = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0);
              }
          },
          restoreSelection() {
              var _a, _b, _c;
              const doc = this.twemojiTextarea;
              doc.focus();
              if (this.savedRange != null) {
                  if (window.getSelection) {
                      const s = window.getSelection();
                      if (((_a = s) === null || _a === void 0 ? void 0 : _a.rangeCount) || 0 > 0) {
                          (_b = s) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
                      }
                      (_c = s) === null || _c === void 0 ? void 0 : _c.addRange(this.savedRange);
                  }
              }
          },
          addTextBlur(text) {
              this.focus();
              text = TextareaParserImport.escapeHTML(text);
              text = EmojiServiceImport.getEmojiImgFromUnicode(text, this.twemojiOptions);
              window.document.execCommand('insertHTML', false, text);
              this.saveSelection();
              this.blur();
          },
          addText(text) {
              this.focus();
              text = TextareaParserImport.escapeHTML(text);
              text = EmojiServiceImport.getEmojiImgFromUnicode(text, this.twemojiOptions);
              window.document.execCommand('insertHTML', false, text);
              this.saveSelection();
          },
          cleanText() {
              this.twemojiTextarea.innerHTML = '';
              this.$emit('update:content', '');
          },
          emojiUnicodeAdded(unicode) {
              this.$emit('emojiUnicodeAdded', unicode);
          },
          emojiImgAdded(img) {
              this.$emit('emojiImgAdded', img);
          }
      }
  });

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "twemoji-textarea-outer",
        class: "bg-" + _vm.componentColor
      },
      [
        _c("twemoji-picker", {
          attrs: {
            pickerWidth: _vm.pickerWidth,
            pickerMaxHeight: _vm.pickerMaxHeight,
            appendToBody: _vm.appendToBody,
            triggerType: _vm.triggerType,
            emojiData: _vm.emojiData,
            emojiGroups: _vm.emojiGroups,
            skinsSelection: _vm.skinsSelection,
            recentEmojisFeat: _vm.recentEmojisFeat,
            recentEmojisStorage: _vm.recentEmojisStorage,
            recentEmojiStorageName: _vm.recentEmojiStorageName,
            recentEmojiLimit: _vm.recentEmojiLimit,
            searchEmojisFeat: _vm.searchEmojisFeat,
            searchEmojiPlaceholder: _vm.searchEmojiPlaceholder,
            searchEmojiNotFound: _vm.searchEmojiNotFound,
            twemojiPath: _vm.twemojiPath,
            twemojiExtension: _vm.twemojiExtension,
            twemojiFolder: _vm.twemojiFolder,
            disabled: _vm.disableEmojiPicker
          },
          on: {
            addTextBlur: _vm.addTextBlur,
            emojiUnicodeAdded: _vm.emojiUnicodeAdded,
            emojiImgAdded: _vm.emojiImgAdded
          }
        }),
        _vm._v(" "),
        _c("div", {
          ref: "twemojiTextarea",
          staticClass: "twemojiTextarea",
          attrs: {
            id: "twemoji-textarea",
            contenteditable: _vm.disabled ? false : true
          },
          on: {
            input: _vm.updateContent,
            paste: _vm.onPaste,
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                if (
                  $event.ctrlKey ||
                  $event.shiftKey ||
                  $event.altKey ||
                  $event.metaKey
                ) {
                  return null
                }
                return _vm.enterKey($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                if (!$event.shiftKey) {
                  return null
                }
                return _vm.shiftEnterKey($event)
              }
            ],
            mouseup: _vm.saveSelection,
            keyup: _vm.saveSelection,
            focus: _vm.restoreSelection
          }
        }),
        _vm._v(" "),
        _vm.enableSendBtn
          ? _c(
              "div",
              { attrs: { id: "send-btn" }, on: { click: _vm.emitEnterKeyEvent } },
              [_c("send-icon-img")],
              1
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = function (inject) {
      if (!inject) return
      inject("data-v-6fd01612_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Global */\n#send-btn {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.twemoji-textarea-outer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  border-radius: 25px;\n}\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\n}\r\n\r\n/* Textarea */\n.twemojiTextarea {\r\n  -webkit-box-flex: 95;\r\n      -ms-flex-positive: 95;\r\n          flex-grow: 95;\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n  background-color: #fafafa;\r\n  font-size: 14px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  white-space: pre-wrap;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius: 25px;\r\n  text-align: left;\n}\n#send-btn {\r\n  cursor: pointer;\r\n  -webkit-box-flex: 5;\r\n      -ms-flex-positive: 5;\r\n          flex-grow: 5;\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n  height: 40px;\r\n  border-radius: 25px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-right: 5px;\r\n  padding: 5px;\n}\n#send-btn > img {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\n}\r\n\r\n/* Component Colors */\n.bg-cream {\r\n  background-color: #ece7e7;\n}\n.btn-cream {\r\n  background-color: #ece7e7;\n}\n.btn-cream:hover {\r\n  background-color: #ded3d3;\n}\n.bg-cherry {\r\n  background-color: #dd7e91;\n}\n.btn-cherry {\r\n  background-color: #dd7e91;\n}\n.btn-cherry:hover {\r\n  background-color: #d45e76;\n}\n.bg-forest {\r\n  background-color: #84caaf;\n}\n.btn-forest {\r\n  background-color: #84caaf;\n}\n.btn-forest:hover {\r\n  background-color: #5eba97;\n}\n.bg-ocean {\r\n  background-color: #93b8e9;\n}\n.btn-ocean {\r\n  background-color: #93b8e9;\n}\n.btn-ocean:hover {\r\n  background-color: #6b9ee1;\n}\n.bg-sun {\r\n  background-color: #d6dfb0;\n}\n.btn-sun {\r\n  background-color: #d6dfb0;\n}\n.btn-sun:hover {\r\n  background-color: #c7d392;\n}\n.btn-transparent {\r\n  background-color: transparent;\n}\n.btn-transparent:hover {\r\n  background-color: transparent;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\kevin\\Desktop\\Projects\\vue-twemoji-picker\\src\\components\\TwemojiTextarea.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8CA,WAAA;AACA;EACA,6CAAA;AACA;AAEA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;EACA,mBAAA;AACA;AAEA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AACA;;AAEA,aAAA;AACA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,0BAAA;MAAA,aAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,0BAAA;MAAA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AACA;;AAEA,qBAAA;AACA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,6BAAA;AACA;AAEA;EACA,6BAAA;AACA","file":"TwemojiTextarea.vue","sourcesContent":["<template>\r\n  <div class=\"twemoji-textarea-outer\" :class=\"'bg-' + componentColor\">\r\n    <twemoji-picker\r\n      :pickerWidth=\"pickerWidth\"\r\n      :pickerMaxHeight=\"pickerMaxHeight\"\r\n      :appendToBody=\"appendToBody\"\r\n      :triggerType=\"triggerType\"\r\n      :emojiData=\"emojiData\"\r\n      :emojiGroups=\"emojiGroups\"\r\n      :skinsSelection=\"skinsSelection\"\r\n      :recentEmojisFeat=\"recentEmojisFeat\"\r\n      :recentEmojisStorage=\"recentEmojisStorage\"\r\n      :recentEmojiStorageName=\"recentEmojiStorageName\"\r\n      :recentEmojiLimit=\"recentEmojiLimit\"\r\n      :searchEmojisFeat=\"searchEmojisFeat\"\r\n      :searchEmojiPlaceholder=\"searchEmojiPlaceholder\"\r\n      :searchEmojiNotFound=\"searchEmojiNotFound\"\r\n      :twemojiPath=\"twemojiPath\"\r\n      :twemojiExtension=\"twemojiExtension\"\r\n      :twemojiFolder=\"twemojiFolder\"\r\n      :disabled=\"disableEmojiPicker\"\r\n      @addTextBlur=\"addTextBlur\"\r\n      @emojiUnicodeAdded=\"emojiUnicodeAdded\"\r\n      @emojiImgAdded=\"emojiImgAdded\"\r\n    ></twemoji-picker>\r\n\r\n    <div\r\n      ref=\"twemojiTextarea\"\r\n      id=\"twemoji-textarea\"\r\n      class=\"twemojiTextarea\"\r\n      :contenteditable=\"disabled ? false : true\"\r\n      @input=\"updateContent\"\r\n      @paste=\"onPaste\"\r\n      @keydown.exact.enter=\"enterKey\"\r\n      @keydown.shift.enter=\"shiftEnterKey\"\r\n      @mouseup=\"saveSelection\"\r\n      @keyup=\"saveSelection\"\r\n      @focus=\"restoreSelection\"\r\n    ></div>\r\n\r\n    <div id=\"send-btn\" @click=\"emitEnterKeyEvent\" v-if=\"enableSendBtn\">\r\n      <send-icon-img />\r\n    </div>\r\n  </div>\r\n</template>\r\n<style lang=\"css\">\r\n/* Global */\r\n#send-btn {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.twemoji-textarea-outer {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  border-radius: 25px;\r\n}\r\n\r\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\r\n}\r\n\r\n/* Textarea */\r\n.twemojiTextarea {\r\n  flex-grow: 95;\r\n  flex-basis: 0;\r\n  background-color: #fafafa;\r\n  font-size: 14px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  white-space: pre-wrap;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius: 25px;\r\n  text-align: left;\r\n}\r\n\r\n#send-btn {\r\n  cursor: pointer;\r\n  flex-grow: 5;\r\n  flex-basis: 0;\r\n  height: 40px;\r\n  border-radius: 25px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-right: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n#send-btn > img {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Component Colors */\r\n.bg-cream {\r\n  background-color: #ece7e7;\r\n}\r\n\r\n.btn-cream {\r\n  background-color: #ece7e7;\r\n}\r\n\r\n.btn-cream:hover {\r\n  background-color: #ded3d3;\r\n}\r\n\r\n.bg-cherry {\r\n  background-color: #dd7e91;\r\n}\r\n\r\n.btn-cherry {\r\n  background-color: #dd7e91;\r\n}\r\n\r\n.btn-cherry:hover {\r\n  background-color: #d45e76;\r\n}\r\n\r\n.bg-forest {\r\n  background-color: #84caaf;\r\n}\r\n\r\n.btn-forest {\r\n  background-color: #84caaf;\r\n}\r\n\r\n.btn-forest:hover {\r\n  background-color: #5eba97;\r\n}\r\n\r\n.bg-ocean {\r\n  background-color: #93b8e9;\r\n}\r\n\r\n.btn-ocean {\r\n  background-color: #93b8e9;\r\n}\r\n\r\n.btn-ocean:hover {\r\n  background-color: #6b9ee1;\r\n}\r\n\r\n.bg-sun {\r\n  background-color: #d6dfb0;\r\n}\r\n\r\n.btn-sun {\r\n  background-color: #d6dfb0;\r\n}\r\n\r\n.btn-sun:hover {\r\n  background-color: #c7d392;\r\n}\r\n\r\n.btn-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-transparent:hover {\r\n  background-color: transparent;\r\n}\r\n</style>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue';\r\nimport TextareaParser from '../services/TextareaParser';\r\nimport EmojiService from '../services/EmojiService';\r\nimport TwemojiPicker from './TwemojiPicker.vue';\r\nimport SendIconImg from './SendIconImg.vue';\r\nimport EmojiPack from '../interfaces/EmojiPack';\r\nimport EmojiGroup from '../interfaces/EmojiGroup';\r\nimport TwemojiOptions from '../interfaces/TwemojiOptions';\r\n\r\nexport default Vue.extend({\r\n  name: 'TwemojiTextarea',\r\n\r\n  components: {\r\n    'twemoji-picker': TwemojiPicker,\r\n    'send-icon-img': SendIconImg\r\n  },\r\n\r\n  props: {\r\n    // ** Picker Props **/\r\n    pickerWidth: {\r\n      default: 250,\r\n      type: Number as () => number\r\n    },\r\n    pickerMaxHeight: {\r\n      default: 200,\r\n      type: Number as () => number\r\n    },\r\n    appendToBody: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    triggerType: {\r\n      default: 'click',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'click' && value !== 'hover') {\r\n          console.error(\r\n            'The value entered for the prop \"triggerType\" is invalid. ' +\r\n              'Valid values: \"click\" and \"hover\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    emojiData: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiPack>\r\n    },\r\n    emojiGroups: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiGroup>\r\n    },\r\n    skinsSelection: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisStorage: {\r\n      default: 'none',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'local' && value !== 'session' && value !== 'none') {\r\n          console.error(\r\n            'The value entered for the prop \"recentEmojisStorage\" is invalid. ' +\r\n              'Valid values: \"local\", \"session\" and \"none\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    recentEmojiStorageName: {\r\n      default: 'vue-recent-twemojis',\r\n      type: String as () => string\r\n    },\r\n    recentEmojiLimit: {\r\n      default: 12,\r\n      type: Number as () => number\r\n    },\r\n    searchEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    searchEmojiPlaceholder: {\r\n      default: 'Search emojis.',\r\n      type: String as () => string\r\n    },\r\n    searchEmojiNotFound: {\r\n      default: 'No emojis found.',\r\n      type: String as () => string\r\n    },\r\n    twemojiPath: {\r\n      default: 'https://twemoji.maxcdn.com/2/',\r\n      type: String as () => string\r\n    },\r\n    twemojiExtension: {\r\n      default: '.png',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"twemojiPath\" is invalid. ' +\r\n              'Valid values: \".png\", \".svg\", \".jpg\", \".jpeg\", \".ico\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    twemojiFolder: {\r\n      default: '72x72',\r\n      type: String as () => string\r\n    },\r\n\r\n    // ** Textarea Props **/\r\n    content: {\r\n      default: '',\r\n      type: String as () => string\r\n    },\r\n    enableSendBtn: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    disableEmojiPicker: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    disabled: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    componentColor: {\r\n      type: String as () => string,\r\n      default: 'cream',\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent'].indexOf(\r\n            value\r\n          ) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"componentColor\" is invalid. ' +\r\n              'Valid values: \"cream\", \"cherry\", \"forest\", \"ocean\", \"sun\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    }\r\n  },\r\n\r\n  data() {\r\n    return {\r\n      savedRange: null as any,\r\n      twemojiOptions: {} as TwemojiOptions\r\n    };\r\n  },\r\n\r\n  computed: {\r\n    twemojiTextarea(): HTMLElement {\r\n      return this.$refs.twemojiTextarea as HTMLElement;\r\n    }\r\n  },\r\n\r\n  created(): void {\r\n    this.twemojiOptions = {\r\n      base: this.twemojiPath,\r\n      ext: this.twemojiExtension,\r\n      size: this.twemojiFolder\r\n    };\r\n  },\r\n\r\n  mounted(): void {\r\n    this.addText(this.content);\r\n  },\r\n\r\n  methods: {\r\n    updateContent(event: Event): void {\r\n      const targetedElement = event.target as HTMLElement;\r\n      let content = targetedElement.innerHTML;\r\n      content = TextareaParser.replaceEmojiWithAltAttribute(content);\r\n      content = TextareaParser.unescapeHtml(content);\r\n      if (content.length !== 0 && content[content.length - 1] === '\\n') {\r\n        content = content.slice(0, -1);\r\n      }\r\n      this.$emit('update:content', content);\r\n      this.$emit('contentChanged');\r\n    },\r\n    emitEnterKeyEvent(event: Event): void {\r\n      this.$emit('enterKey', event);\r\n    },\r\n    enterKey(event: MouseEvent): void {\r\n      if (event.shiftKey === false) this.emitEnterKeyEvent(event);\r\n    },\r\n    shiftEnterKey(event: MouseEvent): void {\r\n      event.stopPropagation();\r\n      event.preventDefault();\r\n\r\n      if (\r\n        this.twemojiTextarea.innerHTML === '' ||\r\n        this.twemojiTextarea.innerHTML[\r\n          this.twemojiTextarea.innerHTML.length - 1\r\n        ] !== '\\n'\r\n      ) {\r\n        this.addText('\\n');\r\n        this.addText('\\n');\r\n      } else {\r\n        this.addText('\\n');\r\n      }\r\n\r\n      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;\r\n    },\r\n    onPaste(pasteEvent: ClipboardEvent): void {\r\n      let pastedData;\r\n\r\n      pasteEvent.stopPropagation();\r\n      pasteEvent.preventDefault();\r\n      const clipboardData = pasteEvent.clipboardData;\r\n      pastedData = clipboardData?.getData('Text') || '';\r\n      pastedData = TextareaParser.escapeHTML(pastedData);\r\n      pastedData = EmojiService.getEmojiImgFromUnicode(\r\n        pastedData,\r\n        this.twemojiOptions\r\n      );\r\n\r\n      window.document.execCommand('insertHTML', false, pastedData);\r\n\r\n      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;\r\n    },\r\n    focus(): void {\r\n      const doc = this.twemojiTextarea;\r\n      const childNode = doc.childNodes[0];\r\n      doc.focus();\r\n\r\n      if (childNode === undefined) {\r\n        const textNode = document.createTextNode('');\r\n        doc.appendChild(textNode);\r\n        const range = document.createRange();\r\n        const sel = window.getSelection();\r\n        range.setStart(doc.childNodes[0], 0);\r\n        range.collapse(true);\r\n        sel?.removeAllRanges();\r\n        sel?.addRange(range);\r\n        this.saveSelection();\r\n      }\r\n    },\r\n    blur(): void {\r\n      const doc = this.twemojiTextarea;\r\n      doc.blur();\r\n    },\r\n    saveSelection(): void {\r\n      if (window.getSelection) {\r\n        this.savedRange = window.getSelection()?.getRangeAt(0);\r\n      }\r\n    },\r\n    restoreSelection(): void {\r\n      const doc = this.twemojiTextarea;\r\n      doc.focus();\r\n      if (this.savedRange != null) {\r\n        if (window.getSelection) {\r\n          const s = window.getSelection();\r\n          if (s?.rangeCount || 0 > 0) {\r\n            s?.removeAllRanges();\r\n          }\r\n          s?.addRange(this.savedRange);\r\n        }\r\n      }\r\n    },\r\n\r\n    addTextBlur(text: string): void {\r\n      this.focus();\r\n\r\n      text = TextareaParser.escapeHTML(text);\r\n      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);\r\n\r\n      window.document.execCommand('insertHTML', false, text);\r\n      this.saveSelection();\r\n      this.blur();\r\n    },\r\n    addText(text: string): void {\r\n      this.focus();\r\n\r\n      text = TextareaParser.escapeHTML(text);\r\n      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);\r\n\r\n      window.document.execCommand('insertHTML', false, text);\r\n      this.saveSelection();\r\n    },\r\n    cleanText(): void {\r\n      this.twemojiTextarea.innerHTML = '';\r\n      this.$emit('update:content', '');\r\n    },\r\n    emojiUnicodeAdded(unicode: string): void {\r\n      this.$emit('emojiUnicodeAdded', unicode);\r\n    },\r\n    emojiImgAdded(img: string): void {\r\n      this.$emit('emojiImgAdded', img);\r\n    }\r\n  }\r\n});\r\n</script>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = normalizeComponent$1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      createInjector,
      undefined,
      undefined
    );

  const TwemojiPicker = __vue_component__$6;
  const TwemojiTextarea = __vue_component__$8;
  const EmojiService = EmojiServiceImport;
  const TextareaParser = TextareaParserImport;

  exports.EmojiService = EmojiService;
  exports.TextareaParser = TextareaParser;
  exports.TwemojiPicker = TwemojiPicker;
  exports.TwemojiTextarea = TwemojiTextarea;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
