<template>
  <div>
    <div class="bg"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style scoped>
.bg {
  background-color: orange;
}
</style>