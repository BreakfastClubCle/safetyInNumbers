<template>
<div class="card">
    <span id="exitForm" onClick="exitForm">X</span>
    <form>
        <label for="#pinLocation">Location</label>
        <input id="pinLoction" v-model="marker">

        <div> {{ new Date()}} </div>
        <button type="submit" onClick="processReport">Confirm</button> <button type="reset">Reset</button>
    </form>
</div>
</template>

<script>
export default {
    //create processReport method here
    //submit data to db and show a success message
    //create method called exitForm so someone could abandon the process and hide this window
    //create reset so user could reset their pin to their location grabbed by the browser (if they dragged it around by moving the map and dont want to submit that)
}
</script>



<style scoped>
#exitForm {
    float: right
}

form {
    clear: both;
}
label {
    display: block
}
input {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #333;
}

button {
    color: #eee;
    background-color: navy;
    padding: 10px;
    font-size: 16pt;
}
</style>