<template>
    <div>
        <List :border="true" header="123">
            <div slot="header">hahah</div>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
                <template slot="action">
                    <li>
                        <a href="">Edit</a>
                    </li>
                    <li>
                        <a href="">More</a>
                    </li>
                </template>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
                <template slot="action">
                    <li>
                        <a href="">Edit</a>
                    </li>
                    <li>
                        <a href="">More</a>
                    </li>
                </template>
            </ListItem>
        </List>
    </div>
</template>
<script>
    export default {
        name: "list",
        components: {},
        data() {
            return {}
        },
        render:function(h){
          console.log(h)
        },
        methods: {},
        created() {
            console.log(this)
        }
    }
</script>

<style lang="" scoped>

</style>
