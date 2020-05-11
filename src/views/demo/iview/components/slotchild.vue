<template>
    <div class="child">
        // 具名插槽
        <slot name="up"></slot>
        <h3>这里是子组件</h3>
        // 具名插槽
        <slot name="down"></slot>
        // 匿名插槽
        <slot></slot>
        <hr>
        {{title}}
        <hr>
    </div>
</template>
<script>
    export default {
        name: "child",
        props:["title"],
        components: {},
        data() {
            return {}
        },
        methods: {},
        created() {
            console.log(this.$slots.up)
            console.log(this.$options)
        }
    }
</script>

<style lang="" scoped>

</style>
