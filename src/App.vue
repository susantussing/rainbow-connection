<template>
  <div id="app" @click="cycleColors">
    <!-- <div id="test" v-bind:class="currentColor"></div> -->
     <patternCard v-for="pattern in patterns" v-bind:pattern="pattern" /> 
      
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
          numResults: 1
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
      colors: ["red", "orange", "yellow", "green", "aqua", "blue", "violet"]
    }
  }
}


</script>

<style>
  #app {
    font-family: 'Lato', sans-serif;
  }

  #test {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
  }

  #test.red {
    background: conic-gradient(red 15%, rgba(0, 0, 0, 0) 0);
  }

  #test.orange {
    background: conic-gradient(rgba(0, 0, 0, 0) 15%, orange 15% 30%, rgba(0, 0, 0, 0) 0);
  }

    #test.yellow {
    background: conic-gradient(rgba(0, 0, 0, 0) 30%, yellow 30% 45%, rgba(0, 0, 0, 0) 0);
  }

      #test.green {
    background: conic-gradient(rgba(0, 0, 0, 0) 45%, lime 45% 60%, rgba(0, 0, 0, 0) 0);
  }

        #test.aqua {
    background: conic-gradient(rgba(0, 0, 0, 0) 60%, aqua 60% 75%, rgba(0, 0, 0, 0) 0);
  }

          #test.blue {
    background: conic-gradient(rgba(0, 0, 0, 0) 75%, blue 75% 90%, rgba(0, 0, 0, 0) 0);
  }

            #test.violet {
    background: conic-gradient(rgba(0, 0, 0, 0) 90%, purple 90% 100%, rgba(0, 0, 0, 0) 0);
  }
</style>
