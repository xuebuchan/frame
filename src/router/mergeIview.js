let files = require.context('../views/demo/iview', true, /\w*\.vue$/)
let  moduleRouters=[];
files.keys().forEach(key => {
    moduleRouters = moduleRouters.concat(files(key).default);
    console.log(moduleRouters)
})
export default [
    ...moduleRouters
]