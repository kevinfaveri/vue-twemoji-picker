export default {
  replaceEmojiWithAltAttribute(text: string): string {
    return text.replace(/<img class="emoji".*?alt="(.*?)"[^>]+>/g, '$1');
  },
  unescapeHtml(text: string): string {
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  },
  escapeHTML(text: string): string {
    const divEscapedHtml: HTMLElement = document.createElement('div');
    const escapedHtmlTextNode: Text = divEscapedHtml.appendChild(
      document.createTextNode(text)
    );

    const escapedHtml: HTMLElement = escapedHtmlTextNode.parentNode as HTMLElement;
    const escapedHtmlContent: string = escapedHtml.innerHTML;

    escapedHtml.removeChild(escapedHtmlTextNode);
    divEscapedHtml.parentNode?.removeChild(divEscapedHtml);

    // eslint-disable-next-line
    return escapedHtmlContent;
  }
};
