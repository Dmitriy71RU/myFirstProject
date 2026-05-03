<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AreaDescription from "@/components/AreaDescription.vue";
import {ref} from "vue";
import { useGameStateStore } from "@/store/useGameStateStore.js";
import FirstPage from "@/components/FirstPage.vue";
import ActionPanel from "@/components/ActionPanel.vue";

const gameStore = useGameStateStore();

const areaDesc = ref('you see a forest')

const text = ref("this is a message")

const coord = ref(0);
const handleClick = () => {
  console.log('click')
  text.value = 'Hello World!'
}
// function moveForward () {
//   coord.value ++;
//   gameStore.moveForward();
// }

// new comment
</script>

<template>
  <header>
    <div class="wrapper">
      <FirstPage />
    </div>
  </header>
  <body>
    <div>
      You stand at: {{ gameStore.coord }}
    </div>
    <div>
      <AreaDescription />
    </div>
    <div>
      <ActionPanel />
    </div>
  </body>

</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
