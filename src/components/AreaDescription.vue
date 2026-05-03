<script setup lang="ts">
import {useGameStateStore} from "@/store/useGameStateStore.ts";
import {computed} from "vue";
import {move} from "@/utils";

const store = useGameStateStore();
const areaDescription = computed(() => {
  return move(store.coord);
})

</script>

<template>
{{areaDescription}}
</template>

<style scoped>

</style>