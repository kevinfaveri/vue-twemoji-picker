<template>
  <div>
    <img
      width="220"
      style="border:0px;height:60px;"
      src="https://i.imgur.com/Faaig5x.png"
      alt="Bitcoin Address"
      class="clickable"
      @click.stop.prevent="copyCode"
    />
    <input type="hidden" id="bitcoin-address" value="bc1q3ln0v73ketq3fzeh2saa2tsew4xmrwepdj42jw" />
  </div>
</template>

<style>
.clickable {
  cursor: pointer;
}
</style>

<script>
import Twemoji from 'twemoji';

export default {
  name: 'BitcoinButton',
  methods: {
    copyCode() {
      let codeToCopy = document.querySelector('#bitcoin-address');
      codeToCopy.setAttribute('type', 'text');
      codeToCopy.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert(`Bitcoin Address ${msg} copied`);
      } catch (err) {
        alert('Oops, unable to copy the Bitcoin Adress.');
      }

      codeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    }
  }
};
</script>