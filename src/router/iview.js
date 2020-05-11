/*export default [
    {
        path: '/iview/grid',
        name: 'iview',
        component: () => import('../views/demo/iview/grid.vue'),
        meta: {
            title: '栅格布局'
        }
    },
    {
        path: '/iview/list',
        name: 'iview',
        component: () => import('../views/demo/iview/list.vue'),
        meta: {
            title: '列表'
        }
    },
]*/
let files = require.context('../views/demo/iview', true, /\w*\.vue$/)
let  moduleRouters=[];
files.keys().forEach(key => {
    // moduleRouters = moduleRouters.concat(files(key).default);
    console.log(files(key).default);
    moduleRouters.push({
        path:`/iview/${files(key).default.name}`,
        name:files(key).default.name,
        component:() => import(`../views/demo/iview/${files(key).default.name}.vue`),
    })
})
console.log(moduleRouters)
export default [
    ...moduleRouters
]