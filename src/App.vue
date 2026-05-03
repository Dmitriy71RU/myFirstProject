<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AreaDescription from "@/components/AreaDescription.vue";
import {ref} from "vue";
import { useGameStateStore } from "@/store/useGameStateStore.js";

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
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <AreaDescription />

      {{ gameStore.coord }}

      <button class="btn" @click="gameStore.moveForward()">Go forth</button>
      <button class="btn" @click="gameStore.moveBackward()">Go back</button>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
