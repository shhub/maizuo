<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {

    //this.getLocation()
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      }
      else { x.innerHTML = "Geolocation is not supported by this browser."; }
    },
    showPosition (position) {
      var lng = position.coords.longitude;
      var lat = position.coords.latitude;
      var site = lat.toFixed(6) + ',' + lng.toFixed(6);
      //this.map_click(lat.toFixed(6), lng.toFixed(6));
      console.log(site)
    },
    showError (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.")
          break;
      }
    },
    map_click (lng, lat) {
      var map = new BMap.Map("allmap")
      var point = new BMap.Point(lng, lat);
      map.centerAndZoom(point, 12);
      var geoc = new BMap.Geocoder();
      geoc.getLocation(point, function (rs) {
        var addComp = rs.addressComponents;
        alert(addComp.province + "," + addComp.city + "," + addComp.district + "," + addComp.street + "," + addComp.streetNumber);
      });
    }

  }

}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
html,
body {
  height: 100%;
  background-color: #fff;
}

body {
  font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  font-size: .875rem /* 14/16 */;
  color: #000;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  display: block;
  text-decoration: none;
}
</style>
