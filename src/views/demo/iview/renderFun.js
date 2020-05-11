
    let files = require.context('../vue', true, /\w*\.vue$/)
    let slotchild=[]
    files.keys().forEach(key => {
        console.log(files(key).default)
            // slotchild.push(import(`../vue/${files(key).default}`))
    })
    console.log(slotchild,"slotchild")
    import list from './list'
    export default {
        name: "renderFun",
        props:['header'],
        components: {list},
        data() {
            return {
                data:[1,2,3,4,5],
                title:"共创辉煌"
            }
        },
        functional: true,
        render:function(h){
            return h("div",{
                props:{title:"success"},
                class:{container:true},
                style:{},
                on:{
                    click:(item)=>{
                        console.log(this)
                        console.log(item)
                    }
                }
            },[h(slotchild,{
                    props:{
                        title:"hah"
                    }
            },'成功')])
        },
        methods: {}
    }

