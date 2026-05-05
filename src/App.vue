<script setup lang="ts">

import FirstPage from "@/components/FirstPage.vue";

</script>

<template>
  <router-view/>
  <header>
    <div class="wrapper">
      <FirstPage />
    </div>
  </header>
  <body>

  </body>

</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
