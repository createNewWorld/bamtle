<template>
  <div id="app">
    <div style="width: 400px;">
      <h3 style="text-align:center;">BamtleUI</h3>
      <Embr />
      <h4>按钮</h4>
      <table style="width: 100%;" border="1" cellspacing="0">
        <thead>
          <tr>
            <td>类别</td>
            <td>正常</td>
            <td>半圆</td>
            <td>圆角</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="btn in buttons" :key="btn.id">
            <td>{{btn.type}}</td>
            <td><Button :type="btn.type" :design="'block'" long>Button</Button></td>
            <td><Button style="width: 80%;" :type="btn.type" :design="'oval'">Button</Button></td>
            <td><Button style="width: 80%;" :type="btn.type" :design="'fillet'">Button</Button></td>
          </tr>
        </tbody>
      </table>
      <Embr />
      <h4>聊天气泡</h4>
      <span>左边</span>

    </div>
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
          type: "normal",
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
html {
  font-size: 16px;
}

h3,
h4,
h5 {
  margin: 4px 0px;
  font-weight: bold;
  background-color: #f1f1f1;
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
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

table {
  border-collapse: collapse;
}

table thead,
tbody > tr {
  width: 100%;
  text-align: center;
}
</style>