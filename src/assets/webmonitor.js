(function(){
    /*
    *
    * 工具类
    *
    */
    function MonitorUtils(){
        /**
         * 封装简易的ajax请求
         * @param method  请求类型(大写)  GET/POST
         * @param url     请求URL
         * @param param   请求参数
         * @param successCallback  成功回调方法
         * @param failCallback   失败回调方法
         */
        this.ajax = function(method, url, param, successCallback, failCallback) {
            var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xmlHttp.open(method, url, true);
            xmlHttp.setRequestHeader('Content-Type','application/json');
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 ) {
                    if( xmlHttp.status == 200 ){
                        var res = JSON.parse(xmlHttp.responseText);
                        typeof successCallback == 'function' && successCallback(res);
                    }else {
                        typeof failCallback == 'function' && failCallback();
                    }


                }
            };
            xmlHttp.send( JSON.stringify( param ) );
        }
    }

    var util = new MonitorUtils();

    function ajaxEventTrigger(event){
        var ajaxEvent = new CustomEvent( event, { detail : this } );
        window.dispatchEvent( ajaxEvent );
    }

    var oldXHR = window.XMLHttpRequest;

    function newXHR(){
        var realXHR = new oldXHR();

        realXHR.addEventListener( 'abort', function(){ ajaxEventTrigger.call( this, 'ajaxAbort' ) }, false );

        realXHR.addEventListener( 'error', function(){ ajaxEventTrigger.call( this, 'ajaxError' ) }, false );

        realXHR.addEventListener( 'load', function(){ ajaxEventTrigger.call( this, 'ajaxLoad' ) }, false );

        realXHR.addEventListener( 'loadstart', function(){ ajaxEventTrigger.call( this, 'ajaxLoadStart' ) }, false );

        realXHR.addEventListener( 'progress', function(){ ajaxEventTrigger.call( this, 'ajaxProgress' ) }, false );

        realXHR.addEventListener( 'timeout', function(){ ajaxEventTrigger.call( this, 'ajaxTimeout' ) }, false );

        realXHR.addEventListener( 'loadend', function(){ ajaxEventTrigger.call( this, 'ajaxLoadEnd' ) }, false );

        realXHR.addEventListener( 'readystatechange', function(){ ajaxEventTrigger.call( this, 'ajaxReadStateChange' ) }, false );

        return realXHR;
    }

    window.XMLHttpRequest = newXHR;

    function ajaxEventMonitor(){

        function getTimeRecordArray(){
            /*window.timeRecordArray = sessionStorage.getItem( 'timeRecordArray' );
            if( timeRecordArray ){
                timeRecordArray = JSON.parse( timeRecordArray );
            }else{
                timeRecordArray = [];
            }*/

            if( !window.timeRecordArray ){
                window.timeRecordArray = [];
            }
        }

        window.addEventListener( 'ajaxLoadStart', function(e){
            getTimeRecordArray();

            var tempObj = {
                beginTime: new Date().getTime(),
                event: e,
                simpleUrl: window.location.href.split('?')[0].replace('#', ''),
                uploadFlag: false,
            };
            timeRecordArray.push(tempObj);

        } );

        window.addEventListener( 'ajaxLoadEnd', function(e){
            
            let arr = [];
            for (var j = 0; j < timeRecordArray.length; j ++) {
                var url = timeRecordArray[j].event.detail.responseURL;
                if( /(tia\.taikang\.com\/g\/w)|(monitor\/api\/v1\/monitorEvent)/.test( url ) ){

                }else{
                    arr.push( timeRecordArray[j] );
                }
            }
            timeRecordArray = arr;

            for (var i = 0; i < timeRecordArray.length; i ++) {
                // uploadFlag == true 代表这个请求已经被上传过了
                if ( timeRecordArray[i].uploadFlag ) continue;
                if ( timeRecordArray[i].event.detail.status > 0 ) {

                    var rType = String( timeRecordArray[i].event.detail.responseType ).toLowerCase();

                    if (rType === "blob") {
                        (function(index) {
                            var reader = new FileReader();
                            reader.onload = function() {
                                var responseText = reader.result;//内容就在这里
                                handleHttpResult(index, responseText);
                            };
                            try {
                                reader.readAsText(timeRecordArray[i].event.detail.response, 'utf-8');
                            } catch (e) {
                                handleHttpResult(index, timeRecordArray[i].event.detail.response + "");
                            }
                        })(i);
                    } else {
                        var responseText = timeRecordArray[i].event.detail.responseText;
                        handleHttpResult(i, responseText);
                    }
                }
            }
        } );

        function handleHttpResult(i, tempResponseText) {
            if (!timeRecordArray[i] || timeRecordArray[i].uploadFlag === true) {
                return;
            }
            var responseText = "";
            if (tempResponseText && responseText.length < 300) {
                try {
                    responseText = tempResponseText ? JSON.stringify(JSON.parse(tempResponseText)) : "";
                } catch (e) {
                    responseText = "";
                }
            } else {
                responseText = "data is too long";
            }

            let requestObj = {};
            requestObj.url = timeRecordArray[i].event.detail.responseURL;
            requestObj.status = timeRecordArray[i].event.detail.status;
            requestObj.statusText = timeRecordArray[i].event.detail.statusText;
            timeRecordArray[i].requestObj = requestObj;

            timeRecordArray[i].endTime = new Date().getTime();
            timeRecordArray[i].timeStamp = timeRecordArray[i].endTime - timeRecordArray[i].beginTime;

            // 当前请求成功后就，就将该对象的uploadFlag设置为true, 代表已经上传了
            timeRecordArray[i].uploadFlag = true;

            // sessionStorage.setItem( 'timeRecordArray', JSON.stringify( timeRecordArray ) );

        }

    }

    function sendRequestInfo(){
        var list = [],
            remainArr = [];

        for (var i = 0; i < timeRecordArray.length; i ++) {
            if( timeRecordArray[i].uploadFlag ){ // 只发送已返回的接口数据
                list.push( {
                    eventDesc : timeRecordArray[i].timeStamp,
                    eventName : timeRecordArray[i].requestObj.url.split('?')[0].replace('#', ''),
                    systemCd : 'TL_H5'
                } );
            }else{ // 保留未发送
                remainArr.push( timeRecordArray[i] );
            }
        }

        timeRecordArray = remainArr;

        if( !list || !list.length )return;

        console.log( 'monitorEvent：', list );

        util.ajax(
            'POST',
            "/rc-monitor-domain/monitor/api/v1/monitorEvent",
            {
                data : list
            },
            res => {
                // sessionStorage.removeItem( 'timeRecordArray' );
                console.log( res );
            },
            err => {
                console.log( err );
            }
        );

    }


    function initMonitor(){
        try{
            ajaxEventMonitor();

            setInterval( function(){
                sendRequestInfo();
            }, 1000*10 );

        }catch( err ){
            console.log( 'initMonitor-error：', initMonitor );
        }
    }

    initMonitor();

})();
