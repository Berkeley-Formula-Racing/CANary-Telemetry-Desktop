<script setup>
  import { def } from "@vue/shared";
  import IntroScreen from "./components/IntroScreen.vue";
  import AppScreen from "./components/AppScreen.vue"

  import "bootstrap"
  import "bootstrap/dist/css/bootstrap.css"
  import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<script>
export default {
    data() {
      return {
        showIntro: true,
        showApp: false,
      }
    },
    methods: {
      startApp(showIntro) {
        this.showIntro = showIntro
        console.log("Button Clicked")
        this.showApp = true
      }
    }
  }
</script>

<template>
  <main>
    <div v-if="showIntro">
      <IntroScreen @enterApp="startApp($event)" />
    </div>
    <div v-if="showApp">
      <AppScreen />
    </div>
  </main>
</template>

<style>
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
