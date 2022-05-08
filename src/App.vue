<template>
  <HeaderVue/>
  <router-view></router-view>
  <FooterVue/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';

@Options({
  components: {
    HeaderVue,
    FooterVue,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
