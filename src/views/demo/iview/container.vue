<template>
    <div>
        <div>
            审核
        </div>
        <div class="container">
            <render-fun  :id="header">
                <div slot="headers"></div>
            </render-fun>
        </div >

        <div>统一不同意</div>
    </div>

</template>
<script>
    // import renderFun from "./renderFun.js";
    export default {
        name: "container",
        components: {
            // renderFun
        },
        data() {
            return {
                header:"demo"
            }
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        height: 400px;
        overflow: scroll;
        background: pink;
    }
</style>
