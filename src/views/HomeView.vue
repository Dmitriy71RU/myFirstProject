<script setup lang="ts">
  import { useGameStateStore } from "@/store/useGameStateStore.js";
  import AreaDescription from "@/components/AreaDescription.vue";
  import ActionPanel from "@/components/ActionPanel.vue";
  const gameStore = useGameStateStore();
</script>

<template>
      <div>
        You stand at: {{ gameStore.coord }}
      </div>
      <div>
        <AreaDescription />
      </div>
      <div>
        <ActionPanel />
      </div>
</template>

<style scoped>

</style>