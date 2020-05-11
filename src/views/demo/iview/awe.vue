<template>
    <div>
        <div class="color-list">
            <div
                    class="color-item"
                    v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
                    :key="color.text"
            >{{color.text}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "awe",
        components: {},
        data() {
            return {
                colors: [{
                    text: "Aquamarine"
                }, {
                    text: "Hotpink"
                }, {
                    text: "Gold"
                }, {
                    text: "Crimson"
                }, {
                    text: "Blueviolet"
                }, {
                    text: "Lightblue"
                }, {
                    text: "Cornflowerblue"
                }, {
                    text: "Skyblue"
                }, {
                    text: "Burlywood"
                }]
            }
        },
        methods: {},
        mounted() {
            this.$dragging.$on('dragged', ({ value }) => {
                console.log(value.item)
                console.log(value.list)
                console.log(value.otherData)
            })
            this.$dragging.$on('dragend', () => {
            })
        }
    }
</script>

<style lang="less" scoped>
    .color-item{
        height:40px;
        margin:10px;
        background: blue;
    }
</style>
