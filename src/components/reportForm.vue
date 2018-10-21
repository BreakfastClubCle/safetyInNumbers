<template>
    <form>
        <label for="#pinLocation">Location</label>
        <input id="pinLoction" v-model="marker">

        <span> {{ new Date()}} </span>
        <button type="submit">Confirm</button> <button type="reset">Reset</button>
    </form>
</template>


<style scoped>
input {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #333;
}
</style>