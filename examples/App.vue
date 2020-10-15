<template>
  <div id="app">
    <div style="width: 200px;">
      <div class="btn-container" v-for="btn in buttons" :key="btn.id">
        <span>{{btn.type}} 按钮</span>
        <Button :type="btn.type" :design="'fillet'">Button</Button>
      </div>
    </div>
    <Box>Box组件</Box>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      buttons: [
        {
          id: 1,
          type: "nomarl",
        },
        {
          id: 2,
          type: "primary",
        },
        {
          id: 3,
          type: "success",
        },
        {
          id: 4,
          type: "warn",
        },
        {
          id: 5,
          type: "error",
        },
      ],
    };
  },
  mounted() {
    console.log("btn =", this.$refs.btn);
  },
};
</script>

<style scoped>
html {
  font-size: 16px;
}

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

.btn-container {
  width: 200px;
  height: 44px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>