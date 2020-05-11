const webpack = require('webpack')
const path = require('path')
module.exports = {
	// baseUrl:'/frame/dist/',
	baseUrl:'./',
	/*configureWebpack: {
		plugins: [
// 			new webpack.ProvidePlugin({
// 				$:"jquery",
//
// 				jQuery:"jquery",
// 				"windows.jQuery":"jquery"
// 			})
		],
// 		 externals:{
//             'vue': 'Vue',
//             'vue-router': 'VueRouter',
//             'vuex': 'Vuex',
//             'axios': 'axios',
//           }
	},*/
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'libs': '@/libs',
                'views': '@/views'
            }
        },
        externals: {
        }
    },
	 devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',//目标地址
                ws: true, //// 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {'^/api': '/'}    //这里重写路径
            }

        }
    },
	chainWebpack: config => {//①这里是配置的部分
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))  // A

    },

}
// 引入公共样式
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/css/mixin.less'),  // B
            ],
        })
}
