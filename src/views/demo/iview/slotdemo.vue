<template>
    <div class="father">
        <h3>这里是父组件</h3>
        <child title="childtitle" >
            <div class="tmpl" slot="up">
                <span>菜单1</span>
            </div>
            <div class="tmpl" slot="down">
                <span>菜单-2</span>

            </div>
            <div class="tmpl">
                <span>菜单->1</span>
                <span>菜单->2</span>

            </div>
        </child>
    </div>
</template>
<script>
    import child from "./components/slotchild";
    export default {
        name: "slotdemo",
        components: {child},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="" scoped>

</style>
