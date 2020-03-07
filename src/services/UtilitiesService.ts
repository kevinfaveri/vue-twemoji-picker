export default {
  isValidTextareaInsert(contentLength: number, maxlength: number): boolean {
    if (contentLength === maxlength) {
      return false;
    }
    return true;
  }
};
