<template>
    <div>
        <div class="demo-avatar">
            <Avatar icon="ios-person" size="large" />
            <Avatar icon="ios-person" />
            <Avatar icon="ios-person" size="small" />
        </div>
        <render-fun :id="header">
         <tab></tab>
        </render-fun>
    </div>
</template>
<script>
    import tab from "./tab.vue"
    // import renderFun from "./renderFun.js";
    export default {
        name: "avator",
        components: {tab},
        data() {
            return {
                header:"尚博信"
            }
        },
        methods: {}
    }
</script>

<style lang="" scoped>

</style>
