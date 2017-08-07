<template>
    <div class="swatch" v-bind:style="styles">
        {{ '#' + color }}
    </div>
</template>

<script>
import tinycolor from 'tinycolor2'
export default {
    name: 'swatch',
    props: ['color'],
    computed: {
        backgroundColor: function() {
            return "#" + this.color
        },
        styles: function() {
            return { 
                backgroundColor: this.backgroundColor,
                color:  tinycolor.mostReadable(this.backgroundColor, ['#000', '#FFF']).toHexString()
            }
        }
    }
}
</script>


<style>
div.swatch {
    height: 100px;
    width: 100px;
    border-radius: 40%;
    line-height: 100px;
    text-align: center;
    display: inline-block;
    margin: 1rem;
}

</style>