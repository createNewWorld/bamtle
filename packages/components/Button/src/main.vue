<template>
  <button ref="btn" :class="styles" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      type: "normal",
      disabled: false,
    };
  },
  props: {
    /* 按钮形状 */
    design: {
      type: String,
      default: "block",
    },
    icon: String,
    // type: {
    //   type: String,
    //   default: "normal",
    // },
  },
  computed: {
    styles: {
      get() {
        return ["ez-button", this.design, this.icon, this.type];
      },
    },
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
  mounted() {
    console.log("this.$refs.btn", this.$refs.btn);
    this.type = this.$refs.btn.getAttribute("type");
    let ds = this.$refs.btn.getAttribute("disabled");
    this.disabled = ds == "disabled" || ds == true;
    console.log("type", this.type);
    console.log("disabled", this.disabled);
  },
};
</script>

<style lang="scss" scoped>
/* 引入矢量图标 */
/* @import '../../assets/icons/iconfont.css'; */
$disableColor: #d0d7da;
@mixin disableBtn() {
  background-color: $disableColor;
  cursor: not-allowed;
}

button {
  width: auto;
  height: 100;
  outline: none;
  font-size: 0.875rem;

  /* 动画设置 */
  transition: border 0.8s;
  -webkit-transition: border 0.8s;
  transition: background-color 0.1s;
  -webkit-transition: background-color 0.1s;
}

/*normal style*/
.normal {
  border: 1px solid #878788;
  background-color: white;
  color: #5c5c5a;
  font-size: 0.875rem;
}
.normal:hover {
  cursor: pointer;
  background-color: #f4f4f5;
}
.normal:active {
  color: #000;
  border: 1px solid #878788;
  background-color: #f4f4f5;
}
.normal:disabled {
  @include disableBtn();
  opacity: 0.8;
}

/*primary style*/
.primary {
  color: white;
  border: none;
  background-color: #0366d6;
}
.primary:hover {
  cursor: pointer;
  background-color: #4690eb;
}
.primary:active {
  background-color: #c0d7fa;
  border: none;
}
.primary:disabled {
  @include disableBtn();
}

/* success */
.success {
  color: white;
  border: none;
  background-color: #19be6b;
}
.success:hover {
  cursor: pointer;
  background-color: #53df99;
}
.success:active {
  cursor: pointer;
  background-color: #71e6ab;
}
.success:disabled {
  @include disableBtn();
}

/* info */
.info {
  color: white;
  border: none;
  background-color: #2db7f5;
}
.info:hover {
  cursor: pointer;
  background-color: #61c8f8;
}
.info:active {
  cursor: pointer;
  background-color: #82ccee;
}
.info:disabled {
  @include disableBtn();
}

/* warn */
.warn {
  color: white;
  border: none;
  background-color: #ff9900;
}
.warn:hover {
  cursor: pointer;
  background-color: #f8a933;
}
.warn:active {
  cursor: pointer;
  background-color: #fcbd5e;
}
.warn:disabled {
  @include disableBtn();
}

/* error */
.error {
  color: white;
  background-color: #fa6060;
  border: none;
}
.error:hover {
  cursor: pointer;
  background-color: #ee7f7f;
}
.error:active {
  background-color: #f3b5b5;
  color: #f53c3c;
}
.error:disabled {
  background-color: $disableColor;
  cursor: not-allowed;
}

/* 方块 */
.block {
  border-radius: 0rem;
}

/* 半圆 */
.oval {
  border-radius: 50%;
}

/* 圆角 */
.fillet {
  border-radius: 0.322rem;
}
</style>