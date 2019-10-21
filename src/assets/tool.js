const tool={
	formatDate(date=new Date(),type=0,str='-'){
		if(!date.getMonth){
			date=new Date(date)
		}
		var obj={};
		obj.year=date.getFullYear();
		obj.month=this.formatNum(date.getMonth()+1)
		obj.date=this.formatNum(date.getDate());
		obj.hour=this.formatNum(date.getHours())
		obj.minute=this.formatNum(date.getMinutes())
		obj.second=this.formatNum(date.getSeconds());
		switch (type){
			case 0:
				return obj.year+str+obj.month+str+obj.date+" "+obj.hour+":"+obj.minute+":"+obj.second
				break;
			case 1:
				return obj.year+str+obj.month+str+obj.date
				break;
			case 2:
				return obj.hour+":"+obj.minute+":"+obj.second;
				
		}
		
	},
	formatNum(num){
		return num>9?num:'0'+num
		
		
	},
	//获取url里面的参数
	 getUrlParams(param){
	  // 有赖于浏览器环境， window.location.search 是浏览器函数
	  // 意思是:设置或返回从问号 (?) 开始的 URL（查询部分）。       
	  var query = window.location.search.substring(1);       
	  var vars = query.split("&");       
	  for (var i=0;i<vars.length;i++) {               
		var pair = vars[i].split("=");               
		if(pair[0] == param){return pair[1];}       
	  }       
	  return(false);
	},
	BrowserInfo :{      
	  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),      
	  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),      
	  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),      
	  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),      
	  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
	  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
	}


}
export default tool