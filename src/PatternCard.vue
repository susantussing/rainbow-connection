<template>
    <div class="card" v-bind:style="styles">
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
.card {
    z-index: 100;
    height: 80vh;
    width: 80vh;
    margin-top: 10vh;
    margin-left: calc(50% - 40vh);
    border-radius: 50%;
    line-height: 80vh;
    text-align: center;
}
</style>