<script setup lang="ts">
import {useGameStateStore} from "@/store/useGameStateStore.ts";
const gameStore = useGameStateStore();
</script>

<template>
  <div>
    <button class="btn" @click="gameStore.moveForward()">Go forth</button>
    <button class="btn" @click="gameStore.moveBackward()">Go back</button>
  </div>
</template>

<style scoped>

</style>