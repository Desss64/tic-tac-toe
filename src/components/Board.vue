<template>
    <h2>Tic-Tac-Toe</h2>
    <h3>Turn: </h3>
    <div class="board">
            <div v-for="x in 3" :key="x">
                <div v-for="y in 3" :key="y">
                    <Cell />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import Cell from './Cell.vue'
</script>

<style scoped>
.board {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}

</style>
