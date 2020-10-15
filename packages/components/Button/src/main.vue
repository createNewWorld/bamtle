<template>
  <div>
    <button ref="btn"></button>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      domClass: 'bt-normal-btn'
    }
  },
  mounted() {
    if(!!this.$refs.btn) {
      console.log('000---this.$refs.btn', this.$refs.btn);
    }
  }
};
</script>

<style scoped>
.bt-normal-btn {
  background-color: #8fb3f7;
  color: white;
  cursor: pointer;
}
.bt-primary-btn {
  background-color: #8fb3f7;
  color: white;
  cursor: pointer;
  font-size: 16rem;
}

.bt-error-btn {
  background-color: #e34d4d;
  color: white;
  cursor: pointer;
  font-size: 16rem;
}
</style>