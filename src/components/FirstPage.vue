<script setup lang="ts">
import {useGameStateStore} from "@/store/useGameStateStore.ts";
const store = useGameStateStore();

</script>

<template>
  <div class="greetings">
    <h1 class="green">Hello! Welcome to the game.</h1>
    <h3>
      <div>This is your character:</div>
      <div>name: {{store.pc.name}}</div>
      <div>your max hp: {{store.pc.hpMax}}</div>
      <div>you have: {{store.pc.inventory}}</div>
    </h3>
  </div>
</template>

<style scoped>

</style>