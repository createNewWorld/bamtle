<template>
  <hr ref="hr" :style="{ 'height': height, 'visibility': 'hidden' }"></hr>
</template>

<script>
/**
 * 增强 <br>
 */
export default {
  name: "Embr",
  computed: {
    height: {
      get() {
        return !!this.vmH ? (this.vmH - 2 > 0 ? (this.vmH - 2) : this.vmH) + 'px': '8px';
      }
    }
  },
  data() {
    return {
      vmH: '6'
    }
  },
  mounted() {
    this.vmH = this.$refs.hr.getAttribute("height");
  }
};
</script>

<style scoped>
</style>