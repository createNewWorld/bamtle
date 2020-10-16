<template>
  <button ref="btn" :class="styles" :disabled="disabled" @click="clickHandler">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      type: "normal",
      disabled: false,
      full: false,
    };
  },
  props: {
    design: {
      type: String,
      default: "block",
    },
    icon: String,
  },
  computed: {
    styles: {
      get() {
        return [
          "ez-button",
          this.design,
          this.icon,
          this.type,
          this.full ? "fill" : "",
        ];
      },
    },
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
  mounted() {
    this.type = this.$refs.btn.getAttribute("type");
    this.full = this.$refs.btn.getAttribute("long") == "";
    let ds = this.$refs.btn.getAttribute("disabled");
    this.disabled = ds == "disabled" || ds == true;
  },
};
</script>

<style lang="scss" scoped>
/* 引入矢量图标 */
/* @import '../../assets/icons/iconfont.css'; */
/**
 * 问题:
 * 1. 屏幕压缩, 文字溢出
 * 2. icon 填充
 */
$disableColor: #d0d7da;
@mixin disableBtn() {
  background-color: $disableColor;
  cursor: not-allowed;
}

button {
  width: auto;
  height: 2rem;
  outline: 0;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 400;
  user-select: none;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;

  /* 动画设置 */
  transition: border 0.2s;
  -webkit-transition: border 0.2s;
  transition: background-color 0.1s;
  -webkit-transition: background-color 0.1s;
}

button > span {
  margin: 0 0.25rem;
}

/* 充满宽度 */
.fill {
  width: 100%;
}

button > span {
  display: inline-block;
}

/*normal style*/
.normal {
  border: 1px solid #c8c8c9;
  background-color: #f1f1f1;
  color: #586073;
  font-size: 0.875rem;
}
.normal:hover {
  cursor: pointer;
  background-color: #fafafa;
}
.normal:active {
  color: #586073;
  border: 1px solid #c8c8c9;
  background-color: white;
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
  border-radius: 2rem;
}

/* 圆角 */
.fillet {
  border-radius: 0.322rem;
}
</style>