<template>
  <button :class="{
      'normal-btn': type == 'normal',
      'primary-btn': type == 'primary',
      'error-btn': type == 'error',
    }"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      type: "primary",
    };
  },
  mounted() {
    if (!!this.$refs.btn) {
      this.type = this.$refs.btn.$attrs.type;
    }
  },
};
</script>

<style scoped>
.normal-btn {
  background-color: #8fb3f7;
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
  border: none;
}
.primary-btn {
  background-color: #8fb3f7;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
}

.error-btn {
  background-color: #e34d4d;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
}
</style>