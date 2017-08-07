<template>
  <div id="app" @click="cycleColors">

    <patternCard v-for="pattern in patterns" v-bind:pattern="pattern"/>
      
  </div>
</template>

<script>

import tinycolor from 'tinycolor2'
import PatternCard from './PatternCard.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    patternCard: PatternCard
  },
  computed: {
    currentColor: function() { return this.colors[this.order] } 
  },
  methods: {
    cycleColors() {
      this.order += 1
      if (this.order >= this.colors.length) {
        this.order = 0
      }
      this.getColors()
      console.log(this.order)
    },
    getColors() {
      const self = this
      const apiUrl = 'https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/patterns/top'

      axios.get(apiUrl, {
        params: {
          format: 'json',
          hueOption: this.currentColor,
          numResults: 5
        }
      }).then(function(response){
        self.patterns = response.data
      });
    }
  },
  mounted: function() {
    this.getColors()
  },
  data () {
    return {
      order: 0,
      patterns: [],
      colors: ["red", "orange", "yellow", "green", "aqua", "blue", "violet", "fuschia"]
    }
  }
}


</script>

<style>
  #app {
    font-family: 'Lato', sans-serif;
  }
</style>
