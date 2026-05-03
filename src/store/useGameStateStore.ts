import { defineStore } from 'pinia'

export const useGameStateStore = defineStore('gameState', {
    // DATA (like Vue data)
    state: () => ({
        coord: 0
    }),

    // COMPUTED (like Vue computed)
    getters: {
    },

    // METHODS (like Vue methods)
    actions: {
        moveForward() {
            this.coord++
        },
        moveBackward() {
            this.coord--
        }
    }
})