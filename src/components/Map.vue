<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer
        :url="url"
        :attribution="attribution"/>
      <l-marker v-for="(i, coords) in reports" :key="i" :lat-lng="convert(coords)">
      </l-marker>
    </l-map>
    <div class="button-area">
      <button @click="$emit('changeComp', 'report-form')">Report a Fire</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Map',
  props: {
    coords: {
      type: Object,
      default: () => ({ lat: 0, lng: 0 })
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      center: L.latLng(this.coords.lat, this.coords.lng),
      zoom: 13,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(this.coords.lat, this.coords.lng)
    }
  },
  computed: {
    ...mapState(['reports'])
  },
  methods: {
    ...mapActions(['fetchReports']),
    convert (coords) {
      return L.latlng(coords.lat, coords.lng)
    },
    zoomUpdate (zoom) {
      this.zoom = zoom
    },
    centerUpdate (center) {
      this.center = center
    },
    popupClick () {
      console.log('Popup Click!')
    }
  },

  mounted () {
    this.fetchReports()
  }
}
</script>

<style scoped>



.button-area {
    text-align: center;
}

button {
    color: #000;
    background-color: #FF8C00;
    padding: 10px;
    font-size: 16pt;
    margin: 15px;
}
button:hover {
    background-color: #d37400;
}
</style>
