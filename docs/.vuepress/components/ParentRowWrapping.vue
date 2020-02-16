<template>
<div class="parent"><slot name="default"></slot></div>
</template>

<style>
.parent {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
export default {
  name: 'ParentRowWrapping',
}
</script>