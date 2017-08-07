<template>
    <div class="card" v-bind:style="styles">
        {{ pattern.title }}
        <swatch v-for="color in pattern.colors" :color="color"/>
    </div>
</template>

<script>
import Swatch from './Swatch.vue'
import tinycolor from 'tinycolor2'
export default {
    components: {
        swatch: Swatch,
    },
    name: 'patternCard',
    props: ['pattern'],
    computed: {
        imageUrl: function() {
            return 'url(' + this.pattern.imageUrl + ')'
        },
        styles: function() {
            return { 
                backgroundImage: this.imageUrl,
                color:  tinycolor.mostReadable(this.pattern.colors[0], ['#000', '#FFF']).toHexString()
            }
        }
    }
}
</script>


<style>

</style>