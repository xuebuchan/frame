import axios from 'axios'
import tool from './tool'
import { Toast } from 'vant'
// 引入element ui中的loading和message组件

let loadinginstace
//http request 拦截器
axios.interceptors.request.use(
	config => {
		return config;
	},
	err => {
		Toast.fail('加载超时')
		return Promise.reject(err);
	});
// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(error.response) {
			switch(error.response.status) {
				// 401 清除token信息并跳转到登录页面(store.commit(types.LOGOUT);)
				case 401:
					{
						//sessionStorage.removeItem("token");
					};
					//跳转登录页面
					window.location.href = error.response.data.data.redirectUrl
					/*var ua=navigator.userAgent.toLowerCase();
					if(/tk_pfandroidapp/.test(ua)){
						//android
						window.android_to_login.toLogin();
					}else if(/(iPhone|iPad|iPod|iOS)/i.test(ua)&&/tk_pfiosapp/.test(ua)){
						//ios
						toLogin();
					}*/
			}
		}
		//		Message.error({
		//			message: '加载失败'
		//		})
		return Promise.reject(error.response.data);
	});
const Plugin = {
	install(vue, options) {
		vue.prototype.$getInterfaceData = function(url, type, data, headers) {
			var configHeaders = {
				'Accept': 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
			};
			let token = "";
//  		alert(tool.isnotNull(localStorage.getItem('token')))
//  		alert(window.location.href)
			if(window.location.href.indexOf('token=') >= 0) {
				token = tool.localSaveToken()
				localStorage.setItem('token', token);
			} else {
				token = localStorage.getItem('token')
			}
			token = localStorage.getItem('token');
			let urlHref = window.location.href;
			//let token=localStorage.getItem('token');

			configHeaders = Object.assign({
				'token': token,
				'urlHref': urlHref
			}, configHeaders);

			let Public = { //公共参数
				/*'srAppid': ""*/
			}
			let httpDefaultOpts = { //http默认配置
				method: type,
				url: url,
				headers: configHeaders,
				timeout: 20000, //超时时间
				params: Object.assign(Public, data),
				data: data,
				transformRequest: function(data) {
					// 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等...
					data = JSON.stringify(data);
					//console.log('请求的参数:', data);
					return data;
				},
				transformResponse: function(data) {
					// 这里提前处理返回的数据
					data = JSON.parse(data);
					// console.log('返回的数据:', data);
					return data;
				}
			}
			if(type == 'GET') {
				delete httpDefaultOpts.data;
			} else {
				delete httpDefaultOpts.params;
			}

			let promise = new Promise(function(resolve, reject) {
				axios(httpDefaultOpts).then(
					(res) => {
						resolve(res)
					}
				).catch(
					(response) => {
						reject(response)
					}
				)
			})
			return promise
		}
	}
}
//生成随机uuid
function S4() {
	return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
	return(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
export default Plugin;