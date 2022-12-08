export default {
    name: "Thecars",

    emits: ['loadbdata'],

    props: {
        value: Object
    },

    template: 
    `
    
    <div @click="loadBData" class="slide">            
        <div class="car-slide">
            <div class="slide-door">
                <h3>{{value.name}}</h3>
                <h4 class="subtitle-slide">{{value.subtitle}}</h4>
                <img :src='"images/"+ value.image' alt="" class="car">
                <button @click="loadBData">view more</button>
            </div>
    <div>
    `,

    methods: {
        loadBData() {
            //pass the individual object back to the main VM
            this.$emit('loadbdata', this.value);
        }
    }

}