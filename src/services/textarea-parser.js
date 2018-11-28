

import EmojiService from '../services/emoji-service';

export default {
  replaceEmojiWithAltAttribute(msg) {
    return msg.replace(/<img class="emoji".*?alt="(.*?)"[^>]+>/g, '$1');
  },
  unescapeHtml(msg) {
    return msg
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, '\'');
  },
  escapeHTML(msg) {
    let divEscapedHtml = document.createElement('div');
    let escapedHtmlTextNode = divEscapedHtml.appendChild(document.createTextNode(msg));

    const escapedHtmlContent = escapedHtmlTextNode.parentNode.innerHTML;

    escapedHtmlTextNode = null
    divEscapedHtml = null;

    // eslint-disable-next-line
    return escapedHtmlContent;
  },
};
