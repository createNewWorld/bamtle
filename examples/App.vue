<template>
  <div id="app">
    <Button ref="btn" type="error">Button</Button>
    <Box>ssss</Box>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log("btn =", this.$refs.btn);
  }
};
</script>

<style scoped>
html{ font-size:16px;}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
</style>