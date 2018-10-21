<template>
  <div class="home">
    <div v-if="!loading">
      <div v-if="!erroring">
        <component :coords="coords" :is="currComp" @changeComp="changeComp">
        </component>
      </div>
      <div v-else>
        <h2>You need to enable location to use this app!</h2>
      </div>
    </div>
    <h1 v-else>Just piecing things together please hold...</h1>

    <div>
    
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import leafMap from '@/components/Map'
  import enableLocation from '@/components/EnableLocation'
  import reportForm from '@/components/ReportForm'

  export default {
    name: 'home',
    components: {
      leafMap,
      enableLocation,
      reportForm
    },
    data () {
      return {
        coords: {},
        currComp: 'Loading',
        loading: true,
        erroring: false
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
      updatePos ({
        coords
      }) {
        this.coords = {
          lat: coords.latitude,
          lng: coords.longitude
        }
        this.currComp = 'leaf-map'
        this.loading = false
      },
      noLocation () {
        this.currComp = 'enable-location'
        this.loading = false
        this.erroring = true
        // Set the view to enable location
      },
      startReport () {
        this.currComp = 'report-form'
        this.message = 'lets crowdshare some flames'
        console.log('report a fire button clicked')
      },
      changeComp (comp) {
        this.currComp = comp
      }
    },

    mounted () {
      window.navigator.geolocation.getCurrentPosition(this.updatePos, this.noLocation)
    }
  }
</script>