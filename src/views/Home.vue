<template>
  <div class="home">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer
        :url="url"
        :attribution="attribution"/>
      <l-marker :lat-lng="marker">
      </l-marker>
    </l-map>
    <div>
 <button v-on:click="startReport">Report a Fire</button>
 <p> {{message}} </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'



export default {
  name: 'home',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(0, 0),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(0, 0),
      message: "Hello",

    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.zoom = zoom
    },
    centerUpdate (center) {
      this.center = center
    },
    popupClick () {
      console.log('Popup Click!')
    },
    updatePos (pos) {
      const converted = L.latLng(pos.coords.latitude, pos.coords.longitude)

      this.center = converted
      this.marker = converted
      this.zoom = 13
    },
    startReport () {
      this.message = "lets crowdshare some flames"
      console.log("report a fire button clicked")
   
    }
  },

  mounted () {
    window.navigator.geolocation.getCurrentPosition(pos => {
      this.updatePos(pos)
    })
  }
}
</script>
