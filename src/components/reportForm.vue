<template>
<div class="card">
    <form>
        <h3>Submit Your Report</h3>
        <p>Latitude:  {{coords.lat}}</p>
        <p>Longitude: {{coords.lng}} </p>

        <div> {{ userTime }} </div>
        <button type="button" @click="submitData">Submit</button> 
        <button type="button" @click="$emit('changeComp', 'leaf-map')">Cancel</button>
        
    </form>
</div>
</template>

<script>
export default {
  name: 'ReportForm',
  props: {
    coords: {
      type: Object,
      default: () => ({ lat: 0, lng: 0 })
    },
    currComp : 'report-form'
  },
    data () {
    return {
      userLat: 0,
      userLng: 0,
      userTime: new Date(),
      runCancel : 'report-form'
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.zoom = zoom
    },
    centerUpdate (center) {
      this.center = center
    },
    submitData() {
        console.log("hello the submitData method was called"),
        this.userLat = this.coords.lat
        this.userLng = this.coords.lng
        console.log(this.userLat + " Lat")
        console.log(this.userLng + " Lng")
    },
    cancelButton() {
        console.log("cancel was pressed. now it redirects")
    }
  }
}
</script>



<style scoped>

.card {
    background-color: #fff;
    padding: 16px;
}

button {
    color: #eee;
    background-color: navy;
    padding: 10px;
    font-size: 16pt;
    margin: 15px;
}
button:hover {
    background-color: gray;
}
</style>