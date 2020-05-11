<template>
    <div>
        <vue-tinymce
                v-model="content"
                :setup="setup"
                :setting="setting" />
    </div>
</template>
<script>
    export default {
        name: "tiny",
        components: {},
        data() {
            return {
                content: "<p>html content</p>",
                setting: {
                    height: 500
                }
            }
        },
        methods: {
            setup(editor) {
                console.log(editor)
            }
        }
    }
</script>

<style lang="" scoped>

</style>
