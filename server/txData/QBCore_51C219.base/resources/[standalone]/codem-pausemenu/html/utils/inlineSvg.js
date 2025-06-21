export default {
    props: {
        src: {
            type: String,
            required: true
        },
        fill: {
            type: String,
            default: 'currentColor'
        },
        stroke: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            svg: ''
        }
    },
    async mounted() {
        const res = await fetch(this.src);
        const html = await res.text();
        this.svg = html;
    },
    async updated() {
        const res = await fetch(this.src);
        const html = await res.text();
        this.svg = html; 
    },
    template: `
        <div v-html="svg" :style="{fill:fill, stroke:stroke}" />
    `
}