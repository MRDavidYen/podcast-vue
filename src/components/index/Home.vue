<template>
  <div>
    123
    <router-link to="/podcast/456">123</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeBody",
});
</script>

<style>
</style>