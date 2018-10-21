<template>
<div class="card">
    <form @submit.prevent="submitData">
        <h3>Submit Your Report</h3>
        <p>Latitude:  {{coords.lat}}</p>
        <p>Longitude: {{coords.lng}} </p>

        <div> {{ userTime }} </div>
        <button type="submit">Submit</button> 
        <button type="button" @click="$emit('changeComp', 'leaf-map')">Cancel</button>
        
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ReportForm',
  props: {
    coords: {
      type: Object,
      default: () => ({ lat: 0, lng: 0 })
    },
    currComp: 'report-form'
  },
  data () {
    return {
      userLat: 0,
      userLng: 0,
      userTime: new Date(),
      runCancel: 'report-form'
    }
  },
  methods: {
    ...mapActions(['saveReport']),
    zoomUpdate (zoom) {
      this.zoom = zoom
    },
    centerUpdate (center) {
      this.center = center
    },
    submitData () {
      this.userLat = this.coords.lat
      this.userLng = this.coords.lng

      this.saveReport({ lat: this.userLat, lng: this.userLng })
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
    background-color: #FF8C00;
    padding: 10px;
    font-size: 16pt;
    margin: 15px;
}
button:hover {
    background-color: #d37400;
}
</style>