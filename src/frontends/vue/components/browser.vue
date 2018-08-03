<template>
  <div ref="container" />
</template>

<script>
import * as XulUtil from "../../../util/xul-util";

export default {
  mounted() {
    this.$refs.container.appendChild(
      XulUtil.parseXULToFragment(`
        <browser
          type="content"
        />
      `)
    );

    const browser = this.$refs.container.querySelector("browser");
    browser.setAttribute(
      "style",
      `
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
      `
    );

    browser.loadURI("google.com");
  }
};
</script>
