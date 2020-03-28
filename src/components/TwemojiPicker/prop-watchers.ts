export default (componentRef: any, twemojiPickerRef: any) => {
  componentRef.$watch('randomEmojiArray',
    () =>  twemojiPickerRef.setRandomEmoji()
  );

  componentRef.$watch('emojiPickerDisabled',
    (value: boolean) => {
      if (value === true) {
        twemojiPickerRef.$refs.popupEmoji.popperOpen = false;
      }
    }
  );
}